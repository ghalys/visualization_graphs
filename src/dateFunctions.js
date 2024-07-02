/**
 * Look for the 2 dates of the previous period
 * @param {string} startDate
 * @param {string} endDate
 * @returns 
 */
function getPreviousPeriod(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const periodLength = end - start;

  const newEndDate = new Date(start.getTime() - 1);  // One day before the start of the current period
  const newStartDate = new Date(newEndDate.getTime() - periodLength);

  return { newStartDate, newEndDate };
}

// Example : 
const startDate = "2024-06-27T15:23:53.122+00:00";
const endDate = "2024-07-27T15:23:53.122+00:00";
const previousPeriod = getPreviousPeriod(startDate, endDate);

console.log("Nouvelle période de début :", previousPeriod.newStartDate);
console.log("Nouvelle période de fin :", previousPeriod.newEndDate);

//------------------------------------
// Initialize a dictionary to hold dates for each day of the week
const weekdays = {
  'Sunday': [],
  'Monday': [],
  'Tuesday': [],
  'Wednesday': [],
  'Thursday': [],
  'Friday': [],
  'Saturday': []
};

/**
 * get the week day distribution of a period 
 * @param {string} date 
 * @returns {string} weekDay
 */
function getWeekDay(date){
  const day = new Date (date)
  const dayName = day.toLocaleString('en-US', { weekday: 'long' });
  return dayName
}
console.log(getWeekDay('2024-01-30'))

/**
 * get the week day distribution of a period 
 * @param {string} startDate 
 * @param {string} endDate
 * @returns {object}
 */
function getWeekDayPeriod(startDate,endDate){
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Iterate over each date in the range
  for (let current = new Date(start); current <= end; current.setDate(current.getDate() + 1)) {
    const dayName = current.toLocaleString('en-US', { weekday: 'long' });
    weekdays[dayName].push(new Date(current));
  }
  
  // Convert the dictionary to a list of lists
  const result = Object.entries(weekdays).map(([day, dates]) => [day, dates]);
  return result;
}

// // Example:
// const startDate_2 = '2024-01-01';
// const endDate_2 = '2024-01-31';
// const weekdaysWithDates = getWeekDayPeriod(startDate_2, endDate_2);
// console.log(weekdaysWithDates);