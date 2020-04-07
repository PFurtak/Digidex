import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Patrick Furtak',
        email: 'pfurtak@gmail.com',
        phone: '444-444-4444',
        type: 'professional',
      },
      {
        id: 2,
        name: 'Bill Burr',
        email: 'bburr@gmail.com',
        phone: '555-555-5555',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Tom Segura',
        email: 'tommybunz@gmail.com',
        phone: '666-666-6666',
        type: 'personal',
      },
    ],
  };
  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
