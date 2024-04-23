import csv
import pyshark

def display_pcap_file(original_file_path, csv_file):
    try:
        # Open the original pcap file
        cap = pyshark.FileCapture(original_file_path)
        
        # Create Empty lists
        src_adr_data = []
        dst_adr_data = []
        proto_data = []
        src_port_adr_data = []
        dst_port_adr_data = []
        length_data = []

        with open(csv_file, 'w') as f:
            f.write('Source_Address,Destination_Address,Protocol,Source_Port,Destination_Port,Length\n')  # Write header to CSV file
            for packet in cap:
                if 'ip' in packet.layers[1].layer_name:
                    src = packet.ip.src
                    dst = packet.ip.dst
                    proto = packet.layers[1].layer_name
                    srcport = "no display"
                    dstport = "no display"
                    length = packet.length
                elif 'tcp' in packet.layers[1].layer_name:
                    src = packet.tcp.src
                    dst = packet.tcp.dst
                    proto = packet.layers[1].layer_name
                    srcport = packet.tcp.srcport
                    dstport = packet.tcp.dstport
                    length = packet.length
                elif 'udp' in packet.layers[1].layer_name:
                    src = packet.udp.src
                    dst = packet.udp.dst
                    proto = packet.layers[1].layer_name
                    srcport = packet.udp.srcport
                    dstport = packet.udp.dstport
                    length = packet.length
                else:
                    continue
                f.write(f'{src},{dst},{proto},{srcport},{dstport},{length}\n')

        def read_csv_file(file_path):
            data = []
            with open(file_path, 'r') as csv_file:
                csv_reader = csv.reader(csv_file)
                for row in csv_reader:
                    data.append(row)
            return data

        # Usage example:
        file_path = '../adminjs/network_data/localnetworktraffic.csv'
        csv_data = read_csv_file(file_path)

        # Display the captured packets as a csv list
        for row in csv_data:
            src_adr_data.append(row[0])
            dst_adr_data.append(row[1])
            proto_data.append(row[2])
            src_port_adr_data.append(row[3])
            dst_port_adr_data.append(row[4])
            length_data.append(row[5])

    finally:
        # Close the pcap files
        cap.close()

# Pcap File Path:
original_file = "../adminjs/network_data/localnetworktraffic.pcap"
csv_file = '../adminjs/network_data/localnetworktraffic.csv'

# Call the function to Create .CSV File
display_pcap_file(original_file, csv_file)