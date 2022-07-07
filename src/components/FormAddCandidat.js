import { useContext } from 'react';
import { useRef } from 'react';
import { CandidatContext } from '../store/Candidat-Context';

export default function FormAddCandidat({saveTab,setsaveTab}) {

    const refNom = useRef("")
    const refprenom = useRef("")
    const refprofession = useRef("")
    const refAge = useRef("")
    const refEmail = useRef("")
    const refTel= useRef("")
    const refAvatar= useRef("")
    const refDescription = useRef("")
    const CandidatCtx = useContext(CandidatContext);
  
    function submitHandler(event) {
        alert("handing")
        event.preventDefault();
        let newCandidat =
        {
            nom: refNom.current.value,
            prenom: refprenom.current.value,
            profession: refprofession.current.value,
            age: refAge.current.value,
            email: refEmail.current.value,
            tel: refTel.current.value,
            avatar: refAvatar.current.value,
            description: refDescription.current.value,
            
        };
        CandidatCtx.addToCandidats(newCandidat)
        var ctx = CandidatCtx?.candidats
        ctx.push(newCandidat)
        localStorage.setItem("candidats",JSON.stringify(ctx))
        setsaveTab(ctx)

    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Nom</label>
                    <input type="text" className="form-control" ref={refNom}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Prenom</label>
                    <input type="text" name="prenom" className="form-control" id="prenom"ref={refprenom} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" name="age" className="form-control" id="age" ref={refAge}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Profession</label>
                    <input type="text" name="profession" className="form-control" id="profession" ref={refprofession}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email"ref={refEmail} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Telephone</label>
                    <input type="tel" name="tel" className="form-control" id="tel"ref={refTel} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Avatar</label>
                    <select name="avatar" id="pet-select" ref={refAvatar}>
                        <option value="https://cliply.co/wp-content/uploads/2020/08/442008110_GLANCING_AVATAR_3D_400px.gif">Male</option>
                        <option value="https://cliply.co/wp-content/uploads/2020/10/442010361_WINKING_AVATAR_3D_400px.gif">Female</option>
                        <option value="https://cliply.co/wp-content/uploads/2020/09/442008572_ARTIST_AVATAR_3D_400px.gif">Boss</option>
                    </select>
                    {/* <input type="text" ngModel name="avatar" class="form-control" id="avatar"> */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" ref={refDescription} name="Description" className="form-control" id="Description" />
                </div>
                <div>
                    <button type="submit" className="btn btn-outline-success">Ajouter candidat
                    </button>
                </div>
            </form>

        </div>
    )
}
