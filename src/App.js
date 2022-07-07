import { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Layout1 from './components/Layout1'
import Login from './components/Login'
import { LoginContext } from './store/Login-Context'
import AllCandidat from './views/AllCandidat'
import AllRecrues from './views/AllRecrues'
import DetailsCandidats from './views/DetailsCandidats'
import EditCandidat from './views/EditCandidat'
import EditRecrure from './views/EditRecrure'

function App() {
  const LogCtx = useContext(LoginContext)
  //console.log(LogCtx);
  if (LogCtx.isLogged)
    return (
      <Layout>
        <Routes>
          <Route path="/candidats" element={ LogCtx.isLogged ? <AllCandidat /> : <Navigate replace to="/" />}></Route>
          <Route path="/candidats/edit/:id" element={ LogCtx.isLogged ? <EditCandidat /> : <Navigate replace to="/" />}></Route>
          <Route path="/candidats/view/:id" element={ LogCtx.isLogged ? <DetailsCandidats /> : <Navigate replace to="/" />}></Route>

          <Route path="/recrues" element={<AllRecrues></AllRecrues>}></Route>
          <Route path="/recrues/:id" element={ LogCtx.isLogged ? <EditRecrure /> : <Navigate replace to="/" />}></Route>

        </Routes>

      </Layout>
    )
  else
    return (
      <Layout1>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
        </Routes>
      </Layout1>
    )
}

export default App
