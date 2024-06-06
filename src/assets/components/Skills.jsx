import ReactIcon from "../icons/react-icon.svg";
import JSIcon from "../icons/javascript-icon.svg";
import TSIcon from "../icons/typescript-icon.svg";
import HTMLIcon from "../icons/html-icon.svg";
import CssIcon from "../icons/css-icon.svg";
import TailwindIcon from "../icons/tailwind-icon.svg";
const Skills = () => {
  return (
    <div className="flex justify-center">
      <div className="flex-col mt-10 max-w-[1200px] w-full">
        <h3 className="text-3xl text-white">Skills & Technologies</h3>
        <div className="icon-container flex-col w-full mt-10">
          <ul className="first-row flex justify-evenly mb-10 ">
            <li className="text-center text-white">
              <img
                className="w-[100px] h-[100px]"
                src={ReactIcon}
                alt="React Icon"
              />
              <span>ReactJS</span>
            </li>
            <li className="text-center text-white">
              <img
                className="w-[100px] h-[100px]"
                src={JSIcon}
                alt="JavaScript Icon"
              />
              <span>JavaScript</span>
            </li>
            <li className="text-center text-white">
              <img
                className="w-[100px] h-[100px]"
                src={TSIcon}
                alt="TypeScript Icon"
              />
              <span>TypeScript</span>
            </li>
          </ul>
          <ul className="second-row flex justify-evenly mb-10">
            <li className="text-center text-white">
              <img
                className="w-[100px] h-[100px]"
                src={HTMLIcon}
                alt="HTML Icon"
              />
              <span>HTML</span>
            </li>
            <li className="text-center text-white">
              <img
                className="w-[100px] h-[100px]"
                src={CssIcon}
                alt="CSS Icon"
              />
              <span>CSS</span>
            </li>
            <li className="text-center text-white">
              <img
                className="w-[100px] h-[100px]"
                src={TailwindIcon}
                alt="Tailwind Icon"
              />
              <span>Tailwind</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
