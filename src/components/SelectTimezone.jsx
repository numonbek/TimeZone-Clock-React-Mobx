import React from 'react';
import { observer } from 'mobx-react-lite';
import todo from '../store/timezone';

const SelectTimezone = observer(() => {
  return (
    <div>
      <select onChange={(e) => (todo.timezone = e.target.value)}>
        <option value={todo.default}>Ваш город</option>
        {todo.utc.map((item, index) => {
          return (
            <option key={index} value={item.timezone}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
});

export { SelectTimezone };
