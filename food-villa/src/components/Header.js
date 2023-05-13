
import { Link } from 'react-router-dom'
import Logo from '../assets/img/foodVilla.png'

const Title = ()=> {
    return (
        <Link to="/">
            <img className="logo" alt="logo" src={Logo}></img>
        </Link>
    )
}
const Header = ()=> {
    return (
        <div className="header">
            <Title />
            <div className='nav-items'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}
export default Header;