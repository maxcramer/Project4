import React from 'react';

function JourneyForm({ handleSubmit, handleChange, journey }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="journeyName">Journey Title</label>
        <input className="input" name="journeyName"
          placeholder="e.g. Quick lap round the block!"
          value={journey.journeyName || ''}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="city">Location (City)</label>
        <input className="input" name="city"
          value={journey.city || ''}
          placeholder="e.g. London"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        {/* Add upload from device option */}
        <label className="label" htmlFor="journeyImage">Journey Image</label>
        <input className="input" name="journeyImage"
          value={journey.journeyImage || ''}
          placeholder="e.g. http://....."
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="description">Journey Description</label>
        <input className="input" name="description"
          value={journey.description || ''}
          placeholder="e.g. Amazing jumps a mile in!"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="distance">Journey Distance</label>
        <input className="input" name="distance"
          value={journey.distance || ''}
          placeholder="e.g. 4KM/6Miles"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="boardRode">Board Rode on Journey</label>
        <input className="input" name="boardRode"
          value={journey.boardRode || ''}
          placeholder="e.g. OneWheel Plus"
          onChange={handleChange}
        />
      </div>
      <button className="button is-info is-rounded is-outlined">Submit</button>
    </form>

  );
}

export default JourneyForm;
