export default function AirthmaticButton(props){
    const btnArr = ["-","+","*","/"]
    return(
        <>
         {
             btnArr.map((v,i)=>{
                return(
                    <div key={i} > 
                         <button className="m-1" name={v} onClick={(e)=>props.handle(e)}>{v}</button>
                    </div>
                )
             })
         }
        </>
    )
}
