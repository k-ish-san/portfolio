import loadingSpinner from "../assets/pre.svg";

interface LoaderProps
{
  load: boolean;
}

function Loader(props: LoaderProps) {
  return (
    <div
      className={
        props.load
          ? "fixed top-0 left-0 w-full h-full bg-black flex justify-center items-center text-white text-[2rem] z-[9999]"
          : "hidden"
      }
    >
      <img src={loadingSpinner} alt="Loading" className="w-20 h-20" />
    </div>
  );
}

export default Loader;
