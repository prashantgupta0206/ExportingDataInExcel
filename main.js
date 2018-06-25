const XLSX = require('xlsx'); 

let inputData = [[["the", 0.03, 0.11], ["diving", 0.11, 0.52], ["board", 0.52, 0.87], ["was", 0.87, 1.06], ["high", 1.06, 1.67], ["and", 1.7, 1.89], ["maybe", 1.89, 2.26], ["a", 2.26, 2.34], ["little", 2.34, 2.6], ["scary", 2.6, 3.24], ["budget", 3.66, 4], ["Bari", 4, 4.34], ["had", 4.34, 4.54], ["finished", 4.54, 4.99], ["his", 4.99, 5.15], ["swimming", 5.15, 5.53], ["lessons", 5.53, 6.05], ["and", 6.2, 6.42], ["passed", 6.42, 6.79], ["his", 6.79, 6.94], ["swim", 6.94, 7.2], ["test", 7.2, 7.65], ["and", 8.12, 8.4], ["now", 8.4, 8.92], ["he", 8.97, 9.14], ["was", 9.14, 9.33], ["ready", 9.33, 9.7], ["to", 9.7, 9.85], ["jump", 9.85, 10.35]]]; 
let headers = [["Title", "StartTime", "EndTime"]]; 

for (let i = 0; i <= inputData[0].length-1; i++) {

    if (inputData[0][i][1] <= 10) {
        inputData[0][i][1] = "00:00:0" + inputData[0][i][1];
    } else {
        inputData[0][i][1] = "00:00:" + inputData[0][i][1];
    }
    if (inputData[0][i][2] <= 10) {
        inputData[0][i][2] = "00:00:0" + inputData[0][i][2];
    } else {
        inputData[0][i][2] = "00:00:" + inputData[0][i][2];
    }
}

inputData[0].splice(0, 0, headers[0]); 
let data = inputData[0]; 
let ws = XLSX.utils.aoa_to_sheet(data); 
    let wb = XLSX.utils.book_new(); 
    XLSX.utils.book_append_sheet(wb, ws, "Output"); 
    XLSX.writeFile(wb, 'output.xlsx',  {type:'buffer', bookType:"xlsx"}); 