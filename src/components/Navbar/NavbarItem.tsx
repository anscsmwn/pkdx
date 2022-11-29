import { Link } from 'react-router-dom';

interface NavbarItemProps {
  url: string;
  text: string;
  icon: React.ReactNode;
  isActive: boolean;
}
const NavbarItem = ({ url, text, icon, isActive }: NavbarItemProps) => {
  return (
    <Link
      className={`${isActive ? 'item-nav-active' : 'item-nav'} group`}
      to={url}
    >
      <span className="scale-125 transition-all group-hover:scale-150">
        {icon}
      </span>
      <p className="text-sm">{text}</p>
    </Link>
  );
};

export default NavbarItem;
