import { useSelector } from "react-redux"
import { selectEmployeeList } from "../../utils/selector"
import { Table } from "cl-table-library"

export default function EmployeeList() {

    const employeeList = useSelector(selectEmployeeList)
  
    return (
        <Table data={employeeList} />
    )
}