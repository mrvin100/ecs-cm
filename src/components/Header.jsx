import { useState } from "react";
import ecsLogo from "/ecs.png";
export default function Header() {
  const items = [
    { label: "Accueil", to: "#" },
    { label: "Présentation", to: "#" },
    { label: "Services", to: "#" },
    { label: "Partenaires", to: "#" },
    { label: "Contact", to: "#" },
  ];
  const [toggleNavbar, setToggleNavbar] = useState(true);
  const handleToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar);
  };
  const handleCloseNavbar = () => {
    setToggleNavbar(false);
  };

  const [activeHeader, setActiveHeader] = useState(false);

  const handleActiveHeader = () => {
    scrollY ? setActiveHeader(true) : setActiveHeader(false);
  };

  window.addEventListener(
    "scroll",
    () => {
      handleCloseNavbar();
      handleActiveHeader();
    },
    scrollY > 0
  );
  return (
    <header className={`header ${activeHeader ? "active" : ""}`}>
      <div className="container">
        <img src={ecsLogo} className="logo" alt="ecs logo" />
        <div className={`navbar ${toggleNavbar ? "active" : ""}`}>
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <span
                key={item.label}
                className="nav_item"
                onClick={handleCloseNavbar}
              >
                {item.label}
              </span>
            ))}
          <span
            className="bx bx-x icon close_navbar"
            onClick={handleCloseNavbar}
          ></span>
        </div>
        <div className="icons">
          <span className="bx bx-moon icon"></span>
          <span
            className="bx bx-grid-alt icon menu_navbar"
            onClick={handleToggleNavbar}
          ></span>
        </div>
      </div>
    </header>
  );
}
