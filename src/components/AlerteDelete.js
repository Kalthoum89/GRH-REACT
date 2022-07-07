import React, { useContext } from 'react'
import { CandidatContext } from '../store/Candidat-Context';

/**
 * MODAL DELETE CANDIDAT FROM CONTEXT
 * @param {*} param0 
 * @returns 
 */
export default function AlerteDelete({id, setid}) {

    const CandidatCtx = useContext(CandidatContext);
    var ctx = CandidatCtx?.candidats

    const removeFromTab = ()=>{
        ctx.splice(id, 1);
        localStorage.setItem("candidats",JSON.stringify(ctx))
    }
    return (
        <div className="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false"  tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog bg-white">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Êtes-vous sure ?</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                        Êtes vous sure de vouloir supprimer cet utilisateur? 
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>setid(null)}>Fermer</button>
                        <button type="button" className="btn btn-primary" onClick={()=>removeFromTab()}>Confirmer</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
