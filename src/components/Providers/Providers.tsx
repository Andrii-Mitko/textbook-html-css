'use client';

import type { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import ProgressProvider from './ProgressProvider';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <ProgressProvider>{children}</ProgressProvider>
    </SessionProvider>
  );
}
