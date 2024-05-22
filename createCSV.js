const fs = require("fs");

function getData() {
  return fetch(
    "https://api.worldweatheronline.com/premium/v1/past-weather.ashx?q=Ho+Chi+Minh&date=2024-04-23&enddate=2024-05-21&tp=1&format=json&key=a51e97fb257044f1a15144334242304"
  )
    .then((res) => res.json())
    .then((data) => {
      let weather = data.data.weather;
      let obj = weather.map((today) => {
        let date = today.date;
        let hourly = today.hourly;
        let pairValue = hourly.map((hourlyData) => {
          let timeStamp = date + ":" + hourlyData.time;
          // let humidity = hourlyData.humidity;
          let tempC = hourlyData.tempC;
          // return [timeStamp, humidity];
          return [timeStamp, tempC];
        });
        return pairValue;
      });
      let flattenedObj = [].concat(...obj);
      return flattenedObj;
    });
}
// getData()
function convertToCSV(data) {
  // Add headers
  const headers = "time,humidity\n";
  // Convert data to CSV format
  const csv = data
    .map((row) => {
      // Split date and time
      const [date, time] = row[0].split(":");
      // Convert the time format
      const hours = parseInt(time) / 100; // Convert from 100s to hours
      const formattedTime = `${date}:${hours
        .toString()
        .padStart(2, "0")}:00:00`;
      return [formattedTime, row[1]].join(",");
    })
    .join("\n");
  // Combine headers and data
  return headers + csv;
}

async function main() {
  var data = await getData();
  const csvData = convertToCSV(data);
  fs.appendFile("temperature_data.csv", csvData, (err) => {
    if (err) {
      console.error("Error writing CSV file:", err);
    } else {
      console.log("CSV file saved successfully!");
    }
  });
}
main();
// console.log(data);
// Convert data to CSV format
// const csvData = convertToCSV(data);
