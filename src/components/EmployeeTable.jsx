import { updown } from "../assets";
import PropTypes from "prop-types";

const EmployeeTable = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border-2 border-[#B3BEBE]">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="w-4 p-4">
              <input
                type="checkbox"
                className="h-4 w-4 rounded  border-[#B3BEBE] text-teal-600 focus:ring-teal-500"
              />
            </th>
            {["Employee ID", "Employee Profile", "Email", "Role", "Status"].map(
              (header) => (
                <th
                  key={header}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  <div className="flex items-center gap-1">
                    {header}
                    <img src={updown} alt="" />
                  </div>
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((employee) => (
            <tr key={employee.employee_id} className="hover:bg-gray-50">
              <td className="w-4 p-4">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#B3BEBE] text-teal-600 focus:ring-teal-500"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <a href="#" className="text-teal-600 hover:text-teal-700">
                  {employee.employee_id}
                </a>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200 mr-3"></div>
                  <span className="text-sm text-black font-medium">
                    {employee.employee_profile}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                {employee.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-black font-medium">
                {employee.role}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${
                        employee.status === "Active"
                          ? "bg-teal-100 text-teal-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                >
                  {employee.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
EmployeeTable.propTypes = {
  data: PropTypes.object,
};
export default EmployeeTable;
