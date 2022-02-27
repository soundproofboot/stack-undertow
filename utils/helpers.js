module.exports = {
  
  dateTime: date => {
    date = new Date(date);
    let month = date.getMonth() +1;
    let day = date.getDate();
    let year = date.getFullYear();

    return `${month}/${day}/${year}`;
  },


};