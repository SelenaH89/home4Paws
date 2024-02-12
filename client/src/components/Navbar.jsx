import { useEffect, useState } from 'react';
import { FaBars, FaDog, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // nav items here
  const navItems = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Adopt',
      path: '/adopt',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Adoption Management',
      path: '/admin/dashboard',
    },
    {
      name: 'Contact Us',
      path: '/contactUs',
    },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={`py-4 lg:px-24 px-4 ${
          isSticky ? 'sticky top-0 left-0 right-0 bg-blue-300' : ''
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-700 flex items-center gap-2"
          >
            <FaDog className="inline-block" />
            Home4Paws
          </Link>

          {/* nav items for larger devices */}
          <ul className="md:flex space-x-12 hidden">
            {navItems.map(({ name, path }) => (
              <li
                key={path}
                className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
              >
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>

          {/* Button for larger devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button onClick={toggleMenu}>
              <FaBars className="w-5 hover:text-blue-700" />
            </button>
          </div>

          {/* menu btn for the mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-5 w-5 text-black" />
              ) : (
                <FaBars className="h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>

        {/* navitems for small devices */}
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${
            isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'
          }`}
        >
          {navItems.map(({ name, path }) => (
            <li
              key={path}
              className="block text-base text-white uppercase cursor-pointer"
            >
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
