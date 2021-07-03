import React,{useState} from 'react'
import Switch from "react-switch";

function ChangeThemeButton(){
    const [darkmode, setdarkmode] = useState(true);
    const targetCssVar =  document.documentElement.style;

    if(darkmode){   //for darkmode
        targetCssVar.setProperty('--primarycolor', '#222222');
        targetCssVar.setProperty('--secondarycolor', '#263238');
        targetCssVar.setProperty('--textcolor', '#cdcfd4');
    }else{     //for light mode
        targetCssVar.setProperty('--primarycolor', '#E8F6EF');
        targetCssVar.setProperty('--secondarycolor', '#B8DFD8');
        targetCssVar.setProperty('--textcolor', '#4C4C6D');
    }
        
    return(
        <header className= "m-4">
             <div className="d-flex justify-content-end" onClick={()=>{setdarkmode(!darkmode)}}>
              <Switch checked={darkmode} />
             </div>
        </header> 
    )
}

export default ChangeThemeButton;