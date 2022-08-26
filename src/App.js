import imag from "./images.jsx";
import alu from "./alumni.jsx";
import { Carousel } from "flowbite-react";

function App() {
  return (
    <div>
      <div className="bg-zinc-900 md:w-5/6 md:rounded-[64px] mx-auto md:my-4 p-4 justify-evenly">
        <h1 className=" text-white text-center text-4xl md:text-5xl font-bold">Our Team</h1>
        <Carousel>
          {imag.map((ele) => {
            return (
              <>
                <div className="rounded-[18px] bg-white m-20 w-80 p-8 ">
                  <div className="container mx-auto gap-1">
                    <div className="flex flex-row items-center">
                      <img
                        src={ele.img}
                        alt={ele.name}
                        className="h-14 w-14 md:h-20 md:w-20 rounded-full m-4"
                      ></img>
                      <div>
                        <strong>
                          <p>{ele.name}</p>
                        </strong>
                        <p>{ele.desig}</p>
                      </div>
                    </div>
                    <p className="text-sm">{ele.desc}</p>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
      <div className=" w-5/6 h-1/2 rounded-[64px] mx-auto my-4 p-4">
        <div className=" text-black text-center text-5xl font-bold">
          our alumni
        </div>
        <Carousel leftControl="<" rightControl=">">
          {alu.map((ele) => {
            return (
              <>
                <div className="rounded-[18px] text-white bg-zinc-900 m-20 w-1/3 p-8">
                  <div className="flex flex-row items-center">
                    <img
                      src={ele.img}
                      alt={ele.name}
                      className="h-20 w-20 rounded-full m-4"
                    ></img>
                    <div>
                      <strong>
                        <p>{ele.name}</p>
                      </strong>
                      <p>{ele.desig}</p>
                    </div>
                  </div>

                  <p>{ele.desc}</p>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
