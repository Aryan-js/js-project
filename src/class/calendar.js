class Calendar {
  date;
  constructor() {
    return new Date();
  }
  now() {
    return new Date();
  }
  setDate(date) {
    this.date = new Date(date);
  }
  year() {
    return new Date().getFullYear();
  }
  month() {
    return new Date().getMonth();
  }
  day() {
    return new Date().getDay();
  }
  time() {
    return new Date().getHours();
  }
  daysGone(day) {
    let miliSecond = day * 24 * 60 * 60 * 1000;
    let today = new Date().getTime();
    return new Date(today - miliSecond);
  }
}

export default Calendar;
