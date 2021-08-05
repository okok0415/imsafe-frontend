import React from 'react'
import { useTable, useFilters, useGlobalFilter, usePagination, useSortBy } from 'react-table'
// A great library for fuzzy filtering/sorting items
import { matchSorter } from 'match-sorter'

// Define a default UI for filtering
function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    const count = preFilteredRows.length

    return (
        <input
            className="search"
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            placeholder={`Search ${count} records...`}
        />
    )
}

function NameColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    //const count = preFilteredRows.length

    return (
        <input
            className="search"
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            placeholder={`이름을 입력하세요`}
        />
    )
}


function AddressColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    //const count = preFilteredRows.length

    return (
        <input
            className="search"
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            placeholder={`주소를 입력하세요`}
        />
    )
}



function PhoneColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    //const count = preFilteredRows.length

    return (
        <input
            className="search"
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            placeholder={`전화번호를 입력하세요`}
        />
    )
}
function MedicalRecordsColumnFilter({
    column: { filterValue, preFilteredRows, setFilter },
}) {
    //const count = preFilteredRows.length

    return (
        <input
            className="search"
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
            }}
            placeholder={`진료기록을 입력하세요`}
        />
    )
}
// This is a custom filter UI for selecting
// a unique option from a list
function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
}) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
        const options = new Set()
        preFilteredRows.forEach(row => {
            options.add(row.values[id])
        })
        return [...options.values()]
    }, [id, preFilteredRows])

    // Render a multi-select box
    return (
        <select
            className="select"
            value={filterValue}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
        >
            <option value="">All</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    )
}

function BooleanColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
}) {
    // Calculate the options for filtering
    // using the preFilteredRows
    /*
    const options = React.useMemo(() => {
        const options = new Set()
        preFilteredRows.forEach(row => {
            options.add(row.values[id])
        })
        return [...options.values()]
    }, [id, preFilteredRows])
    */
    // Render a multi-select box
    return (
        <select
            className="select"
            value={filterValue}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
        >
            <option value="">All</option>
            <option value="true">양호</option>
            <option value="false" >불량</option>
        </select>
    )
}

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
function SliderColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
}) {
    // Calculate the min and max
    // using the preFilteredRows

    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        preFilteredRows.forEach(row => {
            min = Math.min(row.values[id], min)
            max = Math.max(row.values[id], max)
        })
        return [min, max]
    }, [id, preFilteredRows])

    return (
        <>
            <input
                type="range"
                min={min}
                max={max}
                value={filterValue || min}
                onChange={e => {
                    setFilter(parseInt(e.target.value, 10))
                }}
            />
            <button onClick={() => setFilter(undefined)}>Off</button>
        </>
    )
}

// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
function NumberRangeColumnFilter({
    column: { filterValue = [], preFilteredRows, setFilter, id },
}) {
    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0
        preFilteredRows.forEach(row => {
            min = Math.min(row.values[id], min)
            max = Math.max(row.values[id], max)
        })
        return [min, max]
    }, [id, preFilteredRows])

    return (
        <div
            style={{
                display: 'block',
            }}
        >
            <input
                className="numRangePrevious"
                value={filterValue[0] || ''}
                type="number"
                onChange={e => {
                    const val = e.target.value
                    setFilter((old = []) => [val ? parseInt(val, 10) : undefined, old[1]])
                }}
                placeholder={`최소 (${min})`}

            />
            <div> ~ </div>
            <input
                className="numRangeNext"
                value={filterValue[1] || ''}
                type="number"
                onChange={e => {
                    const val = e.target.value
                    setFilter((old = []) => [old[0], val ? parseInt(val, 10) : undefined])
                }}
                placeholder={`최대 (${max})`}
            />
        </div>
    )
}

