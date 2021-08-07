import { IoLogoIonitron } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [navStatus, setNavStatus] = useState(true);
  const handleClick = () => {
    // console.log(e);
    setNavStatus(!navStatus);
  };

  return (
    <section className="navbar-container">
      <div className="navbar-container__contents">
        <div className="contents__logo">
          <div className="contents__logo__img">
            <IoLogoIonitron />
          </div>
          <div className="contents__logo__name">Welcome</div>
        </div>

        <div className="contents__controller" onClick={handleClick}>
          {navStatus ? <GiHamburgerMenu /> : <AiOutlineClose />}
        </div>

        <ul
          className={navStatus ? "contents__links active" : "contents__links"}
        >
          <li className="links__alink">Home</li>
          <li className="links__alink">Explore</li>
          <li className="links__alink">Settings</li>
        </ul>
      </div>
    </section>
  );
};

export default Navbar;
