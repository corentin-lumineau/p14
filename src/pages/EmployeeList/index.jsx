import { useSelector } from "react-redux"
import { selectEmployeeList } from "../../utils/selector"
import Table from '../../components/Table/index.jsx'

export default function EmployeeList() {

    const employeeList = useSelector(selectEmployeeList)
  
    return (
        <Table  data={employeeList}/>
    )
}