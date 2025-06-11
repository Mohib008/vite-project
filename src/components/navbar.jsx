import Logo from './logo';
import Input from './input';
import NumResults from './NumResults';

function NavBar() {
    
  return (

    <>
     <div className="top-sticky">
      <nav className="nav-bar">
        <Logo />
        <Input />
        <NumResults />
      </nav>
      </div>
    </>
    );
};

export default NavBar;