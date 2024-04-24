import csv
import pyshark
import subprocess

# Create Empty lists
src_adr_data = []
dst_adr_data = []
proto_data = []
src_port_adr_data = []
dst_port_adr_data = []
length_data = []

def sanitize_pcap_file(original_file_path, csv_file):
    try:
        # Open the original pcap file
        cap = pyshark.FileCapture(original_file_path)

        with open(csv_file, 'w') as f:
            f.write('Source_Address,Destination_Address,Protocol,Source_Port,Destination_Port,Length\n')  # Write header to CSV file
            for packet in cap:
                if 'ip' in packet.layers[1].layer_name:
                    src = packet.ip.src
                    dst = packet.ip.dst
                    proto = packet.layers[1].layer_name
                    srcport = " "
                    dstport = " "
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

    finally:
        # Close the pcap files
        cap.close()

# Pcap File Path:
original_file = "../../adminjs/network_data/localnetworktraffic.pcap"
csv_file = '../../adminjs/network_data/localnetworktraffic.csv'

# Call the function to Create .CSV File
sanitize_pcap_file(original_file, csv_file)