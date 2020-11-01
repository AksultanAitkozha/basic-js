module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turn = Number(Math.pow(2,disksNumber) - 1);
    let second = Number(turn / (turnsSpeed / 3600));
    return {turns:turn , seconds:second};
}
