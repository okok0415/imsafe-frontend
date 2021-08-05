export const COLUMNS = [
    {
        Header: "전원 상태 이상",
        columns: [

            {
                Header: '센서 명',
                accessor: '센서명',
                className: 'sensor-name',
                id: 'sensor-name',
            },
            {
                Header: '연결 가구',
                accessor: '연결가구',
                className: 'connected',
            },
            {
                id: 'powerstatus',
                Header: '전원상태',
                accessor: "powerstatus",
                Cell: ({ value }) => (value === true ? <i className="fas fa-check-circle"></i> : <i className="fas fa-times"></i>),
                filterMethod: (filter, row) => {
                    if (filter.value.indexOf("all") > -1) {
                        return true;
                    }
                    if (filter.value.indexOf("true") > -1) {
                        return row[filter.id] === true;
                    }
                    return row[filter.id] === false;
                },
                className: 'powerstatus',
            },
        ]
    },
]
