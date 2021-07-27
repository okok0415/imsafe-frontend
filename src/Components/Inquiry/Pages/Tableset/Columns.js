import { SliderColumnFilter, NumberRangeColumnFilter, SelectColumnFilter, filterGreaterThan } from "./Table";

export const COLUMNS = [
    {
        Header: '노인 정보',
        columns: [
            {
                Header: '성함',
                accessor: '성함',
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
                // Use our custom `fuzzyText` filter on this column
                filter: 'fuzzyText',
                className: 'address',
            },
            {
                Header: '전화번호',
                accessor: '전화번호',
                // Use our custom `fuzzyText` filter on this column
                filter: 'fuzzyText',
                className: 'phonenum',
            },
            {
                Header: '진료기록',
                accessor: '진료기록',
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
                filter: 'fuzzyText',
                className: 'protector',
            },
            {
                Header: '보호자 전화번호',
                accessor: '보호자 전화번호',
                filter: 'fuzzyText',
                className: 'pphonenum',
            },
        ],
    },
    {
        Header: '담당자',
        accessor: '담당자',
        filter: 'fuzzyText',
        className: 'PIC',
    },
]

