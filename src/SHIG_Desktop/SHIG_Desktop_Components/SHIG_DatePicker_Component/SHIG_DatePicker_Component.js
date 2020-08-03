import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../SHIG_Styles/SHIG_Date_Component/SHIG_DatePicker_Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import Days from './SHIG_Days_View';
import Months from './SHIG_Months_View';

const DatePicker = (props) => {
  const [open, set] = useState(true);
  const [startingDate, setStartingDate] = useState(moment(new Date()));
  const [monthDate, setMonthDate] = useState(moment(new Date()));
  const [mounts, setMounts] = useState(0);
  const [data, setData] = useState({ divs: [] });
  const [currentView, setCurrentView] = useState('days');

  const navigate = (event) => {
    const directionFromButton = event.target.getAttribute('data-nav-direction');
    const direction = parseInt(directionFromButton, 10);
    monthDate.set('month', monthDate.get('month') + direction);
    setMonthDate(monthDate);
    setMounts(0);
  };

  const padDivs = (divs, start, end, key) => {
    for (let i = start; i < end; i++) {
      divs.push(<div className="blank" key={`blank_${key}_${i}`} />);
    }
  };

  //TODO - sort out highlighed date so that it will only highlight if on correct date

  useEffect(() => {
    const dayClick = (event) => {
      debugger;
      const date = moment(event.target.getAttribute('data-date'));
      console.log('NEW DATE: ', date.format('DD-MM-YYYY'));
      setStartingDate(date);
      setMonthDate(date);
      set(false);
    };
    if (mounts === 0) {
      const divs = [];
      // check if month date exists else use todays date
      const _startingDate = monthDate ? moment(monthDate).startOf('month') : moment().startOf('month');
      // initialise as check for how many days into the week the first of the month is
      let startingDay = _startingDate.day();
      // loop through until we reach sunday and add in some divs to pad out the space
      if (startingDay !== 0) {
        padDivs(divs, 0, startingDay, 'start');
      }
      // loop through the days in month and push in a div for each day
      for (let day = 1; day <= _startingDate.daysInMonth(); day++) {
        _startingDate.set('date', day);
        divs.push(
          <div
            className="day_container"
            key={day}
            data-date={_startingDate.format('MM-DD-YYYY')}
            onClick={dayClick}
            data-selected={
              startingDate.get('date') === day && startingDate.get('month') === monthDate.get('month')
            }
          >
            {day}
          </div>
        );
      }

      // same as the start of month for padding
      const endingDate = monthDate ? moment(monthDate).startOf('month') : moment().startOf('month');
      // add one month, get start of month and subtract 1 day to get the end of current month
      endingDate
        .set('months', endingDate.get('months') + 1)
        .startOf('month')
        .set('days', endingDate.get('days') - 1);
      const endingDay = endingDate.days();
      console.log('ED', endingDay);
      // loop through and push in divs for padding at end of month
      if (endingDay !== 6) {
        padDivs(divs, endingDay, 6, 'end');
      }

      // update data
      setData({ divs });
      setMounts(1);
    }
  }, [monthDate, startingDate, data, mounts]);

  const changeMonth = (newMonth) => {
    const newDate = startingDate;
    newDate.set('month', newMonth).startOf('month');
    setMonthDate(newDate);
    setMounts(0);
    updateView('days');
  };

  const mapping = {
    days: <Days divs={data.divs} startDate={monthDate} />,
    months: <Months currentMonth={monthDate.format('MMMM')} handleClick={changeMonth} />
  };

  const updateView = (view) => {
    setCurrentView(view);
  };

  return (
    <div id="date_picker">
      <input type="text" value={startingDate.format('DD/MM/YYYY')} onChange={() => {}} />
      <FontAwesomeIcon icon={faCalendar} id="fa_date_picker_icon" onClick={() => set(!open)} />
      {open ? (
        <div id="date_picker_container">
          <div id="date_picker_calendar_container">
            <div className="header">
              <button data-nav-direction="-1" onClick={navigate} id="prev_month">
                -
              </button>
              <h3 onClick={() => updateView('months')}>
                {monthDate.format('MMMM')} - {monthDate.format('yyyy')}
              </h3>
              <button data-nav-direction="1" onClick={navigate} id="next_month">
                +
              </button>
            </div>
            {mapping[currentView]}
          </div>
        </div>
      ) : null}
    </div>
  );
};

DatePicker.propTypes = {};

export default DatePicker;
