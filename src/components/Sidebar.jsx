import {
  claim,
  employee,
  leave,
  payroll,
  more,
  home,
  dropdown,
  building,
  logo,
  money,
  notification,
} from "../assets/index.js";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 flex items-center gap-2">
        <img src={logo} alt="Logo" />
        <h1 className="text-xl font-semibold text-gray-800">kelick</h1>
      </div>

      <nav className="flex-1">
        <div className="px-4 py-2">
          <p className="text-xs font-medium text-gray-400 mb-2">MAIN</p>
          <a
            href="#"
            className="flex items-center gap-4 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <img src={home} alt="home" />
            Dashboard
          </a>
        </div>

        <div className="px-4 py-2">
          <div className="flex items-center gap-4">
            <p className="text-xs font-medium text-gray-400 mb-2">
              ORGANIZATION
            </p>
            <img src={dropdown} alt="dropdown" className="ml-auto mb-2" />
          </div>
          <div className="flex items-center gap-4 px-4 py-2 text-gray-600">
            <img src={building} alt="building" />
            Kelick
          </div>
        </div>

        <div className="px-4 py-2">
          <p className="text-xs font-medium text-gray-400 mb-2">MANAGE</p>
          <a
            href="#"
            className="flex items-center gap-4 px-4 py-2 text-teal-600 bg-teal-50 rounded-lg"
          >
            <img src={employee} alt="Employee" />
            Employees
          </a>
          <a
            href="#"
            className="flex items-center  gap-4 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <img src={payroll} alt="Payroll" />
            Payroll
          </a>
          <a
            href="#"
            className="flex items-center gap-4 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <img src={leave} alt="Leave" />
            Leaves
          </a>
          <a
            href="#"
            className="flex items-center  gap-4 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <img src={claim} alt="Claim" />
            Claims
          </a>
          <a
            href="#"
            className="flex items-center gap-4 px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100"
          >
            <img src={more} alt="More" />
            More
          </a>
        </div>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <img src={money} alt="" />
            <span className="text-sm font-medium text-gray-600 mr-auto ml-1">
              Free Plan
            </span>
            <span className="text-xs text-gray-400">1/10 Employees</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full my-7">
            <div className="h-2 bg-teal-500 rounded-full w-[10%]"></div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <img src={notification} alt="notification" />
          <span className="text-normal text-black ml-2">Notifications</span>
          <div className="relative ml-auto">
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
          <div>
            <p className="text-sm font-medium text-gray-800">John Doe</p>
            <p className="text-xs text-gray-500">johndoe@asure.pro</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
