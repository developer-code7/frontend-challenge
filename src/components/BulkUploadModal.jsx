import { useState } from "react";
import PropTypes from "prop-types";
import { download, excellogo, upload } from "../assets";
import file from "../assets/example.xlsx";
import { handleFileUpload } from "../service/handleFilepload";

const BulkUploadModal = ({
  toggleBulkUploadModal,
  setFileData,
  setIsLoading,
  toggleCongratulationsModal,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleFile = async (file) => {
    if (
      file.type ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      setSelectedFile(file);
    } else {
      alert("Please upload a valid XLSX file.");
    }
  };

  const handleSubmit = () => {
    try {
      if (selectedFile) {
        toggleBulkUploadModal();
        setIsLoading(true);
        setTimeout(async () => {
          const data = await handleFileUpload(selectedFile);

          setFileData((prevData) => [...(prevData || []), ...data]);
          setSelectedFile(null);
          setIsLoading(false);
          toggleCongratulationsModal();
        }, 3000);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = file;
    link.download = "example.xlsx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <div className="bg-white rounded-xl w-[600px] p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Upload File</h2>
          <button
            onClick={toggleBulkUploadModal}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>

        <div className="flex flex-col items-center cursor-pointer">
          {!selectedFile ? (
            <label htmlFor="file-upload" className="cursor-pointer">
              <img src={upload} alt="Upload" />
              <span>Drag and drop your file here or click to browse</span>
            </label>
          ) : (
            <div className="flex flex-col items-center h-[250px]">
              <p className="text-sm text-gray-700 mb-2">
                Selected File: <strong>{selectedFile.name}</strong>
              </p>
              <button
                className="text-xs text-red-500 hover:underline"
                onClick={() => setSelectedFile(null)}
              >
                Remove File
              </button>
            </div>
          )}
          <input
            id="file-upload"
            type="file"
            accept=".xlsx"
            className="hidden"
            onChange={(e) => handleFile(e.target.files[0])}
          />
        </div>

        <div className="flex justify-between text-sm text-gray-500 mb-6">
          <span>Supported formats: XLSX</span>
          <span>Maximum file size: 25MB</span>
        </div>

        <div className="bg-[#f2f5f5] rounded-lg p-4 mb-6 flex items-center gap-4">
          <div className="flex items-center gap-4">
            <img src={excellogo} alt="MS Excel" />
            <div>
              <h3 className="font-medium text-gray-900">Table Example</h3>
              <p className="text-sm text-gray-500 text-[12px]">
                You can download the attached example and use them as a starting
                point for your own file.
              </p>
            </div>
          </div>
          <div
            className="flex items-center justify-center gap-2 w-1/2 border-2 border-[#B3BEBE] rounded-xl p-2 bg-white cursor-pointer"
            onClick={handleDownload}
          >
            <img src={download} alt="Download" />
            <button className="text-sm text-black hover:text-gray-800">
              Download XLSX
            </button>
          </div>
        </div>
        <div className="flex justify-end gap-3">
          <button
            onClick={toggleBulkUploadModal}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 border-2 border-[#B3BEBE] rounded-lg"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
            disabled={!selectedFile}
            onClick={handleSubmit}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
BulkUploadModal.propTypes = {
  toggleBulkUploadModal: PropTypes.func.isRequired, // Function to toggle the modal
  setFileData: PropTypes.func.isRequired, // Function to set file data
  setIsLoading: PropTypes.func.isRequired, // Function to set loading state
  toggleCongratulationsModal: PropTypes.func.isRequired, // Function to toggle congratulatory modal
};
export default BulkUploadModal;
