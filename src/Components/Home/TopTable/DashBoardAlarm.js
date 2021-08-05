import React from "react";
import { Table } from "./Table";
import { COLUMNS } from "./AlarmColumns.js";
import MOCK_DATA from "../../../JSON/MOCK_DATA_ALARM.json";
import "../CSS/Home.css";

function DashBoardAlarm() {
    const columns = React.useMemo(() => COLUMNS, [])
    const data = React.useMemo(() => MOCK_DATA, [])

    return (
        <>
            <div className='alarm'>
                <Table columns={columns} data={data} />
            </div>
        </>
    )
}

export default DashBoardAlarm;