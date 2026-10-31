'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const { data: session, status } = useSession();
  const router = useRouter();

  async function handleSignOut() {
    await signOut({ redirect: false });
    router.refresh();
  }

  // Резервуємо місце, щоб шапка не стрибала під час завантаження сесії
  if (status === 'loading') return <div className={css.placeholder} />;

  if (!session) {
    return (
      <div className={css.menu}>
        <Link href="/login" className={css.link}>
          Увійти
        </Link>
        <Link href="/register" className={css.primary}>
          Реєстрація
        </Link>
      </div>
    );
  }

  return (
    <div className={css.menu}>
      <span className={css.name}>{session.user.name}</span>
      <button className={css.primary} type="button" onClick={handleSignOut}>
        Вийти
      </button>
    </div>
  );
}
