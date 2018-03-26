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

    var arrayResult = new Uint8Array(value.buffer);
    let gyroAngles = null;
    if(arrayResult.length>18){
      var attitudeRoll	= ((arrayResult[2] << 8) | (arrayResult[1]  & 0xff));
  		var attitudePitch	= ((arrayResult[4] << 8) | (arrayResult[3]  & 0xff));
  		var attitudeYaw		= ((arrayResult[6] << 8) | (arrayResult[5]  & 0xff));
      var yawDegree		= (attitudeYaw >= 0 ? attitudeYaw : 360 + attitudeYaw );
      gyroAngles = {'attitudeRoll': attitudeRoll,
        'attitudePitch': attitudePitch,
        'attitudeYaw': attitudeYaw,
        'yawDegree': yawDegree
      }
    }
    console.log(gyroAngles);
    var event = new CustomEvent(this.eventName, { detail: gyroAngles });
    dispatchEvent(event);
  }
}
