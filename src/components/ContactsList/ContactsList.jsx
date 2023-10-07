import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import {
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/selectors.js';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

const ContactsList = () => {
  const items = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.list}>
      <h4>
        You have {items.length} contact{items.length === 1 ? null : 's'}
      </h4>
      <ul className={styles.item}>
        {!!isLoading && <b>Loading contacts...</b>}
        {!!items &&
          items.map(contact => (
            <li key={contact.id}>
              <div className={styles.contactLi}>
                <span className={styles.contact}>{contact.name}:</span>
                <span className={styles.contact}>{contact.phone}</span>
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contact: PropTypes.object,
};

export default ContactsList;
