import React from 'react';
import { Link } from 'react-router-dom';

const FilterSelect = ({ journeys }) => {
  const parentStyle = ({
    position: 'absolute',
    width: '100%',
    height: 'auto',
    maxHeight: 500, overflow: 'scroll',
    backgroundColor: 'white',
    zIndex: 2
  });



  return(
    <div style={{ position: 'relative' }}>
      <div style={parentStyle}>
        {journeys.map(journey =>
          <Link key={journey._id} className="media" to={`/journeys/${journey._id}`}>
            <div className="media-left">
              <img style={{ height: 60 }} src={journey.journeyImage}/>
              <div className="media-content">
                <p>{journey.title}</p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default FilterSelect;
