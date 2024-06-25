import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ datalist, onDelete }) => {
  return (
    <ul className={css.list}>
      {datalist.map((data) => (
        <Contact data={data} key={data.id} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
