import Field from "../Field"
import "./Form.css"
import OptionList from "../OptionList"
import Button from "../Button"
import { useState } from "react"

const Form = (props)=>{

    const [nombre, setNombre] = useState("")
    const [puesto,setPuesto] = useState("")
    const [foto,setFoto] = useState("")
    const [equipo,setEquipo] = useState("")
    const [titulo,setTitulo] = useState("")
    const [primaryColor,setColor] = useState("")
    const {addMember,addTeam} = props 


    const sendDataMember = (e)=>{
        e.preventDefault()
        let data = {
            nombre,
            puesto,
            foto,
            equipo
        }

        addMember(data)

    }

    const sendDataTeam = (e)=>{
        e.preventDefault()
        console.log({titulo,primaryColor})
        addTeam({titulo,primaryColor})
    }

    return (
        <section  className="form">
           <form onSubmit={sendDataMember}>
            <h2>Rellena este formulario para crear el colaborados</h2>
           <Field title="Nombre" placeholder="Ingresar nombre" required value={nombre} setValue={setNombre} ></Field>
           <Field title="Puesto" placeholder="Ingresar puesto" required value={puesto} setValue={setPuesto} ></Field>
           <Field title="Foto" placeholder="Ingresar enlace de foto" required value={foto} setValue={setFoto} ></Field>
           <OptionList value={equipo} setValue={setEquipo} teams={props.teams}/>
           <Button text="Crear"></Button>
           </form>
           <form onSubmit={sendDataTeam}>
            <h2>Rellena este formulario para crear el equipo</h2>
           <Field title="Titulo" placeholder="Ingresar titulo" required value={titulo} setValue={setTitulo} ></Field>
            <Field title="Color" type="color" value={primaryColor} setValue={setColor}></Field>
           <Button text="Crear"></Button>
           </form>
        </section>
    )
}

export default Form