// code your solution here
function superbowlWin(record) {add
    const winningRecord = record.find(game => game.result === "W");
    return winningRecord ? winningRecord.year : undefined;
}
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
];

console.log(superbowlWin(record));
