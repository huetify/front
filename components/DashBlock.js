import Block from "./Block";
import {BulbGroup, BulbsSultan, DevicesBridgesV2, DevicesMotionSensor} from "hue-icon";

export default function DashBlock() {
    return (
        <div className="dashblock">
            <Block className="dashblock__item">
                <DevicesBridgesV2 />
                <div className="dashblock__content">
                    <span className="dashblock__value">1</span>
                    <h2 className="dashblock__title">Bridges</h2>
                </div>
            </Block>
            <Block className="dashblock__item">
                <BulbGroup />
                <div className="dashblock__content">
                    <span className="dashblock__value">3</span>
                    <h2 className="dashblock__title">Bulb Group</h2>
                </div>
            </Block>
            <Block className="dashblock__item">
                <DevicesMotionSensor />
                <div className="dashblock__content">
                    <span className="dashblock__value">2</span>
                    <h2 className="dashblock__title">Motion Sensor</h2>
                </div>
            </Block>

            <Block className="dashblock__item">
                <BulbsSultan />
                <div className="dashblock__content">
                    <span className="dashblock__value">16</span>
                    <h2 className="dashblock__title">Bulbs</h2>
                </div>
            </Block>
        </div>
    )
}