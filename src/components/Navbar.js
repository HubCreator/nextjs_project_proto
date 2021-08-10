import { IoLogoIonitron } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [navStatus, setNavStatus] = useState(true);
  const handleClick = () => {
    console.log("hi");
    setNavStatus(!navStatus);
  };

  return (
    <>
      <header className="navbar-container">
        <div className="navbar-container__contents">
          <div className="contents__logo" onClick={handleClick}>
            <div className="contents__logo__img">
              <IoLogoIonitron />
            </div>
            <div className="contents__logo__name">Welcome</div>
          </div>

          <div className="contents__controller" onClick={handleClick}>
            {navStatus ? <GiHamburgerMenu /> : <IoMdClose />}
          </div>

          <nav className="navigation">
            <ul
              className={
                navStatus ? "contents__links" : "contents__links active"
              }
            >
              <li className="links__alink" onClick={handleClick}>
                Home
              </li>
              <li className="links__alink" onClick={handleClick}>
                Explore
              </li>
              <li className="links__alink" onClick={handleClick}>
                Settings
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
