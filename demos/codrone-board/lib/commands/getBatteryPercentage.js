import Command from "./command.js";
import { sensorBattery } from "../types/sensorTypes.js";

export default class GetBatteryPercentage extends Command {
  constructor() {
    var batteryPackage = sensorBattery;
    super(batteryPackage, "batteryPorcentage");
  }

  async run() {
    await this.sendBLECommand(this.package);
    const value = await this.readBLEValue();

    if (!value || !value.buffer) {
      return;
    }

    var arrayResult = new Uint8Array(value.buffer);
    let batteryPorcentageValue = arrayResult[7] & 0xff;
    var event = new CustomEvent(this.eventName, {
      detail: batteryPorcentageValue
    });
    dispatchEvent(event);
  }
}
