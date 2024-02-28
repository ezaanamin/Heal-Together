import moment from 'moment';
export const DateDifference = (date) => {
    const formattedDate = moment(date);
    const currentDate = moment();
    const differenceInMilliseconds = formattedDate.diff(currentDate);
    const daysDifference = Math.abs(Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24)));
    const weeksDifference = Math.floor(daysDifference / 7);
    const monthsDifference = Math.floor(weeksDifference / 4.34524); // average days in a month
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