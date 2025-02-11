import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";

import s from "./ContactList.module.css";

import { selectContacts } from "../../redux/contactsSlice";
import { filterSelector } from "../../redux/filterSlice";

const ContactList = () => {
  const filter = useSelector(filterSelector);
  const contacts = useSelector(selectContacts);

  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <ul className={s.list}>
        {filteredData.map(({ id, name, number }) => (
          <Contact key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
