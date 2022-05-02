import { Link } from 'react-router-dom';
import { MdOutlineWbSunny, MdModeNight } from 'react-icons/md';
import { useGlobalContext } from '../context';

const Navbar = function () {
  const { toggleHandler, theme } = useGlobalContext();

  return (
    <section className='nav-background'>
      <div className='nav-bar container'>
        <Link to='/' className='home'>
          Country Info
        </Link>

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
