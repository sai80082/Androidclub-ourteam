import imag from "./images.jsx";
import alu from "./alumni.jsx";
function App() {
  return (
    <div>
      <div className="bg-zinc-900">
      <h1 className="text-xl text-white" >Our Team</h1>
        {imag.map((ele) => {
          return (
            <div className="rounded-md bg-white m-20 w-40">
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

      <div className="text-xl">our alumni</div>
      {alu.map((ele) => {
        return (
          <>
            <div className="ccontainer mx-auto grid grid-cols-2 gap-1">
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
  );
}

export default App;
