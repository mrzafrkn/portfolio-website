import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
      <div className=" text-white flex justify-between items-center h-16 max-w-[1240px] mx-auto">
        <h1 className="w-full text-3xl font-bold ml-4">fk</h1>
        <ul className="flex max-sm:hidden">
          <li className="p-2">
            <NavLink className="p-2" to="/">
              Home
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink className="p-2" to="/about">
              About
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink to="https://www.github.com/mrzafrkn" target="blank">
              GitHub
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="https://www.linkedin.com/in/mirzafkalkan/"
              target="blank"
            >
              LinkedIn
            </NavLink>
          </li>
        </ul>
        <div className="block sm:hidden" onClick={() => handleMenuClick()}>
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
          <li className="p-3 border-y-2">
            <NavLink className="p-2" onClick={() => handleMenuClick()} to="/">
              Home
            </NavLink>
          </li>
          <li className="p-3 border-b-2">
            <NavLink
              className="p-2"
              onClick={() => handleMenuClick()}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="p-3 border-b-2">
            <NavLink
              onClick={() => handleMenuClick()}
              to="https://www.github.com/mrzafrkn"
              target="blank"
            >
              GitHub
            </NavLink>
          </li>
          <li className="p-3 border-b-2">
            <NavLink
              to="https://www.linkedin.com/in/mirzafkalkan/"
              target="blank"
            >
              LinkedIn
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
