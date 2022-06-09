export default {
  monthNames: new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"),
  dayOfWeekNames:new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"),
  formatDate(date, patternStr){
      if (!patternStr) {
          patternStr = 'M/d/yyyy';
      }
      var day = date.getDate(),
          month = date.getMonth(),
          year = date.getFullYear(),
          hour = date.getHours(),
          minute = date.getMinutes(),
          second = date.getSeconds(),
          miliseconds = date.getMilliseconds(),
          h = hour % 12,
          hh = this.twoDigitPad(h),
          HH = this.twoDigitPad(hour),
          mm = this.twoDigitPad(minute),
          ss = this.twoDigitPad(second),
          aaa = hour < 12 ? 'AM' : 'PM',
          EEEE = this.dayOfWeekNames[date.getDay()],
          EEE = EEEE.substr(0, 3),
          dd = this.twoDigitPad(day),
          M = month + 1,
          MM = this.twoDigitPad(M),
          MMMM = this.monthNames[month],
          MMM = MMMM.substr(0, 3),
          yyyy = year + "",
          yy = yyyy.substr(2, 2)
      ;
      // checks to see if month name will be used
      patternStr = patternStr
        .replace('hh', hh).replace('h', h)
        .replace('HH', HH).replace('H', hour)
        .replace('mm', mm).replace('m', minute)
        .replace('ss', ss).replace('s', second)
        .replace('S', miliseconds)
        .replace('dd', dd).replace('d', day)

        .replace('EEEE', EEEE).replace('EEE', EEE)
        .replace('yyyy', yyyy)
        .replace('yy', yy)
        .replace('aaa', aaa);
      if (patternStr.indexOf('MMM') > -1) {
          patternStr = patternStr
            .replace('MMMM', MMMM)
            .replace('MMM', MMM);
      }
      else {
          patternStr = patternStr
            .replace('MM', MM)
            .replace('M', M);
      }
      return patternStr;
  },

  twoDigitPad(num) {
      return num < 10 ? "0" + num : num;
  },

  getUSDateString(dateString){
    return this.formatDate(new Date(dateString), 'MMMM d, yyyy<TZ>HH:mm:ss aaa');
  }

}
