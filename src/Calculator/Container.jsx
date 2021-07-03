import React,{useState}from "react";
import NumberButton from './NumberButton'
import AirthmaticButton from "./AirthmaticButton"



export default function Container(){
    let [store, setstore] = useState("")
 
    function handleButton(e){    //handle number andairthmatic buttons
        setstore(store+=e.target.name)
        console.log("hogya", store);
    }

    function parse(str) {       //for calculating the user inpput 
        return Function(`'use strict'; return (${str})`)()
      }
      
    function handleEqualBtn(){   
        try{
            setstore(parse(store))
        }
        catch(err){
           alert(err)   // alert error if user input wrong 
        }
    }
    
    function handleClearBtn(){
        setstore("");   // when user press on clear button 
    }


    return(
        <div id="container" className="p-4">
            <div id="output-area" className="w-100 h-25 p-3 mb-2">{store}</div> 

            <div className="row"> 
                <div className="col-8 d-flex flex-wrap  justify-content-end overflow-auto padding-0">
                    <NumberButton  handle ={handleButton} />    
                </div>

                <div className="col-4 d-flex  flex-column justify-content-start padding-0">
                   <AirthmaticButton handle={handleButton} />
                </div>    
            </div>


            <div className="row">
                <div className="col-6 padding-0">
                    <div className="w-100 text-center d-flex justify-content-end">
                        <button className=" m-1 Clear_btn" onClick={handleClearBtn}>clear</button>
                    </div>
                </div>

                <div className="col-6 padding-0">
                    <div className="w-100 d-flex justify-content-start">
                    <button className=" m-1 equal_btn" onClick={handleEqualBtn}>=</button></div>
                </div>
            </div>

            <footer >
                created by zafar
            </footer>

        </div> 
    )
    
}

