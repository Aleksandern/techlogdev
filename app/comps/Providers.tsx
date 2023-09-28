'use client'

import { ThemeProvider } from 'next-themes';

interface PropsT {
  children: React.ReactNode,
}

const Providers: React.FC<PropsT> = ({ children }) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
  >{children}</ThemeProvider>
);

export default Providers;
