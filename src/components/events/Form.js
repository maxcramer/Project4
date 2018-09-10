import React from 'react';

function EventForm({ handleSubmit, handleChange, event }) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="eventName">Event Title</label>
        <input className="input" name="eventName"
          placeholder="e.g. Fast Laps around Hyde Park"
          value={event.eventName || ''}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="startTime">Start Time</label>
        <input className="input" name="startTime"
          value={event.startTime || ''}
          placeholder="e.g. 1700"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="endTime">End Time</label>
        <input className="input" name="endTime"
          value={event.endTime || ''}
          placeholder="e.g. 1700"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        {/* Add upload from device option */}
        <label className="label" htmlFor="eventImage">Event Image</label>
        <input className="input" name="eventImage"
          value={event.eventImage || ''}
          placeholder="e.g. http://....."
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="startLocation">Start Location</label>
        <input className="input" name="startLocation"
          value={event.startLocation || ''}
          placeholder="e.g. Aldgate Station"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="endLocation">End Location</label>
        <input className="input" name="endLocation"
          value={event.endLocation || ''}
          placeholder="e.g. Paddington Station"
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label className="label" htmlFor="organiser">Organiser</label>
        <input className="input" name="organiser"
          value={event.organiser || ''}
          placeholder="e.g. Pete12232"
          onChange={handleChange}
        />
      </div>
      <button className="button is-info is-rounded is-outlined">Submit</button>
    </form>

  );
}

export default EventForm;
