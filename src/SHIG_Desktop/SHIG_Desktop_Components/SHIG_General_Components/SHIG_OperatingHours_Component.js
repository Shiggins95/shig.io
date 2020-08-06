import React from 'react';
import PropTypes from 'prop-types';
import '../../../SHIG_Styles/SHIG_OperatingHours_Style.css';

const OperatingHours = (props) => {
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  const weekendDays = ['Saturday', 'Sunday'];
  const scrollRef = React.createRef();
  const handleClick = (event) => {
    debugger;
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div id="operating_hours_container" ref={scrollRef}>
      <div className="reminder_tab" onClick={handleClick}>
        Operating Hours
      </div>
      <div className="header">
        <h2>Operating Hours</h2>
        <p>
          I will always try to get back as soon as I can, these are only a guideline of when to expect a reply
        </p>
      </div>
      <div className="week_container">
        <div className="weekday">
          {weekdays.map((day) => {
            return (
              <div className="day_container week_day" key={day}>
                <p className="day">{day}</p>
                <p>17:00 - Midnight</p>
              </div>
            );
          })}
        </div>
        <div className="weekend">
          {weekendDays.map((day) => {
            return (
              <div className="day_container weekend_day" key={day}>
                <p className="day">{day}</p>
                <p>12:00 - Midnight</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

OperatingHours.propTypes = {};

export default OperatingHours;
