import imag from "./images.jsx";
import alu from "./alumni.jsx";
function App() {
  return (
    <div>
      <div className="bg-zinc-900 w-5/6 h-1/2 rounded-[64px] mx-auto my-4 p-4">
        <h1 className=" text-white text-center text-5xl font-bold">Our Team</h1>
        {imag.map((ele) => {
          return (
            <div className="rounded-[18px] bg-white m-20 w-40">
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
          );
        })}
      </div>
      <div className="bg-zinc-900 w-5/6 h-1/2 rounded-[64px] mx-auto my-4 p-4">
        <div className=" text-white text-center text-5xl font-bold">
          our alumni
        </div>
        {alu.map((ele) => {
          return (
            <>
              <div className="rounded-[18px] bg-white m-20 w-40">
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
        })}
      </div>
    </div>
  );
}

export default App;
