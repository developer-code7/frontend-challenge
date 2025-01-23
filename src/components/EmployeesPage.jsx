import { useState } from "react";
import {
  searchuserlogo,
  human,
  bulkupload,
  dropdown,
  search,
  download,
} from "../assets/index.js";
import BulkUploadModal from "./BulkUploadModal.jsx";
import EmployeeTable from "./EmployeeTable.jsx";
import Loader from "./Loader.jsx";
import SummaryCard from "./SummaryCard.jsx";
import { handleFileExport } from "../service/handleFileExport.js";
import CongratulationsModal from "./CongratulationsModal.jsx";

const EmployeesPage = () => {
  const [isUploadModalActive, setIsUploadModalActive] = useState(false);
  const [fileData, setFileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  function toggleBulkUploadModal() {
    setIsUploadModalActive((prev) => !prev);
  }

  function toggleCongratulationsModal() {
    setIsUploaded((prev) => !prev);
  }
  return (
    <div className="p-8 relative">
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 ">Employees</h1>
        {fileData && (
          <div
            className="ml-auto flex items-center gap-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
            onClick={toggleBulkUploadModal}
          >
            <img src={human} alt="Add Employee" />
            <button className="">Add Employee</button>
          </div>
        )}
      </div>
      {isUploadModalActive && (
        <BulkUploadModal
          toggleBulkUploadModal={toggleBulkUploadModal}
          setFileData={setFileData}
          setIsLoading={setIsLoading}
          toggleCongratulationsModal={toggleCongratulationsModal}
        />
      )}

      {isUploaded && (
        <CongratulationsModal
          toggleCongratulationsModal={toggleCongratulationsModal}
        />
      )}

      {isLoading && <Loader />}
      {fileData ? (
        <div className="flex flex-col ">
          <div
            onClick={() => handleFileExport(fileData, "employeeDetails.xlsx")}
            className="ml-auto mb-2 border cursor-pointer p-2 flex items-center gap-2 border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50"
          >
            <img src={download} alt="download" />
            <p>Export</p>
          </div>
          <SummaryCard />
          <div className="flex justify-between items-center mt-10 mb-4">
            <h2 className="text-lg font-medium text-gray-800">All Employees</h2>
            <div className="flex items-center gap-4">
              <div className="p-2 flex items-center gap-4 border border-gray-300 rounded-lg w-64">
                <img src={search} alt="search" />
                <input
                  type="text"
                  placeholder="Search employee"
                  className="outline-none bg-inherit"
                />
              </div>
              <div className=" px-4 py-2 border flex items-center gap-2 border-gray-300 rounded-lg text-black font-medium bg-white hover:bg-gray-50">
                <img src={dropdown} alt="dropdown" />
                <button className=" ">All Status</button>
              </div>
              <div className=" px-4 py-2 border flex items-center gap-2 border-gray-300 rounded-lg text-black font-medium bg-white hover:bg-gray-50">
                <img src={dropdown} alt="dropdown" />
                <button className=" ">All Role</button>
              </div>
            </div>
          </div>
          <EmployeeTable data={fileData} />
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm p-12">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-8">
              <img
                src={searchuserlogo}
                alt="Team illustration"
                className="w-64 h-64 mx-auto rounded-lg object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Start building your team
            </h2>
            <p className="text-gray-600 mb-8">
              Add your first team member or import your entire team.
            </p>

            <div className="flex items-center justify-center gap-4">
              <div
                className="inline-flex items-center gap-4 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 cursor-pointer"
                onClick={toggleBulkUploadModal}
              >
                <img src={bulkupload} alt="Bulk Upload" />
                <button>Bulk Upload</button>
              </div>
              <div className="inline-flex items-center gap-4 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                <img src={human} alt="Add Employee" />
                <button className="">Add Employee</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeesPage;
