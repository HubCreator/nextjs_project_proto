import { useState } from "react";

const Modal = () => {
  const [signStatus, setSignStatus] = useState(true); // true: left
  const onClick = () => {
    setSignStatus(!signStatus);
  };

  return (
    <div className="modal-screen">
      <div className="modal-container">
        <div className="container__blueBg">
          <div className="container__blueBg__box signIn">
            <h2 className="box__msg">Already Have an Account ?</h2>
            <button className="box__btn signIn" onClick={onClick}>
              Sign in
            </button>
          </div>

          <div className="container__blueBg__box signUp">
            <h2 className="box__msg">Don't Have an Account ?</h2>
            <button className="box__btn signUp" onClick={onClick}>
              Sign up
            </button>
          </div>
        </div>
        <div
          className={
            signStatus
              ? "container__formBox signInForm"
              : "container__formBox signUpForm"
          }
        >
          hi
        </div>
      </div>
    </div>
  );
};

export default Modal;
