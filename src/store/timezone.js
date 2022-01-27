import { makeAutoObservable, makeObservable } from 'mobx';
class Todo {
  time = new Date();
  realHour = `00`;
  realMinute = `00`;
  realSecond = `00`;
  hour = 0;
  minute = 0;
  second = 0;
  timezone = `${-this.time.getTimezoneOffset() / 60}`;
  default = `${-new Date().getTimezoneOffset() / 60}`;
  utc = [];
  constructor() {
    makeAutoObservable(this);
  }

  setTimeZone() {
    let b = new Date();
    let utc = b.getTime() + b.getTimezoneOffset() * 60000;
    this.time = new Date(utc + 3600000 * this.timezone);
    this.second = this.time.getSeconds() / 60;
    this.minute = (this.second + this.time.getMinutes()) / 60;
    this.hour = (this.minute + this.time.getHours()) / 12;
    /* real Hours */
    this.realHour = this.time.getHours();
    this.realMinute = this.time.getMinutes();
    this.realSecond = this.time.getSeconds();
  }

  fetchTodos() {
    fetch('http://localhost:9000/timezones')
      .then((response) => response.json())
      .then((json) => (this.utc = [...json]));
  }
}

export default new Todo();
