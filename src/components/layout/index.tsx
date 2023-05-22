import { Inter } from 'next/font/google';
import Header from './Header';

const inter = Inter({ subsets: ['latin'] });

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between gap-10 p-6 lg:p-24 ${inter.className}`}
    >
      <Header />
      {children}
    </main>
  );
};

export default Layout;
