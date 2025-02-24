import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';

function Homepage() {
    return (
        <main className="homepage" style={{ border: "3px solid yellow", padding: "5px", marginBottom: "5px" }}>
            <Header />
            <SearchBar />
            <EmployeeList />
        </main>
    );
}

export default Homepage;
