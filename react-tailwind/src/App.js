import "./App.css";
import arf from "../src/IMG/arf.jpg";
import arf2 from "../src/IMG/arf.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function App() {
  return (
    <div className="w-auto mx-auto">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl font-display">
              เมื่อไหร่เราตะได้ฉลอง
            </p>
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500 font-display">
              Start building for free, then add a site plan to go live. Account
              plans unlock additional features.
            </p>
            <div className="gap-8 items-center">
              <button className="border-2 w-28 h-10 rounded-lg bg-purple-400 text-white font-bold hover:bg-blue-500 mt-5 hover:-translate-y-1 transition ease-in-out delay-150 hover:scale-110 ">
                test
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={arf} className='mx-auto my-10 h-auto w-auto border-solid border-black border-2 rounded-md' /> */}
      <Carousel
        showThumbs={false}
        autoPlay={true}
        className="mx-7  h-auto w-auto border-solid border-black border-2 rounded-md"
      >
        <div className="">
          <img src={arf} />
        </div>
        <div>
          <img src={arf2} />
        </div>
      </Carousel>
    </div>
  );
}

export default App;
