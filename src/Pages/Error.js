import { Link } from 'react-router-dom';

const Error = function () {
  return (
    <section className='container'>
      <h2 className='error-message'>Oops! This page is not available.</h2>
      <Link to='/' className='btn'>
        Back to home
      </Link>
    </section>
  );
};

export default Error;
