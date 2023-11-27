import { Navbar } from './Navbar'
import logo from '../assets/img/logo_azul.png'
export const Header = () => {
  return (
    <header className="flex place-content-between items-center mb-0 bg-blue">
      <img src={logo} alt="Logo" />
      <Navbar />
    </header>
  )
}


