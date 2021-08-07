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
      <div className="navbar-container">
        <div className="navbar-container__contents">
          <div className="contents__logo">
            <div className="contents__logo__img">
              <IoLogoIonitron />
            </div>
            <div className="contents__logo__name">Welcome</div>
          </div>

          <div className="contents__controller" onClick={handleClick}>
            {navStatus ? <GiHamburgerMenu /> : <IoMdClose />}
          </div>

          <ul
            className={navStatus ? "contents__links active" : "contents__links"}
          >
            <li className="links__alink">Home</li>
            <li className="links__alink">Explore</li>
            <li className="links__alink">Settings</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
