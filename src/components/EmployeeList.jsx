import EmployeeListItem from "./EmployeeListItem";
function EmployeeList() {
    return (
        <ul style={{ border: "3px solid purple", padding: "5px", marginBottom: "5px" }}>
            <EmployeeListItem />
            <EmployeeListItem />
            <EmployeeListItem />
        </ul>
    );
}

export default EmployeeList