import imag from "./images.jsx";
import alu from "./alumni.jsx";
import { Carousel } from "flowbite-react";

function App() {
  return (
    <div>
      <div className="bg-zinc-900 w-5/6 rounded-[64px] mx-auto my-4 p-4 justify-evenly">
        <h1 className=" text-white text-center text-5xl font-bold">Our Team</h1>
        <Carousel>
        {imag.map((ele) => {
          return (
            <>
            <div className="rounded-[18px] bg-white m-20 w-[525px] p-8 ">
              <div className="container mx-auto gap-1">
                <img
                  src={ele.img}
                  alt="this is image"
                  className="h-20 w-20 rounded-full"
                ></img>
                <div>
                  <h2>
                    <strong>{ele.name}</strong>
                  </h2>
                  <p>{ele.desig}</p>
                  <p>{ele.desc}</p>
                </div>
              </div>
            </div>
            
            </>
          );
        })}</Carousel>
      </div>
      <div className="bg-zinc-900 w-5/6 h-1/2 rounded-[64px] mx-auto my-4 p-4">
        <div className=" text-white text-center text-5xl font-bold">
          our alumni
        </div>
        <Carousel>
        {alu.map((ele) => {
          return (
            <>
              <div className="rounded-[18px] bg-white m-20 w-1/3 p-8">
                <img
                  src={ele.img}
                  alt="this is image"
                  className="h-20 w-20 rounded-full"
                ></img>
                <p>{ele.name}</p>
                <p>{ele.desig}</p>
                <p>{ele.desc}</p>
              </div>
            </>
          );
        })}</Carousel>
      </div>
    </div>
  );
}

export default App;
