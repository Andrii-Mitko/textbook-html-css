import type { Metadata } from 'next';
import AuthForm from '@/components/forms/AuthForm/AuthForm';

export const metadata: Metadata = {
  title: 'Вхід | HTML & CSS Textbook',
  robots: { index: false },
};

export default function LoginPage() {
  return <AuthForm mode="login" />;
}
