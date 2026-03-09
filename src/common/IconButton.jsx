
function IconButton({ children }) {
  return (
    <button className="bg-gray-200 p-2 rounded-full hover:bg-gray-300 ">
      {children}
    </button>
  );
}

export default IconButton;