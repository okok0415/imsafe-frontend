import React from "react";
import { Table } from "./Tableset/Table";
import { COLUMNS } from "./Tableset/AlarmColumns.js";
import MOCK_DATA from "../../../JSON/MOCK_DATA_ALARM.json";
import "../CSS/Inquiry.css"

class Alarm extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {

        fetch("http://127.0.0.1:8000/elder/alarm")
            .then(res => res.json())
            .then(res => this.setState({ data: res }));


    }
    render() {
        const columns = COLUMNS;
        const data = this.state.data;
        console.log(data)
        return (
            <>
                <div className='content'>
                    <Table columns={columns} data={data} />
                </div>
            </>
        )
    }
}

export default Alarm;