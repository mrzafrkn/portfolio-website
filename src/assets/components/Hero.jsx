import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className="text-white flex justify-center h-620px max-h-[620px]">
      <div className="max-w-[1200px] w-full mt-10">
        <ReactTyped
          className="text-3xl"
          strings={["Hello", "Hi", "Hey"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
        <span className="text-3xl">There 👋🏻</span>
        <p className="text-3xl">
          I'm Furkan Kalkan - web developer who loves learning and exploring
          based in Istanbul, Turkey.
        </p>
      </div>
    </div>
  );
};

export default Hero;
