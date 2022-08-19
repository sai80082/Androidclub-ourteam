import React from "react";
import imag from "./images.jsx";
import alu from "./alumni.jsx"
function Clubteam(){
    return(
        <>
        <h1 className="text-xl">Our Team</h1>
        {
            imag.map((ele)=>{
                return(
                    <>
                    <div className="container mx-auto">
                    <img src={ele.img} className="h-30 w-20">
                    </img>  <p>{ele.name}</p>
                   
                    <p>{ele.desig}</p>
                    <p>{ele.desc}</p>
                    </div>
                    </>

                )
            })
        }
        <div className="text-xl">our alumni</div>
        {
            alu.map((ele)=>{
                return(
                    <>
                    <div className="container m-auto">
                        <img src={ele.img} className="h-30 w-20"></img>
                        <p>{ele.name}</p>
                        <p>{ele.desig}</p>
                        <p>{ele.desc}</p>
                    </div>
                    </>
                )
            })
        }
        </>
    )
    }
export default Clubteam