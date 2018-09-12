import React from 'react';

function JourneyForm({ handleSubmit, handleChange, journey }) {
  return (
    <form className="pad" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="journeyName">Journey Title</label>
        <input className="input form" name="journeyName"
          placeholder="e.g. Quick lap round the block!"
          value={journey.journeyName || ''}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="city">Location (City)</label>
        <input className="input form" name="city"
          value={journey.city || ''}
          placeholder="e.g. London"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        {/* Add upload from device option */}
        <label className="label" htmlFor="journeyImage">Journey Image</label>
        <input className="input form" name="journeyImage"
          value={journey.journeyImage || ''}
          placeholder="e.g. http://....."
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="description">Journey Description</label>
        <input className="input form" name="description"
          value={journey.description || ''}
          placeholder="e.g. Amazing jumps a mile in!"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="distance">Journey Distance</label>
        <input className="input form" name="distance"
          value={journey.distance || ''}
          placeholder="e.g. 4KM/6Miles"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="boardRode">Board Rode on Journey</label>
        <select className="input form" name="boardRode"
          value={journey.boardRode || ''}
          placeholder="e.g. OneWheel Plus"
          onChange={handleChange}
        >
          <option value="">Please Select an option from bellow 🔽</option>
          <option value="OneWheel Original">OneWheel Original</option>
          <option value="OneWheel Plus">OneWheel Plus</option>
          <option value="OneWheel XR">OneWheel XR</option>
        </select>
      </div>
      <div className="submitButton">
        <button className="button is-info is-rounded is-outlined">Submit</button>
      </div>
    </form>

  );
}

export default JourneyForm;
