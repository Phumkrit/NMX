import './App.css';
import arf from '../src/IMG/arf.jpg'
import arf2 from '../src/IMG/arf.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function App() {
  return (
    <>
      {/* <img src={arf} className='mx-auto my-10 h-auto w-auto border-solid border-black border-2 rounded-md' /> */}
      <Carousel showThumbs={false} autoPlay={true} className='mx-auto my-10 h-auto w-auto border-solid border-black border-2 rounded-md'>
        <div>
          <img src={arf} />
        </div>
        <div>
          <img src={arf2} />
        </div>
      </Carousel>
    </>
  );
}

export default App;
