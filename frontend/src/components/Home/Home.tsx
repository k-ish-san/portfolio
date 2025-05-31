import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen light:bg-gray-100 dark:bg-black">
      <div className="text-5xl font-bold dark:text-white light:text-gray-800 mb-4">
        <Typewriter
          options={{
            strings: [
              "Software Developer",
              "Frontend Developer",
              "MERN Stack Developer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </div>
  );
}

export default Home;
