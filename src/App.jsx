import Sidebar from "./components/Sidebar";
import EmployeesPage from "./components/EmployeesPage";
function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <EmployeesPage />
      </main>
    </div>
  );
}

export default App;
