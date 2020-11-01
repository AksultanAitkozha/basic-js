module.exports = function createDreamTeam(members) {
  if(!(members instanceof Array)){
    return false;
  }
  let team = "";
  for(let i=0;i< members.length;i++)
  {
    if(typeof(members[i]) =="string") {
    let j = 0;
      while (!/^[a-z]$/i.test(members[i][j])){
        j++;
      }
      team = team + members[i][j].toUpperCase();
   } } return team.split('').sort().join('');
  }
