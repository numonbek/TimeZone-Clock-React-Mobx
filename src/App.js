import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import './App.css';
import { Clock } from './components/Clock';
import todo from './store/timezone';

window.addEventListener('DOMContentLoaded', todo.fetchTodos());

const App = observer(() => {
  setInterval(() => {
    todo.setTimeZone();
  }, 1000);

  return (
    <div className="container">
      <Clock />
    </div>
  );
});

export default App;
