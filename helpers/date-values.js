// converts month from number string to short format Example: 02 -> Feb
const getMonth = dob => {
    const parts = dob.split('.'); // Split the date string into day, month, and year parts
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    const date = new Date(`${month}.${day}.${year}`); // Reformat the date string to a format recognized by the Date constructor
    console.log('date: ' + date);
    const month2 = date.toLocaleString('en-US', { month: 'short' }); // Convert the month number to a short month name 
    console.log(month2);
    return month2;
}

const getDay = dob => {
    const parts = dob.split('.'); // Split the date string into day, month, and year parts
    const day = parts[0];
    return day;
}

const getYear = dob => {
    const parts = dob.split('.'); // Split the date string into day, month, and year parts
    const year = parts[2];
    return year;
}



module.exports = {
    getMonth,
    getDay,
    getYear
}