// import Typewriter from "typewriter-effect";
import Waves from "../components/Waves";

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen light:bg-gray-100 dark:bg-black overflow-hidden " style={{zIndex: -1}} >
      <div className="absolute inset-0 pointer-events-none" >
        <Waves
          lineColor="violet"
          backgroundColor="rgba(255, 255, 255, 0.2)"
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>
      {/* <div className="text-5xl font-bold dark:text-white light:text-gray-800 mb-4">
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
      </div> */}
    </div>
  );
}

export default Home;
