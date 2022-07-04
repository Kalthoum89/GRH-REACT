import React from 'react'

export default function FormAddCandidat() {
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label className="form-label">Nom</label>
                    <input type="text" name="nom" className="form-control" id="nom" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Prenom</label>
                    <input type="text" name="prenom" className="form-control" id="prenom" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" name="age" className="form-control" id="age" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Profession</label>
                    <input type="text" name="profession" className="form-control" id="profession" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" name="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Telephone</label>
                    <input type="tel" name="tel" className="form-control" id="tel" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Avatar</label>
                    <select name="avatar" id="pet-select">
                        <option value="https://cliply.co/wp-content/uploads/2020/08/442008110_GLANCING_AVATAR_3D_400px.gif">Male</option>
                        <option value="https://cliply.co/wp-content/uploads/2020/10/442010361_WINKING_AVATAR_3D_400px.gif">Female</option>
                        <option value="https://cliply.co/wp-content/uploads/2020/09/442008572_ARTIST_AVATAR_3D_400px.gif">Boss</option>
                    </select>
                    {/* <input type="text" ngModel name="avatar" class="form-control" id="avatar"> */}
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input type="text" name="Description" className="form-control" id="Description" />
                </div>
                <div>
                    <button type="submit" value="submit" className="btn btn-outline-success">Ajouter candidat
                    </button>
                </div>
            </form>

        </div>
    )
}
