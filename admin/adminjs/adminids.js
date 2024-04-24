//Declare empty list variables
const sourceIPs = [];
const destinationIPs = [];
const protocols = [];
const sourcePorts = [];
const destinationPorts = [];
const lengths = [];

function executeGetTime(){
  $.ajax({
      url: 'adminserver/networkpackets/gettime.php',
      method: 'GET',
      success: function(response) {
          $('#localnetworktraffictime').html(response);
      },
      error: function(xhr, status, error) {
          console.error(error);
      }
  });
}
function executeGetSourceAddress(){
  $.ajax({
      url: 'adminserver/networkpackets/getsourceaddress.php',
      method: 'GET',
      success: function(response) {
          $('#sourceIPs').html(response);
      },
      error: function(xhr, status, error) {
          console.error(error);
      }
  });
  return response;
}
function executeGetDestinationAddress(){
  $.ajax({
      url: 'adminserver/networkpackets/getdestinationaddress.php',
      method: 'GET',
      success: function(response) {
          destinationIPs = response;
          $('#destinationIPs').html(response);
      },
      error: function(xhr, status, error) {
          console.error(error);
      }
  });
  return response;
}
function executeGetProtocol(){
  $.ajax({
      url: 'adminserver/networkpackets/getprotocol.php',
      method: 'GET',
      success: function(response) {
          protocols = response;
          $('#protocols').html(response);
      },
      error: function(xhr, status, error) {
          console.error(error);
      }
  });
  return response;
}
function executeGetSourcePort(){
  $.ajax({
      url: 'adminserver/networkpackets/getsourceport.php',
      method: 'GET',
      success: function(response) {
          sourcePorts = response;
          $('#sourcePorts').html(response);
      },
      error: function(xhr, status, error) {
          console.error(error);
      }
  });
  return response;
}
function executeGetDestinationPort(){
  $.ajax({
      url: 'adminserver/networkpackets/getdestinationport.php',
      method: 'GET',
      success: function(response) {
          destinationPorts = response
          $('#destinationPorts').html(response);
      },
      error: function(xhr, status, error) {
          console.error(error);
      }
  });
  return response;
}
function executeGetLength(){
  $.ajax({
      url: 'adminserver/networkpackets/getlength.php',
      method: 'GET',
      success: function(response) {
          lengths = response;
          $('#lengths').html(response);
      },
      error: function(xhr, status, error) {
          console.error(error);
      }
  });
  return response;
}
// Function to generate a bar chart
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
}

$(document).ready(function(){
// Initial executions
executeGetTime();
sourceIPs = executeGetSourceAddress();
destinationIPs = executeGetDestinationAddress();
protocols = executeGetProtocol();
sourcePorts = executeGetSourcePort();
destinationPorts = executeGetDestinationPort();
lengths = executeGetLength();

// Generate bar charts for each feature
generateBarChart("feature1Chart", sourceIPs, lengths, "Packet Lengths");
generateBarChart("feature2Chart", destinationIPs, lengths, "Packet Lengths");
generateBarChart("feature3Chart", protocols, lengths, "Packet Lengths");
generateBarChart("feature4Chart", sourcePorts, lengths, "Packet Lengths");
generateBarChart("feature5Chart", destinationPorts, lengths, "Packet Lengths");

// Execute PHP code every 5 seconds
setInterval(function(){
  executeGetTime();
  executeGetSourceAddress();
  executeGetDestinationAddress();
  executeGetProtocol();
  executeGetSourcePort();
  executeGetDestinationPort();
  executeGetLength();
}, 5000);
});