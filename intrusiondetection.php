<?php
function getWifiInterface() {
    // Execute a command to retrieve the Wi-Fi interface on Windows
    $command = 'netsh interface show interface ^| findstr /R /C:"Wireless"';
    $output = [];
    exec($command, $output);

    // Process the command output to extract the interface value
    $interface = '';
    if (!empty($output)) {
        $interfaceLine = trim($output[0]);
        $interfaceParts = preg_split('/\s+/', $interfaceLine);
        $interface = $interfaceParts[3];
    }

    return $interface;
}

// Open the network interface for capturing packets
$handle = pcap_open_live($interface, 65535, true, 1000, $error);
if ($handle === false) {
    die("Error opening interface: $error");
}

// Set a packet capture callback function
function packetCaptureCallback($user, $header, $packet)
{
    // Process the captured packet here
    // You can analyze the packet data, extract information, or perform any desired actions
    
    // For example, you can extract the packet headers
    $ethernetHeader = unpack('H*', substr($packet, 0, 14));
    $ipHeader = unpack('H*', substr($packet, 14, 20));
    $tcpHeader = unpack('H*', substr($packet, 34, 20));

    // Output the packet headers in HTML and CSS format
    $html = '<div class="packet-header">';
    $html .= '<h3>Ethernet Header:</h3>';
    $html .= '<pre>' . $ethernetHeader[1] . '</pre>';
    $html .= '<h3>IP Header:</h3>';
    $html .= '<pre>' . $ipHeader[1] . '</pre>';
    $html .= '<h3>TCP Header:</h3>';
    $html .= '<pre>' . $tcpHeader[1] . '</pre>';
    $html .= '</div>';

    echo '<style>.packet-header { background-color: #f1f1f1; padding: 10px; margin-bottom: 20px; }</style>';
    echo $html;
}

// Start capturing packets and display the packet headers every second
$interval = 1; // Display interval in seconds
while (true) {
    pcap_dispatch($handle, 1, 'packetCaptureCallback');
    sleep($interval);
}

// Close the capture handle
pcap_close($handle);
