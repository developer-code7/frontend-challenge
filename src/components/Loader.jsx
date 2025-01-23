const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-[10000] bg-gray-50 bg-opacity-75">
      <div className="w-12 h-12 border-4 border-teal-200 border-l-teal-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
