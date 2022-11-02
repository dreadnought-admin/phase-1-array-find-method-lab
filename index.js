// code your solution here

const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

/*
function superbowlWin(record) {
    for (const result of record) {
        if (record.result === "W") {
            console.log(record.year);
            // return record.year;
        }
    }
}

record.find(superbowlWin(record)); 
console.log(superbowlWin(record));

*/

function superbowlWin (record) {
    const result = record.find(record => record.result === "W");
    return !!result ? result.year : undefined;
}

/*
function superbowlWin(record) {
    for (const key in record) {
        if (record[key].result === "W") {
            return (record[key].year);
        } else {
            return undefined;
        }   
    }
}

record.find(superbowlWin(record));

// ^ correct solution in standard function, sort of */

