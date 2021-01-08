const talkingCalendar = function(date) {
  const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let splitDate = date.split('/');
  let year = splitDate[0];
  let monthNumber = Number(splitDate[1]);
  let day = Number(splitDate[2]);

  let month = monthArray[(monthNumber)-1];

  let dayEnding = 'th';

  if (day === 1 || day === 21) {
    dayEnding = 'st;'
  } else if (day === 2 || day === 22) {
    dayEnding = 'nd';
  } else if (day === 3 || day === 23) {
    dayEnding = 'rd';
  }
  
  return `${month} ${day}${dayEnding}, ${year}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


/* Output
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/