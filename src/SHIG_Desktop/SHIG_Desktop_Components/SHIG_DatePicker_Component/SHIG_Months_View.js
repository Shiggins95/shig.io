import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../SHIG_Styles/SHIG_Date_Component/SHIG_Months_Style.css';

const Months = (props) => {
  const { currentMonth, handleClick } = props;
  const [month, set] = useState(currentMonth);
  const months = [
    { text: 'January', id: 0 },
    { text: 'February', id: 1 },
    { text: 'March', id: 2 },
    { text: 'April', id: 3 },
    { text: 'May', id: 4 },
    { text: 'June', id: 5 },
    { text: 'July', id: 6 },
    { text: 'August', id: 7 },
    { text: 'September', id: 8 },
    { text: 'October', id: 9 },
    { text: 'November', id: 10 },
    { text: 'December', id: 11 }
  ];
  console.log('CURRENT MONTH: ', currentMonth);
  return (
    <div className="months_container">
      <div className="months">
        {months.map(({ text, id }) => {
          return (
            <div
              className="month"
              data-month={id}
              key={text + id}
              data-selected={text === month}
              onMouseOver={() => set(text)}
              onClick={() => handleClick(id)}
            >
              {text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Months.propTypes = {
  currentMonth: PropTypes.string
};

export default Months;
