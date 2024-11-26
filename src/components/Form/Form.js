import TextFild from "../TextField"
import "./Form.css"
import OptionList from "../OptionList"
import Button from "../Button"
import { useState } from "react"

const Form = (props)=>{

    const [nombre, setNombre] = useState("")
    const [puesto,setPuesto] = useState("")
    const [foto,setFoto] = useState("")
    const [equipo,setEquipo] = useState("")
    const {addMember} = props 

    const sendData = (e)=>{
        e.preventDefault()
        let data = {
            nombre,
            puesto,
            foto,
            equipo
        }

        addMember(data)

    }

    return (
        <section  className="form">
           <form onSubmit={sendData}>
            <h2>Rellena este formulario</h2>
           <TextFild title="Nombre" placeholder="Ingresar nombre" required value={nombre} setValue={setNombre} ></TextFild>
           <TextFild title="Puesto" placeholder="Ingresar puesto" required value={puesto} setValue={setPuesto} ></TextFild>
           <TextFild title="Foto" placeholder="Ingresar enlace de foto" required value={foto} setValue={setFoto} ></TextFild>
           <OptionList value={equipo} setValue={setEquipo} teams={props.teams}/>
           <Button text="Crear"></Button>
           </form>
        </section>
    )
}

export default Form