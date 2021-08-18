import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen}) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Acceuil</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portefolio">Portefolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;