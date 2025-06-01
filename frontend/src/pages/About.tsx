
import GitHubCalendar from "react-github-calendar";

const About = () => {
  return (
    <div className="light:bg-white dark:bg-black light:text-black dark:text-white">
    
      <div className="flex flex-col items-center light:bg-white dark:bg-black light:text-black dark:text-white ">
        <h1 className=" text-xl font-bold pb-5">
          Days I <span className="text-purple-400">Code</span>
        </h1>
        <div className="w-full max-w-4xl px-4">
          <GitHubCalendar
            username="k-ish-san"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
