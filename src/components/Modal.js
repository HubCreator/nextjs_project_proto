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
          <div className="container__blueBg__box leftBox">
            <h2 className="box__msg">Already Have an Account ?</h2>
            <button className="box__btn" onClick={onClick}>
              Sign in
            </button>
          </div>

          <div className="container__blueBg__box rightBox">
            <h2 className="box__msg">Don't Have an Account ?</h2>
            <button className="box__btn" onClick={onClick}>
              Sign up
            </button>
          </div>
        </div>
        <div
          className={
            signStatus
              ? "container__formBox leftBox"
              : "container__formBox rightBox"
          }
        >
          {signStatus ? (
            <>
              <div className="formBox__content formBox__title">
                <span>Title</span>
                <input type="text" />
              </div>
              <div className="formBox__content formBox__description">
                <span>Description</span>
                <input type="text" />
              </div>
              <div className="formBox__content formBox__name">
                <span>Name</span>
                <input type="text" />
              </div>
            </>
          ) : (
            <div>hello</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
