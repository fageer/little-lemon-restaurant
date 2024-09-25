import { Link } from 'react-router-dom';
import footerLogo from "../assets/images/footerlogo.png"
function Footer(){
    return (
        <footer>
            <div className='footer'>
                <div>
                    <img src={footerLogo} alt="logo" />
                </div>
                <li className='footer_li'>
                <h1>Navigation</h1>
                    <ul className='footer-nav'>
                        <li><Link className='link' to="/">Home</Link></li>
                        <li><Link className='link' to="/about">About</Link></li>
                        <li><Link className='link' to="/menu">Menu</Link></li>
                        <li><Link className='link' to="/reservations">Reservations</Link></li>
                        <li><Link className='link' to="/order">Order online</Link></li>
                        <li><Link className='link' to="/login">Login</Link></li>
                    </ul>
                </li>
                <li className='footer_li'>
                <h1>Contact</h1>
                    <ul className='footer-nav'>
                        <li>2395 Maldove Way,</li>
                        <li>Riyadh</li>
                        <li>(629)-243-6827</li>
                        <li>info@littlelemon.com</li>
                    </ul>
                </li>
                <li className='footer_li'>
                <h1>Connect</h1>
                    <ul className='footer-nav'>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Join Us!</li>
                    </ul>
                </li>
            </div>
            <div>
                <p>�� 2022 Little Lemon. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;