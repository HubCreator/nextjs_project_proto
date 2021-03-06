import { useEffect, useState } from "react";
import { IoMdWarning } from "react-icons/io";
import { AiOutlineCheckCircle } from "react-icons/ai";
const Modal = () => {
  const [signStatus, setSignStatus] = useState(true); // true: left
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [validation, setValidation] = useState([false, false, false]);
  const [isPassedValid, setIsPassedValid] = useState(false);
  const [modalTrigger, setModalTrigger] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (event) => {
    const {
      target: { value, className },
    } = event;

    if (className === "leftForm__content__title") {
      setTitle(value);
    } else if (className === "leftForm__content__description") {
      setDescription(value);
    } else if (className === "leftForm__content__name") {
      setName(value);
    }
  };

  const onClick = () => {
    setSignStatus(!signStatus);
  };

  const onKeyPress = (event) => {
    const { code } = event;
    if (code === "Enter" || code === "Digit2" || code === "Digit3")
      event.preventDefault();
  };

  const handleSubmit = () => {
    console.log("Completed!!!!");
  };

  const handleValidation = () => {
    let tmp = [...validation];

    tmp[0] = title.length >= 3 ? true : false;
    tmp[1] = description.length >= 10 ? true : false;
    tmp[2] = name.length >= 3 ? true : false;

    setValidation(tmp);
    tmp.includes(false) ? setIsPassedValid(false) : setIsPassedValid(true);

    console.log(errorMsg);
  };

  useEffect(() => {
    handleValidation();
  }, [title, description, name]);

  return (
    <>
      <div
        className="modal-trigger"
        onClick={() => setModalTrigger((prev) => !prev)}
      >
        Click here!
      </div>

      <div className={modalTrigger ? "modal-toggle active" : "modal-toggle"}>
        <div className={signStatus ? "modal-screen" : "modal-screen active"}>
          <div className="modal-container">
            <div className="container__bg">
              <div className="container__box leftBox">
                <div className="leftBox__content">
                  <div className="leftBox__title">
                    <h3>Title</h3>
                    <p className="leftBox__title__content">
                      <span>{title}</span>
                    </p>
                  </div>
                </div>
                <div className="leftBox__content">
                  <div className="leftBox__description">
                    <h3>Description</h3>
                    <p className="leftBox__description__content">
                      <span>{description}</span>
                    </p>
                  </div>
                </div>
                <div className="leftBox__content">
                  <div className="leftBox__name">
                    <h3>Name</h3>
                    <p className="leftBox__name__content">
                      <span>{name}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="container__box rightBox">
                <h2 className={isPassedValid ? "box__msg valid" : "box__msg"}>
                  {isPassedValid ? "Go Next Step!" : "Fill in the blanks!"}
                </h2>
                <button
                  className={isPassedValid ? "box__btn valid" : "box__btn"}
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
                  : "container__formBox leftForm active rightForm"
              }
            >
              <div className="leftForm__contents">
                <div className="leftForm__content leftForm__title">
                  <span>
                    Title
                    {validation[0] ? (
                      <AiOutlineCheckCircle className="validation-icon check" />
                    ) : (
                      <IoMdWarning className="validation-icon warning" />
                    )}
                  </span>
                  <input
                    className="leftForm__content__title"
                    type="text"
                    placeholder="Title.."
                    value={title}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                  />
                </div>
                <div className="leftForm__content leftForm__description">
                  <span>
                    Description
                    {validation[1] ? (
                      <AiOutlineCheckCircle className="validation-icon check" />
                    ) : (
                      <IoMdWarning className="validation-icon warning" />
                    )}
                  </span>
                  <textarea
                    className="leftForm__content__description"
                    type="text"
                    placeholder="Description.."
                    value={description}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                  />
                </div>
                <div className="leftForm__content leftForm__name">
                  <span>
                    Name
                    {validation[2] ? (
                      <AiOutlineCheckCircle className="validation-icon check" />
                    ) : (
                      <IoMdWarning className="validation-icon warning" />
                    )}
                  </span>
                  <input
                    className="leftForm__content__name"
                    type="text"
                    placeholder="Name.."
                    value={name}
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                  />
                </div>
              </div>
              <div className="rightForm__contents">
                <div className="rightForm__content rightForm__notice">
                  Notice!!
                </div>
                <p className="rightForm__content rightForm__info">
                  Your work will be uploaded on dashboard. Make sure it's okay
                  to be public.
                </p>

                <div className="rightForm__content rightForm__btns">
                  <button
                    className="rightForm__btn go-back-btn"
                    onClick={onClick}
                  >
                    Go back
                  </button>
                  <button
                    className="rightForm__btn submit-btn"
                    onClick={handleSubmit}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
