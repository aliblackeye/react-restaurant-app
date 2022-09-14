import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdCart } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import './header.scss';
import { useEffect, useState } from 'react';


export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/">
          <div className="logo">
            <img src="./images/header/logo.png" alt="" />
          </div>
        </Link>
        <nav className="navbar">
          <Link to="/"><div className="nav-item">Ana Sayfa</div></Link>
          <Link to="/about"><div className="nav-item">Hakkımızda</div></Link>
          <Link to="/menu"><div className="nav-item">Menü</div></Link>
          <Link to="/products"><div className="nav-item">Ürünler</div></Link>
          <Link to="/reviews"><div className="nav-item">İncelemeler</div></Link>
          <Link to="/contact"><div className="nav-item">İletişim</div></Link>

        </nav>
        <div className="icons">
          <div className="icon"><AiOutlineSearch size={24} /></div>
          <div className="icon"><IoMdCart size={24} /></div>
          <div className="icon hamburger-menu-icon" onClick={handleClick}><GiHamburgerMenu size={24} /></div>
        </div>
      </div>

      <div className={`hamburger-menu ${isMenuOpen ? "active" : ""}`}>
        <Link to="/"><div className="nav-item">Ana Sayfa</div></Link>
        <Link to="/about"><div className="nav-item">Hakkımızda</div></Link>
        <Link to="/menu"><div className="nav-item">Menü</div></Link>
        <Link to="/products"><div className="nav-item">Ürünler</div></Link>
        <Link to="/reviews"><div className="nav-item">İncelemeler</div></Link>
        <Link to="/contact"><div className="nav-item">İletişim</div></Link>
      </div>
    </header>
  )
}
