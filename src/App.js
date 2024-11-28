import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import MiOrg from './components/MiOrg';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {

  const [showForm, setShowForm] = useState(false)
  const [teams, setTeams] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      primaryColor:"#57C278",
      secundaryColor:"#D9F7E9",
    },
    {
      id: uuid(),
      titulo:"Front-End",
      primaryColor:"#82CFFA",
      secundaryColor:"#E8F8FF",
    },
    {
      id: uuid(),
      titulo:"Data Science",
      primaryColor:"#A6D157",
      secundaryColor:"#F0F8E2",
    },
    {
      id: uuid(),
      titulo:"Devops",
      primaryColor:"#E06B69",
      secundaryColor:"#FDE7E8",
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      primaryColor:"#DB6EBF",
      secundaryColor:"#FAE9F5",
    },
    {
      id: uuid(),
      titulo:"Movil",
      primaryColor:"#FFBA05",
      secundaryColor:"#FFF5D9",
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestion",
      primaryColor:"#FF8A29",
      secundaryColor:"#FFEEDF",
    }])
  const [members, setMembers] = useState(
    [
      {
        id: uuid(),
        equipo: "Front-End",
        foto: "https://github.com/harlandlohora.png",
        nombre: "Harland Lohora",
        puesto: "Instructor",
        fav:false
      },
      {
        id: uuid(),
        equipo: "Programación",
        foto: "https://github.com/genesysrm.png",
        nombre: "Genesys Rondon",
        puesto: "Desarrolladora de software e instructora",
        fav:false
      },
      {
        id: uuid(),
        equipo: "UX y Diseño",
        foto: "https://github.com/JeanmarieAluraLatam.png",
        nombre: "Jeanmarie Quijada",
        puesto: "Instructora en Alura Latam",
        fav:false
      },
      {
        id: uuid(),
        equipo: "Programación",
        foto: "https://github.com/christianpva.png",
        nombre: "Christian Velasco",
        puesto: "Head de Alura e Instructor",
        fav:false,
      },
      {
        id: uuid(),
        equipo: "Innovación y Gestion",
        foto: "https://github.com/JoseDarioGonzalezCha.png",
        nombre: "Jose Gonzalez",
        puesto: "Dev FullStack",
        fav:false,
      }
  ])

  const toggleShowForm = ()=>{
    window.scroll({top:0,behavior:"smooth"})
    setShowForm(!showForm)
  }

  const deleteMember = (id)=>{
    const updatedMember = members.filter(member => member.id !== id)
    setMembers(updatedMember)
  }

 const addMember = (member) => {
  member.id = uuid()
  setMembers([...members, member])

 }

 const likeMember = (id)=>{
  const updatedMembers = members.map(member => {
    if(member.id ===id) {
      member.fav=!member.fav
    }
    return member
  })
  setMembers(updatedMembers)
 }

 const addTeam = (team) => {
  setTeams([...teams, {...team,id: uuid()}])
  console.log(teams)
 }

 const updateColor = (color,id) => {
    const updatedTeams = teams.map(team => {
      if(team.id ===id) {
        team.primaryColor = color
      }
      return team
    })
    setTeams(updatedTeams)
 }

  return (
    <div >
      <Header/>
      <MiOrg showForm={toggleShowForm}></MiOrg>
      {showForm&& <Form 
        teams={teams.map((team)=>team.titulo)}
        addMember={addMember}
        addTeam={addTeam}
      />}
      {
        teams.map((team) => <Team 
          data={team}
          key={team.id}
          members={members.filter(member=>member.equipo===team.titulo)}
          deleteMember={deleteMember}
          updateColor={updateColor}
          likeMember={likeMember}
        ></Team>)
      }
      <Footer/>
    </div>
  );
}

export default App;
