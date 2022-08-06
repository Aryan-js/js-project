class Calendar {
  date;
  constructor() {
    return new Date().getDate();
  }
  now() {
    return new Date().getDate();
  }
  setDate(date) {
    this.date = new date;
    return new Date().getUTCDate() - 25;
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
}

export default Calendar;
