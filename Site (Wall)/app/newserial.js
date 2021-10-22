const sensors = require('./sensors')
const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;



class ArduinoRead {

    constructor() {
        this.listData = [];
        this.listData2 = [];
        this.__listDataTemp = [];
        this.sensor = {
            minHum: 20,
            maxHum: 80,
            minTemp: 0,
            maxTemp: 50
        };
    }

    get List() {
        return this.listData;
    }
    get List2() {
        return this.listData2;
    }

    fake_data() {
        setInterval(() => {
            let dht11 = sensors.dht11(this.sensor);

            if (this.listData.length === 59) {
                let sum = this.listData.reduce((a, b) => a + b, 0);
                this.listDataHour.push((sum / this.listData.length).toFixed(2));
                while (this.listData.length > 0) {
                    this.listData.pop();
                }
            }
            if (this.listData2.length === 59) {
                let sum2 = this.listData2.reduce((a, b) => a + b, 0);
                this.listDataHour.push((sum2 / this.listData2.length).toFixed(2));
                while (this.listData2.length > 0) {
                    this.listData2.pop();
                }
            }
            this.listData.push(dht11[0]);
            this.listData2.push(dht11[1]);
        }, 2000);
    }


    SetConnection() {

        SerialPort.list().then(listSerialDevices => {

            let listArduinoSerial = listSerialDevices.filter(serialDevice => {
                return serialDevice.vendorId == 2341 && serialDevice.productId == 43;
            });

            if (listArduinoSerial.length != 1) {
                this.fake_data();
                console.log("Arduino not found - Generating data");
            } else {
                console.log("Arduino found in the com %s", listArduinoSerial[0].comName);
                return listArduinoSerial[0].comName;
            }
        }).then(comName => {
            try {
                let arduino = new SerialPort(comName, { baudRate: 9600 });

                const parser = new Readline();
                arduino.pipe(parser);
                arduino.on('close', () => {
                    console.log('Lost Connection');
                    this.fake_data();
                });
                parser.on('data', (data) => {
                    data = data.split(',');
                    console.log(data[0]);
                    console.log(data[1]);
                    this.listData.push(parseInt(data[0]));
                    this.listData2.push(parseFloat(data[1]));
                });
            } catch (e) {
                this.fake_data();
            }

        }).catch(error => console.log(error));
    }
}

const serial = new ArduinoRead();
serial.SetConnection();

module.exports.ArduinoDataTemp = { List: serial.List, List2: serial.List2};
