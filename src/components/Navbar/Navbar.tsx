import { CgPokemon, CgInfo, CgSearch } from 'react-icons/cg';
import NavbarItem from './NavbarItem';

const links = [
  {
    text: 'My Pokemon',
    url: '/my-pokemon',
    icon: <CgPokemon />,
  },
  {
    text: 'Find Pokemon',
    url: '/',
    icon: <CgSearch />,
  },
  {
    text: 'About',
    url: '/about',
    icon: <CgInfo />,
  },
];

const Navbar = () => {
  return (
    <nav className="menu-navigation">
      {links.map((item, index) => (
        <NavbarItem
          key={index}
          {...item}
          // eslint-disable-next-line no-restricted-globals
          isActive={location.pathname === item.url}
        />
      ))}
    </nav>
  );
};

export default Navbar;
