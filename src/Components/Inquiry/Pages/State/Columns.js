import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
    {
        Header: "성함",
        Footer: '성함',
        className: 'name',
        accessor: '성함',
        Filter: ColumnFilter,
        disableFilters: true,
    },
    {
        Header: "나이",
        Footer: "나이",
        className: 'age',
        accessor: '나이',
        Filter: ColumnFilter,
    },
    {
        Header: "주소",
        Footer: "주소",
        className: 'addr',
        accessor: '주소',
        Filter: ColumnFilter,
    },
    {
        Header: "전화번호",
        Footer: "전화번호",
        className: 'phonenum',
        accessor: '전화번호',
        Filter: ColumnFilter,
    },
    {
        Header: "진료기록",
        Footer: "진료기록",
        className: 'medical',
        accessor: '진료기록',
        Filter: ColumnFilter,
    },
    {
        Header: "보호자",
        Footer: "보호자",
        className: 'protector',
        accessor: '보호자',
        Filter: ColumnFilter,
    },
    {
        Header: "보호자 전화번호",
        Footer: "보호자 전화번호",
        className: 'protectornum',
        accessor: '보호자 전화번호',
        Filter: ColumnFilter,
    },
    {
        Header: "담당자",
        Footer: "담당자",
        className: 'PIC',
        accessor: '담당자',
        Filter: ColumnFilter,
    },
]
