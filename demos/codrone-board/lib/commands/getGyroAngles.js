import Command from './command.js';
import { sensorAngles } from '../types/sensorTypes.js';

export default class GetGyroAngles extends Command {
  constructor(){
      var sensorPackage = sensorAngles;
      super(sensorPackage, 'getGyroAngles');
  }

  async run(){
    await Code.writeCharacteristic.writeValue(this.package);
    const value = await Code.readCharacteristic.readValue();

    //var arrayResult = this.removePackageHeader(value.buffer)

    var arrayResult = new Uint8Array(value.buffer);
    let gyroAngles = null;

    if(arrayResult.length>0){
      var attitudeRoll	= ((arrayResult[1] << 8) | (arrayResult[0]  & 0xff));
  		var attitudePitch	= ((arrayResult[3] << 8) | (arrayResult[2]  & 0xff));
  		var attitudeYaw	= ((arrayResult[6] << 8) | (arrayResult[5]  & 0xff));

      var binaryAtittudeYaw = (attitudeYaw>>> 0).toString(2);

      var [ signedValue ]  = new Int16Array(['0b'+binaryAtittudeYaw]);

      var yawDegree		= (signedValue >= 0 ? signedValue : 360 + signedValue );
      gyroAngles = {'attitudeRoll': attitudeRoll,
        'attitudePitch': attitudePitch,
        'attitudeYaw': attitudeYaw,
        'yawDegree': yawDegree
      }
    }
    var event = new CustomEvent(this.eventName, { detail: gyroAngles });
    dispatchEvent(event);
  }
}
