import React from 'react';
import { Input, Button } from './';

const Modal = ({
  display,
  firstName,
  lastName,
  image,
  email,
  username,
  bio,
  showWidget,
  onSave,
  setModal,
  changeInput
}) => {
  const modalStyle = {
    display
  };
  return (
    <div className='wrap-modal' style={modalStyle}>
      <div className='modal'>
        <h1>Edit Profile</h1>
        <div className='profile-pic'>
          <h3>Profile Picture</h3>
          <img src={image} onClick={showWidget} />
        </div>
        <div className='profile-info'>
          <Input
            name='firstName'
            type='text'
            placeholder='First name'
            className='input-form'
            value={firstName}
            onChange={changeInput}
          />
          <Input
            name='lastName'
            type='text'
            placeholder='Last name'
            className='input-form'
            value={lastName}
            onChange={changeInput}
          />
          <textarea
            name='bio'
            type='text'
            placeholder='Short Bio'
            className='input-form'
            value={bio}
            onChange={changeInput}
          />
          <div className='clear' />
          <Button
            name='save'
            value='Save'
            id='save'
            className='button-profile button-edit'
            onClick={onSave}
          />
          <button className='button-profile button-cancel' onClick={setModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
