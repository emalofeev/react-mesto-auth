import success from "../images/success.svg";
import fail from "../images/fail.svg";

function InfoTooltip({ isOpen, onClose, message, authRes }) {
  const authResImg = `${authRes ? success : fail}`;

  return (
    <div
      className={`popup popup_type_infotooltip ${isOpen ? "popup_opened" : ""}`}
    >
      <div className={`popup__container popup__container-infotooltip`}>
        <img src={authResImg} alt="Результат" className="popup__result" />
        <h2 className="popup__result-title">{message}</h2>
        <button
          className="popup__close"
          type="button"
          onClick={onClose}
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
