import React, { useState } from 'react'
import AddCandidat from '../components/AddCandidat'
import FormAddCandidat from '../components/FormAddCandidat'
import ListeCandidats from '../components/ListeCandidats'
import { Candidats } from './Liste'

export default function AllCandidat() {
    const [tabCandidat, settabCandidat] = useState(Candidats)
    const [show, setshow] = useState(false) //SHOW FORM ON CLICK 
    
    return (
        <div>
            <AddCandidat setshow={setshow} show={show}/>
            {show && <FormAddCandidat />}
            {show === true ? <FormAddCandidat /> : null }
            <div class="row">
                <ListeCandidats  tabCandidat={tabCandidat} />
            </div>

        </div>

    )
}
