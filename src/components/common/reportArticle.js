import React from 'react';
import { Button } from './';

const ReportArticle = ({
  display,
  type,
  types,
  title,
  reason,
  onSave,
  setModal,
  changeInput
}) => {
  const modalStyle = {
    display
  };
  return (
    <div className='wrap-modal modal-backgound' style={modalStyle}>
      <div className='modal'>
        <h3>
          Report the story: <b>{title}</b>
        </h3>
        <div className='profile-info'>
          <select
            className='input-form'
            name='type'
            onChange={changeInput}
            value={type}
          >
            <option value=''>Select type</option>
            {types.map(currentType => (
              <option key={currentType} value={currentType}>
                {currentType.toUpperCase()}
              </option>
            ))}
          </select>
          <textarea
            name='reason'
            type='text'
            placeholder='Description'
            className='input-form'
            value={reason}
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

export default ReportArticle;
