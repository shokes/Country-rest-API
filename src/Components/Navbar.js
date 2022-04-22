import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdOutlineWbSunny, MdModeNight } from 'react-icons/md';

const Navbar = function () {
  const [theme, setTheme] = useState('light-theme');

  useEffect(() => {
    document.documentElement.classList = theme;
  }, [theme]);

  const toggleHandler = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };
  return (
    <section className='nav-background'>
      <div className='nav-bar container'>
        <Link to='/' className='home'>
          Country Info
        </Link>
        <div>
          <Link to='/about' className='about'>
            About
          </Link>
        </div>
        <div onClick={toggleHandler}>
          {theme === 'light-theme' ? (
            <p className='theme-icon'>
              <MdModeNight />
              Dark Mode
            </p>
          ) : (
            <p className='theme-icon'>
              <MdOutlineWbSunny />
              Light Mode
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
