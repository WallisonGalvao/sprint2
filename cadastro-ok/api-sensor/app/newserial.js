const sensors = require('./sensors')
const SerialPort = require("serialport");
const Readline = SerialPort.parsers.Readline;

// abre a pota usb para captura de dados

class ArduinoRead {

    constructor() {
        this.listData = [
            {
            'name': 'Umidade',
            'data': [],
            'total': 0,
            "average": 0
            },
            {
            'name': 'TemperaturaDHT11',
            'data': [],
            'total': 0,
            "average": 0
            },
            {
            'name': 'Luminosidade',
            'data': [],
            'total': 0,
            "average": 0
            },
            {
            'name': 'TemperaturaLM35',
            'data': [],
            'total': 0,
            "average": 0
            }
        ];
        this.__listDataTemp = [];
    }

    fake_data() {
        setInterval(() => {
            let data_float2 = sensors.dht11(20,90);
            let data_float = sensors.lm35(-2, 40);

            if (this.listData.length === 59) {
                let sum = this.listData.reduce((a, b) => a + b, 0);
                this.listDataHour.push((sum / this.listData.length).toFixed(2));
                while (this.listData.length > 0) {
                    this.listData.pop();
                } 
            }
            // console.log(this.listData);
            console.log('Umidade', data_float2);
            console.log('Temperatura', data_float.toFixed(2));
            this.listData[0].data.push(data_float2);
            this.listData[3].data.push(data_float.toFixed(2));


        }, 1000);
    }


    get List() {
        return this.listData;
        
    }

    SetConnection() {
        SerialPort.list().then(listSerialDevices => {
            console.log(listSerialDevices)
            let listArduinoSerial = listSerialDevices.filter(serialDevice => {
                return serialDevice.vendorId == 2341 && serialDevice.productId == 43;
            });

            if (listArduinoSerial.length != 1) {
                this.fake_data();
                console.log("Arduino not found - Generating data");
            } else {
                console.log("Arduino found in the com %s", listArduinoSerial[0].path);
                return listArduinoSerial[0].path;
            }
        }).then(path => {
            try {
                let arduino = new SerialPort(path, { baudRate: 9600 });

                const parser = new Readline();
                arduino.pipe(parser);
                arduino.on('close',() => {
                    console.log('Lost Connection');
                });
                parser.on('data', (data) => {
                    console.log(data)
                    let temp = data.replace(/\r/g,'').split(';')
                    if (temp.length === this.listData.length){
                        temp.map((item, index)=>{
                            console.log('Leitura - ' + this.listData[index].name + ': ' + item);
                            this.listData[index].data.push(parseInt(item))
                        })
                    }
                    //this.listData.push(parseFloat(data));
                });
            } catch (e) {
            }

        }).catch(error => console.log(error));
    }

}

const serial = new ArduinoRead();
serial.SetConnection();


module.exports.ArduinoDataTemp = { List: serial.List};
