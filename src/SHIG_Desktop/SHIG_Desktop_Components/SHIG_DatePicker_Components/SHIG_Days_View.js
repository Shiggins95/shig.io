import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import '../../../SHIG_Styles/SHIG_Date_Component/SHIG_Days_Style.css';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { _setDatePickerDays, _setDatePickerMultiple } from '../../../SHIG_Redux/actions/datePickerActions';
import { _setWizardField } from '../../../SHIG_Redux/actions/quoteWizardActions';

const Days = ({ customId }) => {
  const dispatch = useDispatch();
  const datePickerState = useSelector((state) => state.datePickerReducer);
  const wizardState = useSelector((state) => state.wizardReducer);
  const { currentStep } = wizardState;

  const { monthDate, currentDate } = datePickerState;

  const dayLabels = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const padDivsStart = (startingDate, startingDay, divs) => {
    // initialise new date to work with
    let newDate = moment(startingDate);
    // 0 - startingDay will give you how many days back you need to set the date in order to reverse populate
    // e.g. for august 2020, the first of the month is a saturday which has an index of 6. 0 - 6 will give -6
    // meaning that we should start from 6 days before the end of july
    // another example: for december 2020, the 1st of the month is a tuesday which has an index of 2. 0 -2 will give -2
    /// meaning we should start from 2 days before the end of november.
    newDate.set('date', newDate.get('date') + (0 - startingDay));
    for (let i = 0; i < startingDay; i++) {
      const formattedNewDate = newDate.format('MM-DD-YYYY');
      const formattedCurrentDate = currentDate.format('MM-DD-YYYY');
      const day = newDate.get('date');
      // loop through dates until we have reached the starting date and push in a div to render previous month days
      divs.push(
        <div
          className="day_container day_container_prev_month"
          key={newDate.get('date') + '_padded'}
          data-date={newDate.format()}
          onClick={dayClick}
          data-selected={formattedNewDate === formattedCurrentDate}
        >
          {day}
        </div>
      );
      // increment the date by 1 each time to move through the dates
      newDate.set('date', newDate.get('date') + 1);
    }
  };

  const padDivsEnd = (endingDate, endingDay, divs) => {
    const newDate = moment(endingDate);
    const start = divs.length;
    // we always want there to be 6 rows of 7. therefore the ending day will always be 42.
    // we will start at the current divs length and loop through until we get to the 42. meaning we will pad
    // the end of the divs array with the following months days until we get 42 divs in total
    for (let i = start; i < endingDay; i++) {
      // set date to starting date + 1 and format dates
      newDate.set('date', newDate.get('date') + 1);
      const formattedNewDate = newDate.format('MM-DD-YYYY');
      const formattedCurrentDate = currentDate.format('MM-DD-YYYY');
      // push in a new div to render next months days
      divs.push(
        <div
          className="day_container day_container_next_month"
          key={newDate.get('date') + '_padded'}
          data-date={newDate.format()}
          onClick={dayClick}
          data-selected={formattedCurrentDate === formattedNewDate}
        >
          {newDate.get('date')}
        </div>
      );
    }
  };

  const dayClick = (event) => {
    const date = moment(event.target.getAttribute('data-date'));
    dispatch(_setDatePickerMultiple({ currentDate: date, monthDate: date, open: false }));
    dispatch(_setWizardField(currentStep, customId, date.format('YYYY-MM-DD')));
  };

  debugger;

  const divs = [];
  // check if month date exists else use todays date
  const _startingDate = moment(monthDate).startOf('month');
  // initialise as check for how many days into the week the first of the month is
  let startingDay = _startingDate.day();
  // loop through until we reach sunday and add in some divs to pad out the space
  if (startingDay !== 0) {
    padDivsStart(_startingDate, startingDay, divs);
  }
  // loop through the days in month and push in a div for each day
  for (let day = 1; day <= _startingDate.daysInMonth(); day++) {
    _startingDate.set('date', day);
    divs.push(
      <div
        className="day_container"
        key={day}
        data-date={_startingDate.format()}
        onClick={dayClick}
        data-selected={currentDate.get('date') === day && currentDate.get('month') === monthDate.get('month')}
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
  // loop through and push in divs for padding at end of month

  if (divs.length < 42) {
    // padDivs(divs, 0, 42 - divs.length, 'extra_padding');
    padDivsEnd(endingDate, 42, divs, endingDay);
  }

  const dayLabelsToRender = dayLabels.map((label) => {
    return (
      <div className="day_label" key={label}>
        {label.toUpperCase()}
      </div>
    );
  });

  return (
    <div className="days">
      <div className="day_labels">{dayLabelsToRender}</div>
      <div className="_days">{divs}</div>
    </div>
  );
};

Days.propTypes = {};

export default Days;
