import React from 'react';
import styles from './ContactsListElement.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import PropTypes from 'prop-types';

const ContactsListElement = ({ contact }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.contactLi}>
      <span className={styles.contact}>{contact.name}:</span>
      <span className={styles.contact}>{contact.phone}</span>
      <button type="button" className={styles.btnDelete} onClick={handleClick}>
        Delete
      </button>
    </div>
  );
};

ContactsListElement.propTypes = {
  contact: PropTypes.object,
};

export default ContactsListElement;
