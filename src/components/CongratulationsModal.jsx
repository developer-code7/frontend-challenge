import PropTypes from "prop-types";
import { CircleCheck } from "lucide-react";
import Confetti from "react-confetti";
const CongratulationsModal = ({ toggleCongratulationsModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-xl w-[480px] p-8 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Confetti
            width={480}
            height={400}
            numberOfPieces={300}
            recycle={false}
          />
        </div>
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100">
          <CircleCheck size={28} color="green" strokeWidth={1.5} />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Congrats! You have successfully added all your employees!
        </h2>
        <p className="text-gray-600 mb-8">
          Would you like to generate payroll?
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={toggleCongratulationsModal}
            className="px-6 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            I will do it later
          </button>
          <button
            onClick={toggleCongratulationsModal}
            className="px-6 py-2.5 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
          >
            Generate Payroll
          </button>
        </div>
      </div>
    </div>
  );
};

CongratulationsModal.propTypes = {
  toggleCongratulationsModal: PropTypes.func.isRequired,
};

export default CongratulationsModal;
