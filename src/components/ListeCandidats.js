import React, { useContext, useState } from 'react'
import { RecrureContext } from '../store/Recrures-Context';
import AlerteDelete from './AlerteDelete'

export default function ListeCandidats({ tabCandidat }) {
    
    const [id,setid ] = useState(null)
    const recruresCtx = useContext(RecrureContext)
    const [tabRecrues, settabRecrues] = useState(recruresCtx?.recrues)
    
    const addRecrure = (items) => {
        tabRecrues.push(items)
        localStorage.setItem("recrues",JSON.stringify(tabRecrues))
        console.log(tabRecrues);
    }

    return (
        <div className="col table-responsive">
            <table className="table table-hover table-borderless pt-2 align-middle text-center justify-content-center ">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Age</th>
                        <th scope="col">Profession</th>
                        <th scope="col">E-Mail</th>
                        <th scope="col">Tel</th>
                        <th scope="col">Avatar</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {tabCandidat?.map((items, keys) => (
                        <tr>
                            <th scope="row">{keys + 1}</th>
                            <td>{items.nom}</td>
                            <td>{items.prenom}</td>
                            <td>{items.age}</td>
                            <td>{items.profession}</td>
                            <td>{items.email}</td>
                            <td>{items.tel}</td>
                            <td><img src={items.avatar} alt="avatar" style={{ height: '80px' }} /></td>
                            <td>
                                <div className="btn-group mr-2" role="group" aria-label="Second group">
                                    <a href={"/candidats/view/"+keys} className="btn btn-warning me-1 rounded-circle text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg>
                                    </a>
                                    <a className="btn btn-danger me-2 rounded-circle text-white" role="button"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setid(keys)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>

                                    </a>
                                    <a  href={"/candidats/edit/"+keys} className="btn btn-success rounded-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                        </svg>
                                    </a>
                                    <button className="btn btn-primary ms-1 rounded-circle  text-white" onClick={()=>addRecrure(items)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-person-plus" viewBox="0 0 16 16">
                                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                        </svg>
                                    </button>
                                </div>


                            </td>

                        </tr>
                    ))}

                </tbody>
                <AlerteDelete id={id} setid={setid}/>
            </table>
        </div>

    )
}
