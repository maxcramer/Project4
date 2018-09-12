import React from 'react';

function UserForm({ handleSubmit, handleChange, user }) {
  return (
    <form className="pad" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="username">Username</label>
        <input className="input form" name="username"
          placeholder="e.g. Pete232332"
          value={user.username || ''}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="email">Email</label>
        <input className="input form" name="email"
          value={user.email || ''}
          placeholder="e.g. pete@aol.com"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        {/* Add upload from device option */}
        <label className="label" htmlFor="boardType">Board Type</label>
        <select className="input form" name="boardType"
          value={user.boardType || ''}
          placeholder="e.g. OneWheel Plus"
          onChange={handleChange}
        >
          <option value="">Please Select an option from bellow 🔽</option>
          <option value="OneWheel Original">OneWheel Original</option>
          <option value="OneWheel Plus">OneWheel Plus</option>
          <option value="OneWheel XR">OneWheel XR</option>
        </select>
      </div>

      <div className="field">
        <label className="label" htmlFor="ridingStyle">Riding Style</label>
        <select className="input form" name="ridingStyle"
          value={user.ridingStyle || ''}
          placeholder="e.g. Offroad"
          onChange={handleChange}
        >
          <option value="">Please select an option from bellow 🔽</option>
          <option value="Street">Street</option>
          <option value="Off-Road">Off-Road</option>
          <option value="Freestyle / Tricks">Freestyle / Trick</option>
        </select>
      </div>

      <div className="field">
        <label className="label" htmlFor="profileImg">Profile Image</label>
        <input className="input form" name="profileImg"
          value={user.profileImg || ''}
          placeholder="e.g. http//...."
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="boardImg">Board Image</label>
        <input className="input form" name="boardImg"
          value={user.boardImg || ''}
          placeholder="e.g. http//...."
          onChange={handleChange}
        />
      </div>
      <div className="submitButton">
        <button className="button is-info is-rounded is-outlined">Submit</button>
      </div>
    </form>

  );
}

export default UserForm;
