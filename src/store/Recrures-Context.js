import { Recrues } from "../views/Recrues";

const { createContext, useState } = require("react");

export const RecrureContext = createContext(
    {
        recrues: localStorage.getItem("recrues")!==null || undefined ?  JSON.parse(localStorage.getItem("recrues")) :  JSON.parse(localStorage.setItem("recrues",(JSON.stringify(Recrues)))),   
    }
)
function RecruresContextProvider(props) {
    const [tabRecrues, setTabRecrues] = useState(localStorage.getItem("recrues")!==undefined ?   JSON.parse(localStorage.getItem("recrues")) : JSON.parse(localStorage.setItem("recrues",(JSON.stringify(Recrues)))));

  
    const context = {
        recrues: tabRecrues,
    }

    return (
        <RecrureContext.Provider value={context}>
            {props.children}
        </RecrureContext.Provider>
    )
}
export default RecruresContextProvider