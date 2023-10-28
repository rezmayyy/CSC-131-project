import { useContext } from "react"
import { DataContext } from "../context/dataContext"

export const DeviceNameInput = () => {
    const [device, setDevice] = useContext(DataContext).device

    const handleDeviceChange = (event) => {
        setDevice(event.target.value);
    }

    return (
        <input
            type="text"
            name="device"
            placeholder="Device Name..."
            value={device}
            onChange={handleDeviceChange}
        />
    )

}