import React from "react";
import { Table } from "./FilteringTable";
import { COLUMNS } from "./SensorColumns.js";
import MOCK_DATA from "../../../JSON/MOCK_DATA_SENSOR.json";
import "../CSS/Home.css";

function DashBoardSensor() {
    const columns = React.useMemo(() => COLUMNS, [])
    const data = React.useMemo(() => MOCK_DATA, [])

    return (
        <>
            <Table columns={columns} data={data} />

        </>
    )
}

export default DashBoardSensor;