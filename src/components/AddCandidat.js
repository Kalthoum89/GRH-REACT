import React from 'react'

export default function AddCandidat({setshow,show}) {

  return (
    <div>
          <div classname="row">
            <div classname="col">
              <br />
              <br />
              <button type="button" className="btn btn-success" onClick={()=>setshow(!show)}>
              {show ? "Réduire" : " Ajouter un candidat"}
            </button>
          </div>
        </div>
        <hr />
      </div>
  )
}
