import React from 'react';
import { observer } from 'mobx-react-lite';
import todo from '../store/timezone';
import { ClockClassic } from './ClockClassic';
import { DigitalClock } from './DigitalClock';
import { SelectTimezone } from './SelectTimezone';

const Clock = observer(() => {
  return (
    <div className="time">
      <div className="time-container">
        <div className="clock-main">
          <ClockClassic />
        </div>
        <div className="digit">
          <DigitalClock />
        </div>
        <div className="timezones">
          <SelectTimezone />
        </div>
      </div>
    </div>
  );
});

export { Clock };
