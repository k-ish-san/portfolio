
import Waves from "../components/Waves";
import Orb from "../components/Orb";




function Home()
{
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen bg-black overflow-hidden "
      style={{ zIndex: -1 }}
    >
      {localStorage.getItem("theme") === "dark" ? (
      < div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Orb
        hoverIntensity={5}
        rotateOnHover={false}
        hue={40}
        forceHoverState={true}
      />
    </div>
  ) : (

    < div className = "absolute inset-0 pointer-events-none" >
      <Waves
        lineColor="rgba(15, 25, 125, 0.8)"
        backgroundColor="rgba(255, 255, 255, 0.9)"
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
  )
}
        
    </div>
  );
}

export default Home;
