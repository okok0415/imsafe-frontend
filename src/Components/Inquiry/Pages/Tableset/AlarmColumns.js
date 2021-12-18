import { NumberRangeColumnFilter, SelectColumnFilter, NameColumnFilter, AddressColumnFilter, PhoneColumnFilter, MedicalRecordsColumnFilter, DateRangeColumnFilter } from "./Table";

export const COLUMNS = [
    {
        Header: "날짜",
        accessor: "time",
        Filter: DateRangeColumnFilter,
        filter: 'dateBetween',
        className: "alarm-date",
        id: 'alarm-date',
    },
    {
        Header: "알람 내용",
        accessor: "content",
        Filter: NameColumnFilter,
        className: "alarm-content",
    },
    {
        Header: "작동 센서",
        accessor: "sensor",
        Filter: NameColumnFilter,
        className: "alarm-sensor",
    },

    {
        Header: '노인 정보',
        columns: [
            {
                Header: '성함',
                accessor: 'name',
                Filter: NameColumnFilter,
                className: "name",
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
                accessor: 'phonenumber',
                Filter: PhoneColumnFilter,
                // Use our custom `fuzzyText` filter on this column
                filter: 'fuzzyText',
                className: 'phonenum',
            },
            {
                Header: '진료기록',
                accessor: 'medicalrecords',
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
                accessor: "protector'sname",
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
        accessor: '관리자',
        Filter: NameColumnFilter,
        filter: 'fuzzyText',
        className: 'PIC',
    },
]

