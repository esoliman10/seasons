import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'Tara na sa BEACH!!!',
    iconName: 'sun'
  },
  winter: {
    text: 'MALAMIG NA!!!',
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  console.log(props.lat)
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];
  /* DESTRUCTURE from seasonConfig
  const text = season === 'winter' ? 'MALAMIG NA!!!' : 'Tara na sa BEACH!!!'
  const icon = season === 'winter' ? 'snowflake' : 'sun';
  */
  console.log(season)
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconName} icon massive`} />
      <h1>{text}</h1>
      <i className={`icon-right ${iconName} icon massive`} />
    </div>
  )
}

export default SeasonDisplay;