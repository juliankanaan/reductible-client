import Header from './Header';
import '../pages/index.css'

const Layout = props => (
      <div>
        <Header />
        <div className='appBody'>
          {props.children}
        </div>
      </div>
    );

export default Layout;
