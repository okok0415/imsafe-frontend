import React from "react";
import { Table } from "./Tableset/Table";
import { COLUMNS } from "./Tableset/SensorColumns";
import MOCK_DATA from "../../../JSON/MOCK_DATA_SENSOR.json";
import "../CSS/Inquiry.css"

function Sensor() {
    const columns = React.useMemo(() => COLUMNS, [])
    const data = React.useMemo(() => MOCK_DATA, [])
    return (
        <>
            <div className='content'>
                <Table columns={columns} data={data} />
            </div>
        </>
    )
}

export default Sensor;