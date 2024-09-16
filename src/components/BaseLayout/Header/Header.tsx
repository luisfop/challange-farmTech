import "./header.scss";
import Logo from "../../../assets/logo.png";

const Header = () => {
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <div className="header">
      <img
        src={Logo}
        alt="Logo"
        className="header__logo"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default Header;
