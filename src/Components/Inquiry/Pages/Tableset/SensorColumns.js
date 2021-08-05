import { NumberRangeColumnFilter, NameColumnFilter, DateRangeColumnFilter, BooleanColumnFilter } from "./Table";

export const COLUMNS = [
    {
        Header: "센서 정보",
        columns: [

            {
                Header: '센서 명',
                accessor: '센서명',
                Filter: NameColumnFilter,
                filter: 'fuzzyText',
                className: 'sensor-name',
                id: 'sensor-name',
            },
            {
                Header: '연결 가구',
                accessor: '연결가구',
                Filter: NameColumnFilter,
                filter: 'fuzzyText',
                className: 'connected',
            },
            {
                Header: '건전지상태',
                accessor: '건전지상태',
                Filter: NumberRangeColumnFilter,
                filter: 'between',
                className: 'battery-status',
            },
            {
                Header: '건전지 교체 시점',
                accessor: '건전지교체시점',
                Filter: DateRangeColumnFilter,
                filter: 'dateBetween',
                className: 'battery-change',
            },
            {
                Header: '교체횟수',
                accessor: '교체횟수',
                Filter: NameColumnFilter,
                filter: 'fuzzyText',
                className: 'change-count',
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
                Filter: BooleanColumnFilter,
                className: 'powerstatus',
            },
            {
                id: 'networkstatus',
                Header: '네트워크연결상태',
                accessor: "networkstatus",
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
                Filter: BooleanColumnFilter,
                className: 'networkstatus',
            },
        ]
    }
]
