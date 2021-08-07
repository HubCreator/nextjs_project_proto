import { IoLogoIonitron } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [navStatus, setNavStatus] = useState(false);
  return (
    <>
      <section className="navbar-container">
        <div className="navbar-container__contents">
          <div className="contents__logo">
            <div className="contents__logo__img">
              <IoLogoIonitron />
            </div>
            <div className="contents__logo__name">Welcome</div>
          </div>

          <div className="contents__controller">
            {navStatus ? <GiHamburgerMenu /> : <AiOutlineClose />}
          </div>
          <div className="contents__links">
            <div className="links__alink">Home</div>
            <div className="links__alink">Explore</div>
            <div className="links__alink">Settings</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
