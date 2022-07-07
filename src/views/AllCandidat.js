import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import AddCandidat from '../components/AddCandidat'
import FormAddCandidat from '../components/FormAddCandidat'
import ListeCandidats from '../components/ListeCandidats'
import { CandidatContext } from '../store/Candidat-Context'

export default function AllCandidat() {
    const candi = useContext(CandidatContext)
    const [saveTab, setsaveTab] = useState(candi?.candidats)
    const [tabCandidat, settabCandidat] = useState(candi?.candidats)
    const [show, setshow] = useState(false) //SHOW FORM ON CLICK 


    useEffect(()=>{
        settabCandidat(candi.ListeCandidats)
    },[saveTab,tabCandidat])

    return (
        <div>
            <AddCandidat setshow={setshow} show={show}/>
            {show && <FormAddCandidat setsaveTab={setsaveTab} saveTab={saveTab}/>}
            <div class="row">
                <ListeCandidats  tabCandidat={tabCandidat} />
            </div>

        </div>

    )
}
