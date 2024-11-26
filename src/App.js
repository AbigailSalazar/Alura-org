import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import MiOrg from './components/MiOrg';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const [showForm, setShowForm] = useState(false)
  const [members, setMembers] = useState([])

  const toggleShowForm = ()=>{
    setShowForm(!showForm)
}

const teams = [
  {
    name:"Programación",
    primaryColor:"#57C278",
    secundaryColor:"#D9F7E9",
  },
  {
    name:"Front-End",
    primaryColor:"#82CFFA",
    secundaryColor:"#E8F8FF",
  },
  {
    name:"Data Science",
    primaryColor:"#A6D157",
    secundaryColor:"#F0F8E2",
  },
  {
    name:"Devops",
    primaryColor:"#E06B69",
    secundaryColor:"#FDE7E8",
  },
  {
    name:"UX y Diseño",
    primaryColor:"#DB6EBF",
    secundaryColor:"#FAE9F5",
  },
  {
    name:"Movil",
    primaryColor:"#FFBA05",
    secundaryColor:"#FFF5D9",
  },
  {
    name:"Innovación y Gestion",
    primaryColor:"#FF8A29",
    secundaryColor:"#FFEEDF",
  }]

 const addMember = (member) => {
  setMembers([...members, member])

 }

  return (
    <div >
      <Header/>
      {showForm&& <Form 
        teams={teams.map((team)=>team.name)}
        addMember={addMember}
      />}
      <MiOrg showForm={toggleShowForm}></MiOrg>
      {
        teams.map((team) => <Team 
          data={team}
          key={team.name}
          members={members.filter(member=>member.equipo===team.name)}
        ></Team>)
      }
      <Footer/>
    </div>
  );
}

export default App;
