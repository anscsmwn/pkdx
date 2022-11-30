import Navbar from '../Navbar/Navbar';
import { Helmet } from 'react-helmet-async';
import { motion as m } from 'framer-motion';
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
      <div className="layout">
        <m.main
          animate="enter"
          exit="exit"
          initial="initial"
          variants={{
            initial: { opacity: 0, y: 2 },
            enter: { opacity: 1, y: 0, transition: { duration: 0.2 } },
            exit: { opacity: 0, transition: { duration: 0.1 } },
          }}
        >
          {children}
        </m.main>
        <Navbar />
      </div>
    </div>
  );
};

export default Layout;
