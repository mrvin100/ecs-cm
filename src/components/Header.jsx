import ecsLogo from "/ecs.png";
export default function Header() {
  const items = [
    { label: "Accueil", to: "#" },
    { label: "Présentation", to: "#" },
    { label: "Services", to: "#" },
    { label: "Partenaires", to: "#" },
    { label: "Contact", to: "#" },
  ];
  return (
    <header className="header">
      <div className="container">
        <img src={ecsLogo} className="logo" alt="ecs logo" />
        <div className="navbar">
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <span key={item.label} className="nav_item">
                {item.label}
              </span>
            ))}
        </div>
        <div className="icons">
          <span className="bx bx-moon icon"></span>
          <span className="bx bx-grid-alt icon"></span>
        </div>
      </div>
    </header>
  );
}
