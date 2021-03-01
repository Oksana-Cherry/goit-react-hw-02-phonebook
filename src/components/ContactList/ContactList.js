import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <li key={id}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

const ContactList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) return null;
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} onDelete={onDelete} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
};
export default ContactList;
