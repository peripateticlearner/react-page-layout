import avatar from '../assets/img/avatar.jpg'

function EmployeeListItem() {
    return (
        <li style={{ border: "3px solid red", padding: "5px", marginBottom: "5px" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                    src={avatar}
                    alt="Employee Avatar"
                    style={{
                        borderRadius: "60%", width: "100px", marginRight: "10px"
                    }} />
                <div>
                    <h2>Name</h2>
                    <p>Job Title</p>
                </div>
            </div>
        </li>
    );
}

export default EmployeeListItem;