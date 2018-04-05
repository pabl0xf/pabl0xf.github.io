import Command from './command.js';
import { sensorAngles } from '../types/sensorTypes.js';

export default class GetGyroAngles extends Command {
  constructor(){
      var sensorPackage = sensorAngles;
      console.log('sensorAngle data array value: ' + sensorPackage );
      super(sensorPackage, 'getGyroAngles');
  }

  async run(){
    await Code.writeCharacteristic.writeValue(this.package);
    const value = await Code.readCharacteristic.readValue();

    var arrayResult = new Uint8Array(value.buffer);
    let gyroAngles = null;
    console.log(arrayResult);
    if(arrayResult.length>0){
      var attitudeRoll	= ((arrayResult[1] << 8) | (arrayResult[0]  & 0xff));
  		var attitudePitch	= ((arrayResult[3] << 8) | (arrayResult[2]  & 0xff));
  		var attitudeYaw	= arrayResult[5];
      var yawDegree		= (attitudeYaw >= 0 ? attitudeYaw : 360 + attitudeYaw );
      gyroAngles = {'attitudeRoll': attitudeRoll,
        'attitudePitch': attitudePitch,
        'attitudeYaw': attitudeYaw,
        'yawDegree': yawDegree
      }
    }
  //  console.log(gyroAngles);
    var event = new CustomEvent(this.eventName, { detail: gyroAngles });
    dispatchEvent(event);
  }
}
