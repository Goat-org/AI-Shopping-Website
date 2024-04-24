import csv

#1. Create Empty lists
proto_data = []

def read_csv_file(file_path):
  data = []
  with open(file_path, 'r') as csv_file:
      csv_reader = csv.reader(csv_file)
      for row in csv_reader:
          data.append(row)
  return data

#2. Usage example:
file_path = '../../adminjs/network_data/localnetworktraffic.csv'
csv_data = read_csv_file(file_path)

#3. Append packet data to list variable
for row in csv_data:
    if row[2] != "":
      proto_data.append(row[2])
    else:
      proto_data.append("none")

#4. Functions for returning Packet Attributes
def protocol():
  return proto_data

#5. Call the function to return Packet data
print(protocol())
