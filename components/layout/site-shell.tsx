import type { ReactNode } from 'react';

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return <main id="main-content">{children}</main>;
}
