import type { ReactNode } from 'react';
import { InternalMenu } from '@/components/layout/internal-menu';

type ServiciosLayoutProps = {
  children: ReactNode;
};

export default function ServiciosLayout({ children }: ServiciosLayoutProps) {
  return (
    <>
      <InternalMenu />
      {children}
    </>
  );
}
