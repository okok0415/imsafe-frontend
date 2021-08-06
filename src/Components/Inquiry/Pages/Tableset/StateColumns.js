import { NumberRangeColumnFilter, SelectColumnFilter, NameColumnFilter, AddressColumnFilter, PhoneColumnFilter, MedicalRecordsColumnFilter } from "./Table";
import { Link } from "react-router-dom";
export const COLUMNS = [
    {
        Header: '노인 정보',
        columns: [
            {
                Header: '성함',
                accessor: '성함',
                Filter: NameColumnFilter,
                className: "name",
                id: 'name',
                Cell: ({ row }) => (<Link to={{
                    pathname: `/detail/${row.original.id}`,
                    state: {
                        id: row.original.id,
                        name: row.original.성함,
                        age: row.original.나이,
                        gender: row.original.성별,
                        address: row.original.주소,
                        phoneNum: row.original.전화번호,
                        medicalRecord: row.original.진료기록,
                        protector: row.original.보호자,
                        protectorNum: row.original.보호자전화번호,
                        PIC: row.original.담당자,
                    }
                }}><span className="name-link">{row.original.성함}</span></Link>)
            },
            {
                Header: '나이',
                accessor: '나이',
                Filter: NumberRangeColumnFilter,
                filter: 'between',
                className: "age",
            },
            {
                Header: '성별',
                accessor: '성별',
                Filter: SelectColumnFilter,
                filter: 'includes',
                className: "gender",
            },
            {
                Header: '주소',
                accessor: '주소',
                Filter: AddressColumnFilter,
                className: 'address',
            },
            {
                Header: '전화번호',
                accessor: '전화번호',
                Filter: PhoneColumnFilter,
                // Use our custom `fuzzyText` filter on this column
                filter: 'fuzzyText',
                className: 'phonenum',
            },
            {
                Header: '진료기록',
                accessor: '진료기록',
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

