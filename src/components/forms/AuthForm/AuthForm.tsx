'use client';

import { useState, type SyntheticEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import css from './AuthForm.module.css';

type AuthFormProps = {
  mode: 'login' | 'register';
};

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState(false);
  const isRegister = mode === 'register';

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setIsPending(true);

    const formData = new FormData(event.currentTarget);
    const email = String(formData.get('email'));
    const password = String(formData.get('password'));

    try {
      if (isRegister) {
        const response = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: formData.get('name'), email, password }),
        });

        if (!response.ok) {
          const data: { error?: string } = await response.json();
          setError(data.error ?? 'Помилка реєстрації');
          return;
        }
      }

      // Після реєстрації одразу логінимо користувача
      const result = await signIn('credentials', { email, password, redirect: false });

      if (result?.error) {
        setError('Невірний email або пароль');
        return;
      }

      router.push('/');
      router.refresh();
    } catch {
      setError('Не вдалося з’єднатися з сервером');
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h1 className={css.title}>{isRegister ? 'Реєстрація' : 'Вхід'}</h1>

      {isRegister && (
        <label className={css.label}>
          Ім’я
          <input className={css.input} name="name" type="text" autoComplete="name" required />
        </label>
      )}

      <label className={css.label}>
        Email
        <input className={css.input} name="email" type="email" autoComplete="email" required />
      </label>

      <label className={css.label}>
        Пароль
        <input
          className={css.input}
          name="password"
          type="password"
          autoComplete={isRegister ? 'new-password' : 'current-password'}
          minLength={isRegister ? 8 : undefined}
          required
        />
      </label>

      {error && (
        <p className={css.error} role="alert">
          {error}
        </p>
      )}

      <button className={css.button} type="submit" disabled={isPending}>
        {isPending ? 'Зачекайте...' : isRegister ? 'Зареєструватися' : 'Увійти'}
      </button>

      <p className={css.switch}>
        {isRegister ? 'Вже є акаунт?' : 'Ще немає акаунта?'}{' '}
        <Link href={isRegister ? '/login' : '/register'}>
          {isRegister ? 'Увійти' : 'Зареєструватися'}
        </Link>
      </p>
    </form>
  );
}
