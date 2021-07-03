export default function NumberButton(props){
    let NumbersBtnArr = ["7","8","9","4","5","6","1","2","3","0","00","."]
    return(
        <>
         {
             NumbersBtnArr.map((v,i)=>{
                 return(
                <div className="d-flex align-items-center" key={i}> 
                   <button  name={v} onClick={(e)=>props.handle(e)}>{v}</button> 
                </div>
                 )
             })
         }
        </>
    )
}