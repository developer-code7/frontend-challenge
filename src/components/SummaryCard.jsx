const SummaryCard = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr] gap-6">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center mb-6">
          <div className="flex flex-col ">
            <h3 className="text-sm font-medium text-gray-500 mb-4">
              Nationality
            </h3>
            <div>
              <p className="text-3xl font-semibold text-gray-900">25</p>
              <p className="text-sm text-gray-500">Singaporeans</p>
            </div>
          </div>
          <div className="w-24 h-24 ml-auto">
            <div className="w-full h-full rounded-full border-4 border-teal-500 border-l-yellow-400 border-t-purple-400 border-r-gray-200"></div>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-1 h-3  bg-teal-500 rounded-full mr-2"></div>
                <span className="text-[12px]">25 Singaporean</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-1 h-3 bg-yellow-400 rounded-full mr-2"></div>
                <span className="text-[12px]">10 PR</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="w-1 h-3 bg-purple-400 rounded-full mr-2"></div>
                <span className="text-[12px]">10 Foreigner</span>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-3 bg-[#B3BEBE] rounded-full mr-2"></div>
                <span className="text-[12px]">6 Foreigner</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-sm font-medium text-gray-500 mb-4">
          Employment Type
        </h3>
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-3xl font-semibold text-gray-900">13</p>
            <p className="text-sm text-gray-500">Full Timers</p>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full ">
          <div className="w-[30%]  h-3 bg-teal-500 rounded-full"></div>

          <div className="w-[40%] h-3 bg-yellow-400 rounded-full"></div>

          <div className="w-[15%] h-3 bg-purple-400 rounded-full"></div>
          <div className="w-[15%] h-3 bg-gray-300 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-1 h-3  bg-teal-500 rounded-full mr-2"></div>
              <span className="text-[12px]">25 Singaporean</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-1 h-3 bg-yellow-400 rounded-full mr-2"></div>
              <span className="text-[12px]">10 PR</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mr-2"></div>
            <span className="text-[12px]">10 Foreigner</span>
          </div>
          <div className="flex items-center ">
            <div className="w-1 h-3 bg-[#B3BEBE] rounded-full mr-2"></div>
            <span className="text-[12px]">6 Foreigner</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between ">
          <div className="flex flex-col ">
          <h3 className="text-sm font-medium text-gray-500 mb-4">
            Employee Status
          </h3>
          <div>
            <p className="text-3xl font-semibold text-gray-900">25</p>
            <p className="text-sm text-gray-500">Active Employees</p>
          </div>
          </div>
          <div className="relative w-24 h-24">
            <div className=" w-24 h-24 rounded-full border-4 border-t-teal-500 border-r-[#B3BEBE] border-b-transparent border-l-purple-500"></div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-1 h-3 bg-yellow-400 rounded-full mr-2"></div>
              <span className="text-[12px]">10 PR</span>
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-1 h-3 bg-purple-400 rounded-full mr-2"></div>
            <span className="text-[12px]">10 Foreigner</span>
          </div>
          <div className="flex items-center ">
            <div className="w-1 h-3 bg-[#B3BEBE] rounded-full mr-2"></div>
            <span className="text-[12px]">6 Foreigner</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
