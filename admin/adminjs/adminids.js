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
function executeGetSourceAddress(callback){
    $.ajax({
        url: 'adminserver/networkpackets/getsourceaddress.php',
        method: 'GET',
        success: function(response) {
            callback(response);
        },
        error: function(xhr, status, error) {
            callback(null); // Pass null or an error indicator to the callback if there was an error
        }
    });
}
function executeGetDestinationAddress(callback){
    $.ajax({
        url: 'adminserver/networkpackets/getdestinationaddress.php',
        method: 'GET',
        success: function(response) {
            callback(response);
        },
        error: function(xhr, status, error) {
            callback(null); // Pass null or an error indicator to the callback if there was an error
        }
    });
}
function executeGetProtocol(callback){
    $.ajax({
        url: 'adminserver/networkpackets/getprotocol.php',
        method: 'GET',
        success: function(response) {
            callback(response);
        },
        error: function(xhr, status, error) {
            callback(null); // Pass null or an error indicator to the callback if there was an error
        }
    });
}
function executeGetSourcePort(callback){
    $.ajax({
        url: 'adminserver/networkpackets/getsourceport.php',
        method: 'GET',
        success: function(response) {
            callback(response);
        },
        error: function(xhr, status, error) {
            callback(null); // Pass null or an error indicator to the callback if there was an error
        }
    });
}
function executeGetDestinationPort(callback) {
    $.ajax({
        url: 'adminserver/networkpackets/getdestinationport.php',
        method: 'GET',
        success: function(response) {
            callback(response);
        },
        error: function(xhr, status, error) {
            callback(null); // Pass null or an error indicator to the callback if there was an error
        }
    });
}
function executeGetLength(callback){
    $.ajax({
        url: 'adminserver/networkpackets/getlength.php',
        method: 'GET',
        success: function(response) {
            callback(response);
        },
        error: function(xhr, status, error) {
            callback(null); // Pass null or an error indicator to the callback if there was an error
        }
    });
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
    //Declare empty list variables
    const sourceIPs = [];
    const destinationIPs = [];
    const protocols = [];
    const sourcePorts = [];
    const destinationPorts = [];
    const lengths = [];

    // Initial executions
    executeGetTime();
    executeGetSourceAddress(function(response) {
        sourceIPs = response; // Handle the response here
        executeGetLength(function(response) {
            lengths = response; // Handle the response here
            generateBarChart("feature1Chart", sourceIPs, lengths, "Packet Lengths");
        });
    });
    executeGetDestinationAddress(function(response) {
        destinationIPs = response; // Handle the response here
    });
    executeGetProtocol(function(response) {
        protocols = response; // Handle the response here
    });
    executeGetSourcePort(function(response) {
        sourcePorts = response; // Handle the response here
    });
    executeGetDestinationPort(function(response) {
        destinationPorts = response; // Handle the response here
    });

    // Generate bar charts for each feature

    generateBarChart("feature2Chart", destinationIPs, lengths, "Packet Lengths");
    generateBarChart("feature3Chart", protocols, lengths, "Packet Lengths");
    generateBarChart("feature4Chart", sourcePorts, lengths, "Packet Lengths");
    generateBarChart("feature5Chart", destinationPorts, lengths, "Packet Lengths");

    // Execute PHP code every 5 seconds
    setInterval(function(){
        executeGetTime();
        executeGetSourceAddress(function(response) {
            sourceIPs = response; // Handle the response here     
            executeGetLength(function(response) {
                lengths = response; // Handle the response here
                generateBarChart("feature1Chart", sourceIPs, lengths, "Packet Lengths");
            });
        });
        executeGetDestinationAddress();
        executeGetProtocol();
        executeGetSourcePort();
        executeGetDestinationPort();
        executeGetLength();
    }, 1000);
});