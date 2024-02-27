
const fs = require('fs');

function log_message(fileName, message, logType){
    //Create a date object
    const date = new Date();
    //Generate timestamp string
    const timestamp = `[${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}_${date.getSeconds()}]`;
    //Genenate fimal log to be added to the file
    const finalLog = `${timestamp} [${logType}] ${message}`;
    //Append to the file the new log. If file does not exist, it will create the file
    fs.appendFileSync(fileName, finalLog);
}


//test scenarios
1. Validate that user can log a new message
2. Validate that after logging a new message, the log has the following format on timestamp: "[{year}-{month}-{day} {hours}:{minutes}:{seconds}]"
3. Validate that after adding 2 new messages, there is only one file created and both logs are part of it
4. Validate that user can logged different type of logs. e.g: ERROR, WARNING, INFO
5. Validate that user can logged a large message. e.g: Message of 1000 characters



function sortProducts(products, sortKey, ascending = true) {
    const productsSorted = [...products];
    for (let i = 0; i < productsSorted.length - 1; i++) {
        for (let j = i + 1; j < productsSorted.length; j++) {
            if ((ascending && productsSorted[i][sortKey] > productsSorted[j][sortKey]) ||
                (!ascending && productsSorted[i][sortKey] < productsSorted[j][sortKey])) {  
                const temp = productsSorted[i];
                productsSorted[i] = productsSorted[j];
                productsSorted[j] = temp;
            }
        }
    }
    
    return productsSorted;
}