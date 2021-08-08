import { useState } from "react";

const Modal = () => {
  const [signStatus, setSignStatus] = useState(true); // true: left
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const onClick = () => {
    setSignStatus(!signStatus);
  };

  const onChange = (event) => {
    const {
      target: { value, className },
    } = event;

    if (className === "formBox__content__title") {
      setTitle(value);
    } else if (className === "formBox__content__description") {
      setDescription(value);
    } else {
      setName(value);
    }
  };

  return (
    <div className="modal-screen">
      <div className="modal-container">
        <div className="container__blueBg">
          <div className="container__blueBg__box leftBox">
            <h2 className="box__msg">Sure to post public?</h2>
            <button className="box__btn" onClick={onClick}>
              Go back
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
                <input
                  className="formBox__content__title"
                  type="text"
                  placeholder="Title.."
                  value={title}
                  onChange={onChange}
                />
              </div>
              <div className="formBox__content formBox__description">
                <span>Description</span>
                <textarea
                  className="formBox__content__description"
                  type="text"
                  placeholder="Description.."
                  value={description}
                  onChange={onChange}
                />
              </div>
              <div className="formBox__content formBox__name">
                <span>Name</span>
                <input
                  className="formBox__content__name"
                  type="text"
                  placeholder="Name.."
                  value={name}
                  onChange={onChange}
                />
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
