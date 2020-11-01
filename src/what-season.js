module.exports = function getSeason(date) {
  if(!date instanceof Date) throw Error();
  if(date == undefined || (date - new Date()) == 0) return 'Unable to determine the time of year!';
  if(10 < date.getMonth() || date.getMonth() < 2) return 'winter';
  if(3 > date.getMonth() || date.getMonth() < 5) return 'spring';
  if(6 > date.getMonth() || date.getMonth() < 8) return 'summer';
  if(9 > date.getMonth() || date.getMonth() < 11) return 'autumn'; 
};
