'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useSession } from 'next-auth/react';

interface ProgressItem {
  tutorialId: string;
  lessonId: string;
}

interface ProgressContextValue {
  isAuthenticated: boolean;
  isCompleted: (tutorialId: string, lessonId: string) => boolean;
  countCompleted: (tutorialId: string) => number;
  markCompleted: (tutorialId: string, lessonId: string) => void;
}

const EMPTY_KEYS: ReadonlySet<string> = new Set();

const toKey = (tutorialId: string, lessonId: string) => `${tutorialId}/${lessonId}`;

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function useProgress() {
  const context = useContext(ProgressContext);

  if (!context) {
    throw new Error('useProgress must be used inside ProgressProvider');
  }

  return context;
}

export default function ProgressProvider({ children }: { children: ReactNode }) {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  // Зберігаємо userId разом з даними, щоб після зміни акаунта не показати чужий прогрес
  const [state, setState] = useState<{ userId: string; keys: Set<string> } | null>(null);
  const keys = state && state.userId === userId ? state.keys : EMPTY_KEYS;

  useEffect(() => {
    if (!userId) return;

    const controller = new AbortController();

    fetch('/api/progress', { signal: controller.signal })
      .then(response =>
        response.ok ? response.json() : Promise.reject(new Error('Progress error'))
      )
      .then((data: { completed: ProgressItem[] }) => {
        const loaded = new Set(data.completed.map(item => toKey(item.tutorialId, item.lessonId)));
        setState({ userId, keys: loaded });
      })
      .catch(() => {});

    return () => controller.abort();
  }, [userId]);

  const markCompleted = useCallback(
    (tutorialId: string, lessonId: string) => {
      if (!userId) return;

      // Оптимістичне оновлення: інтерфейс реагує одразу, не чекаючи відповіді сервера
      setState(prev => {
        const next = new Set(prev?.userId === userId ? prev.keys : []);
        next.add(toKey(tutorialId, lessonId));
        return { userId, keys: next };
      });

      // keepalive: запит завершиться навіть після переходу на іншу сторінку
      void fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tutorialId, lessonId }),
        keepalive: true,
      });
    },
    [userId]
  );

  const value = useMemo<ProgressContextValue>(
    () => ({
      isAuthenticated: Boolean(userId),
      isCompleted: (tutorialId, lessonId) => keys.has(toKey(tutorialId, lessonId)),
      countCompleted: tutorialId => {
        const prefix = `${tutorialId}/`;
        return [...keys].filter(key => key.startsWith(prefix)).length;
      },
      markCompleted,
    }),
    [userId, keys, markCompleted]
  );

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}
