import { useEffect, useState } from "react";
import ColorToggle from "../ColorToggle/ColorToggle";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./NavBar.css";
import useMobile from "../../Utility/Hooks/setMobile";
import logo from "../../assets/logo.png";
import Profile from "../Profile/Profile";

function NavBar() {
  const menus = [
    { id: 1, title: "Wallet" },
    { id: 2, title: "Swap" },
  ];

  const [{ isMobile }] = useMobile();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState(1);

  useEffect(() => {
    if (!isMobile) setIsNavOpen(false);
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleNavOpen = () => {
    setIsNavOpen((prev) => !prev);
  };
  function handleNavClick(index: any): void {
    setActiveNav(index);
  }

  return (
    <div
      className={
        isScrolled
          ? "nav-bar-container  nav-bar-container-shadow"
          : "nav-bar-container"
      }
    >
      <div className="nav-bar">
        <div className="nav-bar-title">
          <img src={logo} height="80px" /> CryptoBox
        </div>
        <ul
          className={isNavOpen ? "nav-bar-items nav-visible" : "nav-bar-items "}
          hidden
        >
          {menus.map((menu: any) => (
            <li
              className={
                activeNav === menu.id
                  ? "nav-item-active  nav-bar-item"
                  : " nav-bar-item"
              }
              onClick={() => handleNavClick(menu.id)}
              key={menu.id}
            >
              {menu.title}
            </li>
          ))}
        </ul>
        <div className="nav-bar-options">
          <ColorToggle className="nav-bar-option" />
          <Profile name={"Mathan raj"} />
          {isMobile && (
            <button onClick={toggleNavOpen}>
              {isNavOpen ? (
                <CloseIcon className="nav-bar-option" />
              ) : (
                <MenuIcon className="nav-bar-option" />
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
