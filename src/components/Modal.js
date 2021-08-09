import { useEffect, useState } from "react";

const Modal = () => {
  const [signStatus, setSignStatus] = useState(true); // true: left
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [validation, setValidation] = useState([false, false, false]);
  const [isPassedValid, setIsPassedValid] = useState(false);

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

  useEffect(() => {
    let tmp = [...validation];

    tmp[0] = title.length >= 5 ? true : false;
    tmp[1] = description.length >= 10 ? true : false;
    tmp[2] = name.length >= 2 ? true : false;

    setValidation(tmp);
    tmp.includes(false) ? setIsPassedValid(false) : setIsPassedValid(true);
  }, [title, description, name]);

  const onClick = () => {
    setSignStatus(!signStatus);
  };

  const onKeyPress = (event) => {
    const { code } = event;
    if (code === "Enter") event.preventDefault();
  };

  const handleSubmit = () => {
    console.log("Completed!!!!");
  };

  return (
    <div className={signStatus ? "modal-screen" : "modal-screen active"}>
      {console.log(validation)}
      <div className="modal-container">
        <div className="container__blueBg">
          <div className="container__blueBg__box leftBox">
            <div className="leftBox__content">
              <div className="leftBox__title">
                <h3>Title</h3>
                <div className="leftBox__title__content">
                  <span>{title}</span>
                </div>
              </div>
            </div>
            <div className="leftBox__content">
              <div className="leftBox__description">
                <h3>Description</h3>
                <div className="leftBox__description__content">
                  <span>{description}</span>
                </div>
              </div>
            </div>
            <div className="leftBox__content">
              <div className="leftBox__name">
                <h3>Name</h3>
                <div className="leftBox__name__content">
                  <span>{name}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="container__blueBg__box rightBox">
            <h2 className="box__msg">
              {isPassedValid ? "Go Next Step!" : "Fill in the blank!"}
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
              : "container__formBox leftForm active rightForm"
          }
        >
          <div className="leftForm__contents">
            <div className="leftForm__content leftForm__title">
              <span>Title</span>
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
              <span>Description</span>
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
              <span>Name</span>
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
            <div className="rightForm__content rightForm__notice">Notice!!</div>
            <div className="rightForm__content rightForm__info">
              Your work will be uploaded on dashboard. Make sure it's okay to be
              public.
            </div>
            <div className="rightForm__content rightForm__btns">
              <button className="rightForm__btn go-back-btn" onClick={onClick}>
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
  );
};

export default Modal;