function fuzzyTextFilterFn(rows, id, filterValue) {
    return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = val => !val
/*
function DateRangeColumnFilter({
    column: { filterValue = [], preFilteredRows, setFilter, id }
}) {
    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? new Date(preFilteredRows[0].values[id]).getTime() : 0;
        let max = preFilteredRows.length ? new Date(preFilteredRows[0].values[id]).getTime() : 0;

        preFilteredRows.forEach((row) => {
            min = Math.min(new Date(row.values[id]).getTime(), min);
            max = Math.max(new Date(row.values[id]).getTime(), max);
        });
        return [min, max];
    }, [id, preFilteredRows]);

    return (
        <div style={{ display: "flex" }}>
            <input
                value={filterValue[0] || ""}
                type="date"
                onChange={(e) => {
                    const val = e.target.value;
                    setFilter((old = []) => [val || undefined, old[1]]);
                }}
                style={{
                    width: "70px",
                    marginRight: "0.5rem"
                }}
            />
            to
            <input
                value={filterValue[1] || ""}
                type="date"
                onChange={(e) => {
                    const val = e.target.value;
                    setFilter((old = []) => [old[0], val || undefined]);
                }}
                style={{
                    width: "70px",
                    marginLeft: "0.5rem"
                }}
            />
        </div>
    );
}

function dateBetweenFilterFn(rows, id, filterValues) {
    let sd = new Date(filterValues[0]);
    let ed = new Date(filterValues[1]);
    console.log(rows, id, filterValues)
    return rows.filter(r => {
        var time = new Date(r.values[id]);
        console.log(time, ed, sd)
        if (filterValues.length === 0) return rows;
        return (time >= sd && time <= ed);
    });
}

dateBetweenFilterFn.autoRemove = val => !val;

*/
function DateRangeColumnFilter({
    column: {
        filterValue = [],
        preFilteredRows,
        setFilter,
        id
    } }) {
    const [min, max] = React.useMemo(() => {
        let min = preFilteredRows.length ? new Date(preFilteredRows[0].values[id]) : new Date(0)
        let max = preFilteredRows.length ? new Date(preFilteredRows[0].values[id]) : new Date(0)

        preFilteredRows.forEach(row => {
            const rowDate = new Date(row.values[id])

            min = rowDate <= min ? rowDate : min
            max = rowDate >= max ? rowDate : max
        })

        return [min, max]
    }, [id, preFilteredRows])

    return (
        <div>
            <input
                className="daterange-previous"
                min={min.toISOString().slice(0, 10)}
                onChange={e => {
                    const val = e.target.value
                    setFilter((old = []) => [val ? val : undefined, old[1]])
                }}
                type="date"
                value={filterValue[0] || ''}
            />
            <div>
                {' ~ '}
            </div>
            <input
                className="daterange-next"
                max={max.toISOString().slice(0, 10)}
                onChange={e => {
                    const val = e.target.value
                    setFilter((old = []) => [old[0], val ? val.concat('T23:59:59.999Z') : undefined])
                }}
                type="date"
                value={filterValue[1]?.slice(0, 10) || ''}
            />
        </div>
    )
}

// Our table component
function Table({ columns, data }) {
    const filterTypes = React.useMemo(
        () => ({
            // Add a new fuzzyTextFilterFn filter type.
            // Or, override the default text filter to use
            // "startWith"
            text: (rows, id, filterValue) => {
                return rows.filter(row => {
                    const rowValue = row.values[id]
                    return rowValue !== undefined
                        ? String(rowValue)
                            .toLowerCase()
                            .startsWith(String(filterValue).toLowerCase())
                        : true
                })
            },
        }),
        []
    )

    const defaultColumn = React.useMemo(
        () => ({
            // Let's set up our default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,


    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            // Be sure to pass the defaultColumn option
            filterTypes,
            initialState: {
                filters: [
                    {
                        id: 'powerstatus',
                        value: false,
                    },

                ]

            }
        },
        useFilters, // useFilters!
        useGlobalFilter, // useGlobalFilter!
        useSortBy,
        usePagination,
    )


    const firstPageRows = page.slice(0, 3);

    return (
        <>
            <table className="table" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} style={{ verticalAlign: 'top' }}>
                            {headerGroup.headers.map(column => (
                                <th className={column.className} {...column.getHeaderProps()} sorted={column.sorted}>
                                    <span {...column.getSortByToggleProps()}>
                                        {column.render('Header')}
                                    </span>
                                    <span>{column.isSorted ? (column.isSortedDesc ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>) : ''}</span>
                                    {/* Render the columns filter UI */}
                                </th>
                            ))}
                        </tr>
                    ))}

                </thead>
                <tbody {...getTableBodyProps()}>
                    {firstPageRows.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
    return rows.filter(row => {
        const rowValue = row.values[id]
        return rowValue >= filterValue
    })
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = val => typeof val !== 'number'


export { Table, SliderColumnFilter, NumberRangeColumnFilter, SelectColumnFilter, filterGreaterThan, NameColumnFilter, AddressColumnFilter, PhoneColumnFilter, MedicalRecordsColumnFilter, DateRangeColumnFilter, BooleanColumnFilter };