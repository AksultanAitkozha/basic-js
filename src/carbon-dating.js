const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let k=0.693/HALF_LIFE_PERIOD;
  if(sampleActivity == undefined ||
    typeof(sampleActivity) != 'string' ||
    /[a-z]/i.test(sampleActivity) ||
    (Number(sampleActivity) <= 0 || Number(sampleActivity) > MODERN_ACTIVITY)){
   return false;
 }
 sampleActivity = parseFloat(sampleActivity);
    return  Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD));
};
