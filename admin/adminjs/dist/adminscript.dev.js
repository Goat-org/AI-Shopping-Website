"use strict";

// Declare Empty Lists To Store Parsed Data
var sourceIPs = [];
var destinationIPs = [];
var protocols = [];
var sourcePorts = [];
var destinationPorts = [];
var lengths = []; // Function to read and parse CSV data

function readCSV(url) {
  fetch(url).then(function (response) {
    return response.text();
  }).then(function (data) {
    // Parse the CSV data
    var parsedData = parseCSV(data); // Populate the arrays with the parsed data

    parsedData.forEach(function (row) {
      sourceIPs.push(row.Source_Address);
      destinationIPs.push(row.Destination_Address);
      protocols.push(row.Protocol);
      sourcePorts.push(row.Source_Port);
      destinationPorts.push(row.Destination_Port);
      lengths.push(row.Lengths);
    }); // Display the stored data in HTML elements

    document.getElementById('sourceIPs').innerHTML = sourceIPs.join('<br>');
    document.getElementById('destinationIPs').innerHTML = destinationIPs.join('<br>');
    document.getElementById('protocols').innerHTML = protocols.join('<br>');
    document.getElementById('sourcePorts').innerHTML = sourcePorts.join('<br>');
    document.getElementById('destinationPorts').innerHTML = destinationPorts.join('<br>');
    document.getElementById('lengths').innerHTML = lengths.join('<br>');
  })["catch"](function (error) {
    // Display the stored data in HTML elements
    document.getElementById('sourceIPs').innerHTML = "Error Parsing".join('<br>');
    document.getElementById('destinationIPs').innerHTML = "Error Parsing".join('<br>');
    document.getElementById('protocols').innerHTML = "Error Parsing".join('<br>');
    document.getElementById('sourcePorts').innerHTML = "Error Parsing".join('<br>');
    document.getElementById('destinationPorts').innerHTML = "Error Parsing".join('<br>');
    document.getElementById('lengths').innerHTML = "Error Parsing".join('<br>');
  });
} // Function to parse CSV data


function parseCSV(data) {
  var rows = data.trim().split('\n');
  var headers = rows.shift().split(',');
  var parsedData = rows.map(function (row) {
    var values = row.split(',');
    var rowData = {};
    headers.forEach(function (header, index) {
      rowData[header] = values[index];
    });
    return rowData;
  });
  return parsedData;
} // Function to generate a bar chart


function generateBarChart(elementId, labels, data, label) {
  var ctx = document.getElementById(elementId).getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: data,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
} // Call the readCSV function with the URL of your CSV file


readCSV('adminjs/network_data/localnetworktraffic.csv'); // Generate bar charts for each feature

generateBarChart("feature1Chart", sourceIPs, lengths, "Packet Lengths");
generateBarChart("feature2Chart", destinationIPs, lengths, "Packet Lengths");
generateBarChart("feature3Chart", protocols, lengths, "Packet Lengths");
generateBarChart("feature4Chart", sourcePorts, lengths, "Packet Lengths");
generateBarChart("feature5Chart", destinationPorts, lengths, "Packet Lengths");
//# sourceMappingURL=adminscript.dev.js.map
