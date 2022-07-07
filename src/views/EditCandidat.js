import React, { useContext, useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { CandidatContext } from '../store/Candidat-Context';

export default function EditCandidat() {

    const { id } = useParams()
    const CandidatCtx = useContext(CandidatContext);
    const [loading, setloading] = useState(true)
    var ctx = CandidatCtx?.candidats[id]
    const [nom, setnom] = useState("")
    const [prenom, setprenom] = useState("")
    const [age, setage] = useState("")
    const [profession, setprofession] = useState("")
    const [email, setemail] = useState("")
    const [description, setdescription] = useState("")
    const [tel, settel] = useState("")
    const [avatar, setavatar] = useState("")
   
    useEffect(() => {
        setnom(ctx?.nom)
        setprenom( ctx?.prenom)
        setage(ctx?.age)
        setavatar(ctx?.avatar)
        settel(ctx?.tel)
        setemail(ctx?.email)
        setprofession( ctx?.profession)
        setdescription( ctx?.Description)

        setloading(false)

    }, [])
   const Navigate=useNavigate()
    const onChangeCandidat = ()=>{
        ctx= {
            nom : nom,
            prenom: prenom,
            age :age,
            Description : description,
            profession: profession,
            email : email,
            tel :tel,
            avatar :avatar
        }
        var array = [...CandidatCtx?.candidats]
        array[id] = ctx
        localStorage.setItem("candidats",JSON.stringify(array))
       Navigate('/recrues',{replace:true})
    }
    return (
        <div>
            <div className="container">
                {loading ? <h1> DATA is Loading ...  </h1> :
                    <div className="row">
                        <div className="col-6">
                            <form >
                                <div className="mb-3">
                                    <label className="form-label">Nom</label>
                                    <input type="text" name="nom" className="form-control" id="nom" value={nom} onChange={(e)=>setnom(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Prenom</label>
                                    <input type="text" name="prenom" className="form-control" id="prenom" value={prenom} onChange={(e)=>setprenom(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Age</label>
                                    <input type="number" name="age" className="form-control" id="age" value={age} onChange={(e)=>setage(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Profession</label>
                                    <input type="text" name="profession" className="form-control" id="profession" value={profession} onChange={(e)=>setprofession(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" name="email" className="form-control" id="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Telephone</label>
                                    <input type="tel" name="tel" className="form-control" id="tel" value={tel} onChange={(e)=>settel(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Avatar</label>
                                    <select name="pets" id="pet-select" value={avatar} onChange={(e)=>setavatar(e.target.value)}>
                                        <option selected value="https://cliply.co/wp-content/uploads/2020/08/442008110_GLANCING_AVATAR_3D_400px.gif">Male</option>
                                        <option value="https://cliply.co/wp-content/uploads/2020/10/442010361_WINKING_AVATAR_3D_400px.gif">Female</option>
                                        <option value="https://cliply.co/wp-content/uploads/2020/09/442008572_ARTIST_AVATAR_3D_400px.gif">Boss</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <input type="text" name="Description" className="form-control" id="Description" value={description} onChange={(e)=>setdescription(e.target.value)}/>
                                </div>
                                <div>
                                    <button type="button" className="btn btn-outline-success" onClick={()=>onChangeCandidat()}>modifier candidat
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div >}
            </div >

        </div >

    )
}
