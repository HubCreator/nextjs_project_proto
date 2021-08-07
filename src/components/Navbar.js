const Navbar = () => {
  return (
    <>
      <section className="navbar-container">
        <div className="navbar-container__logo">
          <div className="navbar-container__logo__img"></div>
          <div className="navbar-container__logo__name"></div>
        </div>
        <div className="navbar-container__links">
          <div className="links__link">Home</div>
          <div className="links__link">Explore</div>
          <div className="links__link">Settings</div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
