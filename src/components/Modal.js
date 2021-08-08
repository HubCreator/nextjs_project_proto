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

  const handleSubmit = () => {
    console.log("Completed!!!!");
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

    if (className === "leftForm__content__title") {
      setTitle(value);
    } else if (className === "leftForm__content__description") {
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
          <div className="container__blueBg__box leftForm">
            {/* <h2 className="box__msg">Sure to post public?</h2>
            <button className="box__btn" onClick={onClick}>
              Go back
            </button> */}
            <div className="leftBox__content title">
              <div className="leftBox__title">
                <h3>Title</h3>
                <span>{title}</span>
              </div>
            </div>
            <div className="leftBox__content description">
              <div className="leftBox__description">
                <h3>Description</h3>
                <pre>{description}</pre>
              </div>
            </div>
            <div className="leftBox__content name">
              <div className="leftBox__name">
                <h3>Name</h3>
                <span>{name}</span>
              </div>
            </div>
            <button className="leftBox__btn" onClick={onClick}>
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
              ? "container__formBox leftForm"
              : "container__formBox rightForm"
          }
        >
          {signStatus ? (
            <>
              <div className="leftForm__content leftForm__title">
                <span>Title</span>
                <input
                  className="leftForm__content__title"
                  type="text"
                  placeholder="Title.."
                  value={title}
                  onChange={onChange}
                />
              </div>
              <div className="leftForm__content leftForm__description">
                <span>Description</span>
                <textarea
                  className="leftForm__content__description"
                  type="text"
                  placeholder="Description.."
                  value={`${description}`}
                  onChange={onChange}
                />
              </div>
              <div className="leftForm__content leftForm__name">
                <span>Name</span>
                <input
                  className="leftForm__content__name"
                  type="text"
                  placeholder="Name.."
                  value={name}
                  onChange={onChange}
                />
              </div>
            </>
          ) : (
            <>
              <div className="rightForm__content rightForm__notice">
                Notice!!
              </div>
              <div className="rightForm__content rightForm__info">
                Your work will be uploaded on dashboard. Make sure it's okay to
                be public.
              </div>
              <button
                className="rightForm__content rightForm__btn"
                onClick={handleSubmit}
              >
                Next
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
