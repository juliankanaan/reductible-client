import Link from 'next/link';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const linkStyle = {
  marginRight: 15
};

const Header = () => {
  return (
    <div className='header'>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/creare">
        <a style={linkStyle}>Create post request</a>
      </Link>
    </div>
    );
};

export default Header;
