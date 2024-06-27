import moment from 'moment';
export const DateDifference = (date) => {
    const formattedDate = moment(date);
    const currentDate = moment();
    const differenceInMilliseconds = formattedDate.diff(currentDate);
    const daysDifference = Math.abs(Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)));
    const weeksDifference = Math.floor(daysDifference / 7);
    const monthsDifference = Math.floor(weeksDifference / 4.34524); 
    let remainingTime;
    if (daysDifference >= 7) {
      if (monthsDifference >= 12) {
        const years = Math.floor(monthsDifference / 12);
        const remainingMonths = monthsDifference % 12;
        remainingTime = `${years} years and ${remainingMonths} months`;
      } else if (monthsDifference >= 1) {
        remainingTime = `${monthsDifference} months`;
      } else {
        remainingTime = `${weeksDifference} weeks`;
      }
    } else {
      remainingTime = `${daysDifference} days`;
    }
    
    return remainingTime;
    
  };

  export function convertDateToDay(data) {
    const date = new Date(data.date);
    const dayNumber = date.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = daysOfWeek[dayNumber];
    data.day = dayName;
  }
  export const uri = process.env.NEO4J_URI;
  export const user = process.env.NEO4J_USERNAME;
  export const password = process.env.NEO4J_PASSWORD;