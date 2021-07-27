import React from "react";
import { Table } from "./Tableset/Table";
import { COLUMNS } from "./Tableset/Columns";
import MOCK_DATA from "./Tableset/MOCK_DATA.json";
import "../CSS/Inquiry.css"


function State() {
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

export default State;