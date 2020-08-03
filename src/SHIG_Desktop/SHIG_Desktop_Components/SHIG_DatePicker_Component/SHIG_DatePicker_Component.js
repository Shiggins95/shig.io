import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../../SHIG_Styles/SHIG_Date_Component/SHIG_DatePicker_Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import Days from './SHIG_Days_View';
import Months from './SHIG_Months_View';
import { useDispatch, useSelector } from 'react-redux';
import {
  _setDatePickerMonth,
  _setDatePickerMultiple,
  _setDatePickerView,
  _toggleDatePicker
} from '../../../SHIG_Redux/actions/datePickerActions';

const DatePicker = ({ customId }) => {
  const dispatch = useDispatch();
  const datePickerState = useSelector((state) => state.datePickerReducer);
  const { currentDate, monthDate, open, currentView } = datePickerState;
  const [x, setX] = useState(50);
  const [y, setY] = useState(50);

  const navigate = (event) => {
    const directionFromButton = event.target.getAttribute('data-nav-direction');
    let newDate = moment(monthDate.format());
    if (!directionFromButton || directionFromButton === 'today') {
      newDate = moment();
    } else {
      const direction = parseInt(directionFromButton, 10);
      newDate.set('month', newDate.get('month') + direction);
    }
    dispatch(_setDatePickerMultiple({ monthDate: newDate }));
  };

  const changeMonth = (newMonth) => {
    const newDate = moment(currentDate.format());
    newDate.set('month', newMonth).startOf('month');
    dispatch(_setDatePickerMonth(newDate));
    updateView('days');
  };

  const mapping = {
    days: <Days customId={customId} />,
    months: <Months currentMonth={monthDate.format('MMMM')} handleClick={changeMonth} />
  };

  const updateView = (view) => {
    dispatch(_setDatePickerView(view));
  };

  const openDatePicker = (e) => {
    const clientY = e.clientY;
    const clientX = e.clientX;
    let actualX = clientX;
    let actualY = clientY;
    if (clientY >= 500) {
      actualY -= 250;
      setY(actualY);
    }
    if (clientX <= 300) {
      actualX += 300;
      setX(actualX);
    }
    dispatch(_toggleDatePicker());
  };

  const style = x || y ? { top: `${y * -1}px`, right: `${x}px` } : {};

  return (
    <div id="date_picker">
      {/* onchange is redundant here as it is handled by reducer*/}
      <input type="text" value={currentDate.format('DD/MM/YYYY')} onChange={() => {}} />
      <FontAwesomeIcon icon={faCalendar} id="fa_date_picker_icon" onClick={openDatePicker} />
      {open ? (
        <div id="date_picker_container" style={x || y ? style : {}}>
          <div id="date_picker_calendar_container">
            <div className="header">
              <button data-nav-direction="-1" onClick={navigate} id="prev_month">
                -
              </button>
              <FontAwesomeIcon
                data-nav-direction="today"
                onClick={navigate}
                id="today_button"
                icon={faCalendarDay}
              />
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
