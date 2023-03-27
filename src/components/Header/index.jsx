import logo from '../../assets/logo_wealth_health.jpeg'
import { Link } from 'react-router-dom'
import '../../style/components/Navbar.css'

export default function Header() {
    return (
        <div className="navbar">
                <Link to="/"><img src={logo} alt='logo-wealth-health'/></Link>
                <Link to='/employee-list'>Liste des employés</Link>
        </div>
    )
}