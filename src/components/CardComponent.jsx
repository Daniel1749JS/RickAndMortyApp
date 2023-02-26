import cardCharacter from "../styles/cardCharacter.css";
import { FaHeart, FaSkull, FaQuestionCircle } from "react-icons/fa";
import { TbGenderFemale, TbGenderMale } from "react-icons/tb";
import { ButtonComponent } from "./ButtonComponent";

export const CardComponent = ({
  characterName,
  characterPhoto,
  status,
  gender,
  keyy,
}) => {
  return (
    <div className="cardCharacter" key={keyy}>
      <div className="containerName">
        <span>{characterName}</span>
      </div>
      <div className="containerPhoto">
        <img className="photo" src={characterPhoto} alt="" />
      </div>
      <div className="containerResume">
        <div className="containerItems">
          <div className={`containerStatus ${status}`}>
            {(() => {
              switch (status) {
                case "Alive":
                  return <FaHeart />;
                case "Dead":
                  return <FaSkull />;
                case "unknown":
                  return <FaQuestionCircle />;
              }
            })()}
            <span>{status}</span>
          </div>
          <div className={`containerGener ${gender}`}>
            {(() => {
              switch (gender) {
                case "Male":
                  return <TbGenderMale size={18} />;
                case "Female":
                  return <TbGenderFemale size={18} />;
                default:
                  return <FaQuestionCircle size={18} />;
              }
            })()}
            <span>{gender}</span>
          </div>
        </div>
      </div>
      <div className="containerMoreInfo">
        <ButtonComponent />
      </div>
    </div>
  );
};
