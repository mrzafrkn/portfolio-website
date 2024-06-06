import { Link } from "react-router-dom";
const Project = ({ name, desc, lang, url }) => {
  return (
    <Link to={url} target="blank">
      <div className="bg-white flex-col w-[200px] h-[100px] rounded-md border-2 border-black px-5 hover:bg-slate-300">
        <h2 className="text-xl">{name}</h2>
        <span className="text-xs">{desc}</span>
      </div>
    </Link>
  );
};

export default Project;
