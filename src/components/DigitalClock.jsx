import React from 'react';
import todo from '../store/timezone';
import { observer } from 'mobx-react-lite';

const DigitalClock = observer(() => {
  return (
    <div className="digit__item">
      {todo.realHour}:{todo.realMinute}:{todo.realSecond}
    </div>
  );
});

export { DigitalClock };
