import type { Metadata } from 'next';
import AuthForm from '@/components/forms/AuthForm/AuthForm';

export const metadata: Metadata = {
  title: 'Реєстрація | HTML & CSS Textbook',
  robots: { index: false },
};

export default function RegisterPage() {
  return <AuthForm mode="register" />;
}
