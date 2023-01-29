import Logo from '../assets/img/foodVilla.png'
const Title = ()=> {
    return (
        <a>
            <img className="logo" alt="logo" src={Logo}></img>
        </a>
    )
}
const Header = ()=> {
    return (
        <div className="header">
            <Title />
            <div className='nav-items'>
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
                <div>Cart</div>
                <div>Instamart</div>
            </div>
        </div>
    )
}
export default Header;