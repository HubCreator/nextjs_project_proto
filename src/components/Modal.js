import { useState } from "react";

const Modal = () => {
  const [signStatus, setSignStatus] = useState(true); // true: left
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [validation, setValidation] = useState([false, false, false]);
  const onClick = () => {
    setSignStatus(!signStatus);
  };

  const validateInput = () => {
    if (title.length > 5) {
      const tmp = [...validation];
      tmp[0] = true;
      setValidation(tmp);
    }
    if (description.length > 10) {
      const tmp = [...validation];
      tmp[1] = true;
      setValidation(tmp);
    }
    if (name.length > 2) {
      const tmp = [...validation];
      tmp[2] = true;
      setValidation(tmp);
    }
    console.log(validation);
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

    validateInput();
  };

  return (
    <div className="modal-screen">
      <div className="modal-container">
        <div className="container__blueBg">
          <div className="container__blueBg__box leftBox">
            {/* <h2 className="box__msg">Sure to post public?</h2>
            <button className="box__btn" onClick={onClick}>
              Go back
            </button> */}
            <div className="leftBox__content">
              <div className="leftBox__title">
                <span>Title</span>
                <span>{title}</span>
              </div>
            </div>
            <div className="leftBox__content">
              <div className="leftBox__description">
                <span>Description</span>
                <span>{description}</span>
              </div>
            </div>
            <div className="leftBox__content">
              <div className="leftBox__name">
                <span>Name</span>
                <span>{name}</span>
              </div>
            </div>
            <button className="box__btn" onClick={onClick}>
              Go back
            </button>
          </div>

          <div className="container__blueBg__box rightBox">
            <h2 className="box__msg">
              {validation.includes(false) ? "Error" : "Next Step"}
            </h2>
            <button className="box__btn" onClick={onClick}>
              Next
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
