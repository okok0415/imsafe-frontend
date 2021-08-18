import { NumberRangeColumnFilter, SelectColumnFilter, NameColumnFilter, AddressColumnFilter, PhoneColumnFilter, MedicalRecordsColumnFilter } from "./Table";
import { Link } from "react-router-dom";
export const COLUMNS = [
    {
        Header: '노인 정보',
        columns: [
            {
                Header: '성함',
                accessor: 'age',
                Filter: NameColumnFilter,
                className: "name",
                id: 'name',
                Cell: ({ row }) => (<Link to={{
                    pathname: `/detail/${row.original.name}`,
                    state: {
                        name: row.original.name,
                    }
                }}><span className="name-link">{row.original.name}</span></Link>)
            },
            {
                Header: '나이',
                accessor: 'age',
                Filter: NumberRangeColumnFilter,
                filter: 'between',
                className: "age",
            },
            {
                Header: '성별',
                accessor: 'gender',
                Filter: SelectColumnFilter,
                filter: 'includes',
                className: "gender",
            },
            {
                Header: '주소',
                accessor: 'address',
                Filter: AddressColumnFilter,
                className: 'address',
            },
            {
                Header: '전화번호',
                accessor: 'phone number',
                Filter: PhoneColumnFilter,
                // Use our custom `fuzzyText` filter on this column
                filter: 'fuzzyText',
                className: 'phonenum',
            },
            {
                Header: '진료기록',
                accessor: 'medical records',
                Filter: MedicalRecordsColumnFilter,
                // Use our custom `fuzzyText` filter on this column
                filter: 'fuzzyText',
                className: "medical-records"
            },
        ],
    },
    {
        Header: '보호자',
        columns: [
            {
                Header: '보호자 성함',
                accessor: '보호자',
                Filter: NameColumnFilter,
                filter: 'fuzzyText',
                className: 'protector',
            },
            {
                Header: '보호자 전화번호',
                accessor: '보호자전화번호',
                Filter: PhoneColumnFilter,
                filter: 'fuzzyText',
                className: 'pphonenum',
            },
        ],
    },
    {
        Header: '담당자',
        accessor: '담당자',
        Filter: NameColumnFilter,
        filter: 'fuzzyText',
        className: 'PIC',
    },
]

