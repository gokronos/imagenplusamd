import type { ReactNode } from 'react';
import { InternalMenu } from '@/components/layout/internal-menu';

type BlogLayoutProps = {
  children: ReactNode;
};

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <>
      <InternalMenu />
      {children}
    </>
  );
}
