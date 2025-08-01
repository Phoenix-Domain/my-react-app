import { Link } from 'react-router-dom';

function Nav(){
  return(
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/Users/mrBeast'>Mr Beast</Link>
      <Link to='/Users/kylie'>kylie</Link>
      <Link to='/Users/ImanMusa'>ImanMusa</Link>
    </nav>
  )
}

export default Nav;