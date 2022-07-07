import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CandidatContext } from '../store/Candidat-Context';
import '../styles/flip-card.css'

export default function DetailsCandidats() {
    const { id } = useParams()
    const CandidatCtx = useContext(CandidatContext);
    var ctx = CandidatCtx?.candidats[id]

    return (
        <div>
            <div className="container mt-5 p-5">
                <div className="row ">
                    <div className="col-12 d-flex justify-content-center align-items-center align-content-center">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={ctx?.avatar} alt="Avatar" style={{ width: 300, height: 300 }} />
                                    <h4 className="card-title font-weight-bold">{ctx?.prenom}
                                        {ctx?.nom}</h4> <p className="profession">{ctx?.age} ans</p>
                                    <hr className="bg-warning" />
                                    <p className="text-center">{ctx?.profession}</p>
                                    <p><i className="fas fa-quote-left" />{ctx?.Description}</p>
                                </div>
                                <div className="flip-card-back">
                                    <div className="main">
                                        <p className="lead">Contact</p>
                                        <hr className="bg-warning" />
                                        <i className="fa fa-phone-square text-success" aria-hidden="true" />
                                        {ctx?.tel}
                                        <hr />
                                        <a href='/candidats' className="btn  mt-3 btn-outline-success">retourner
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></div>
        </div>)

}
