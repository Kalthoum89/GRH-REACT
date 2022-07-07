import {Candidats} from '../views/Liste.js'
const { createContext, useState, useEffect } = require("react");

export const CandidatContext = createContext(
    {
        candidats: [],
        nbCandidats: 0,
        addToCandidats: () => { },
        removeFromCandidats: () => { },
        isCandidat: () => { }
    }
)

function CandidatContextProvider(props) {
    const [tabCandidats, setTabCandidats] = useState(Candidats);
    useEffect(() => {
        alert("useffect sync")
        fetch('https://fir-db-d9259-default-rtdb.firebaseio.com/Candidat.json')
            .then(res => {
                return res.json();
            })
            .then(data => {
                for (const key in data) {
                    data[key].id = key;
                    setTabCandidats((prev) => {
                        return [...prev, data[key]]
                    })
                    console.log("cands = ", data);
                }
            })
    }, []);

    function addToCandidats (candidat){
        alert("welcome to add")
        setTabCandidats((prev)=>{
            return [...prev,candidat]
        })

        fetch('https://fir-db-d9259-default-rtdb.firebaseio.com/Candidat.json', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(candidat)
          }).then(res => res.json())
          .then(res => console.log(res));
            
    }
    function removeFromCandidats (id){
        setTabCandidats(()=>{
            return tabCandidats.filter((f) => f.id !== id)
        })
    }
    function isCandidat(id) {
        return tabCandidats.some((f) => f.id === id)
    }
    const context = {
        candidats: tabCandidats,
        nbCandidats: tabCandidats?.length,
        addToCandidats: addToCandidats,
        removeFromCandidats: removeFromCandidats,
        isCandidat: isCandidat
    }
    return (
        <CandidatContext.Provider value={context}>
            {props.children}
        </CandidatContext.Provider>
    )
}
export default CandidatContextProvider