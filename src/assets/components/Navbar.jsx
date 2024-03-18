import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className=" text-white flex justify-between items-center h-16 max-w-[1240px] mx-auto">
        <h1 className="w-full text-3xl font-bold ml-4">fk</h1>
        <ul className=" flex max-sm:hidden">
          <li className="p-2">Home</li>
          <li className="p-2">About</li>
          <li className="p-2">LinkedIn</li>
        </ul>
        <div
          className="block sm:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>
      </div>
      <div
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } text-white text-center`}
      >
        <ul>
          <li className="p-3">Home</li>
          <li className="p-3">About</li>
          <li className="p-3">LinkedIn</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
