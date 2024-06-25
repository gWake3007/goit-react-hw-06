import css from "./Contact.module.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Contact = ({ onDelete, data: { id, name, number } }) => {
  return (
    <li className={css.item}>
      <div className={css.container}>
        <div className={css.stroke}>
          <FaUser />
          <h4 className={css.title}>{name}</h4>
        </div>
        <div className={css.stroke}>
          <BsFillTelephoneFill />
          <p className={css.text}>{number}</p>
        </div>
      </div>
      <div className={css.containerBtn}>
        <button className={css.btn} type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
