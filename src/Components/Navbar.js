import { Link } from 'react-router-dom';

const Navbar = function () {
  return (
    <section className='nav-background'>
      <div className='nav-bar container'>
        <div>Country Info</div>
        <div>
          <Link to='/' className='home'>
            Home
          </Link>
          <Link to='/about' className='about'>
            About
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
