import Navbar from '../Navbar/Navbar';
import { Helmet } from 'react-helmet-async';
interface LayoutProps {
  title: string;
  children: React.ReactNode;
}
const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="bg-rangoon-green">
      <Helmet>
        <title>{title} | PkDX: PokeDex App</title>
      </Helmet>
      <main className="layout">
        {children}
        <Navbar />
      </main>
    </div>
  );
};

export default Layout;
