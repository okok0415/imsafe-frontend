import { NumberRangeColumnFilter, SelectColumnFilter, NameColumnFilter, AddressColumnFilter, PhoneColumnFilter, MedicalRecordsColumnFilter, DateRangeColumnFilter } from "./Table";

export const COLUMNS = [
    {
        Header: "날짜",
        accessor: "날짜",
        Filter: DateRangeColumnFilter,
        filter: 'dateBetween',
        className: "alarm-date",
        id: 'alarm-date',
    },
    {
        Header: "알람 내용",
        accessor: "알람내용",
        Filter: NameColumnFilter,
        className: "alarm-content",
    },
    {
        Header: "작동 센서",
        accessor: "작동센서",
        Filter: NameColumnFilter,
        className: "alarm-sensor",
    },

    {
        Header: '노인 정보',
        columns: [
            {
                Header: '성함',
                accessor: '성함',
                Filter: NameColumnFilter,
                className: "name",
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

