import React, { useContext, useEffect, useState } from 'react'
import ListeRecrues from '../components/ListeRecrues'
import { RecrureContext } from '../store/Recrures-Context'
import { Recrues } from './Recrues'

export default function AllRecrues() {
  const recrueCtx = useContext(RecrureContext)

  const [tabRecrues, settabRecrues] = useState(recrueCtx?.recrues)
  const [saveTab, setsaveTab] = useState(recrueCtx?.recrues)
  
  useEffect(()=>{
    settabRecrues(saveTab)
},[saveTab,tabRecrues])

  return (
    <div>
      <hr />
      <div className="container">
        <div className="row">
          <div className=" table-responsive">
            <h1 classname="text-center">Liste des recrues </h1>
            <hr />
            <ListeRecrues tabRecrues={tabRecrues}/>
            </div>
        </div>
      </div></div>

  )
}
