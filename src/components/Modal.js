import { useState } from "react";

const Modal = () => {
  const [signStatus, setSignStatus] = useState(true); // true: left
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [validation, setValidation] = useState([false, false, false]);
  const [isPassedValid, setIsPassedValid] = useState(false);

  const onClick = () => {
    setSignStatus(!signStatus);
  };

  const validateInput = () => {
    const tmp = [...validation];

    if (title.length > 5) {
      tmp[0] = true;
      setValidation(tmp);
    } else {
      tmp[0] = false;
      setValidation(tmp);
    }

    if (description.length > 10) {
      tmp[1] = true;
      setValidation(tmp);
    } else {
      tmp[1] = false;
      setValidation(tmp);
    }

    if (name.length > 2) {
      tmp[2] = true;
      setValidation(tmp);
    } else {
      tmp[2] = false;
      setValidation(tmp);
    }

    console.log(validation);

    // !validation.includes(false) && setIsPassedValid(true);
    validation.includes(false)
      ? setIsPassedValid(false)
      : setIsPassedValid(true);
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
                <h3>Title</h3>
                <span>{title}</span>
              </div>
            </div>
            <div className="leftBox__content">
              <div className="leftBox__description">
                <h3>Description</h3>
                <pre>{description}</pre>
              </div>
            </div>
            <div className="leftBox__content">
              <div className="leftBox__name">
                <h3>Name</h3>
                <span>{name}</span>
              </div>
            </div>
            <button className="box__btn" onClick={onClick}>
              Go back
            </button>
          </div>

          <div className="container__blueBg__box rightBox">
            <h2 className="box__msg">
              {isPassedValid ? "Valid!! Go Next Step" : "Error"}
            </h2>
            <button
              className="box__btn"
              onClick={onClick}
              disabled={!isPassedValid}
            >
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
                  value={`${description}`}
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
