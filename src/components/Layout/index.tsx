import Navbar from '../Navbar/Navbar';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-rangoon-green">
      <main className="layout">
        {children}
        <Navbar />
      </main>
    </div>
  );
};

export default Layout;
