import "./Member.css"
import {AiFillCloseCircle} from "react-icons/ai"

const Member = (props) => {
    const {foto,nombre,puesto,id} = props.data
    const {primaryColor, deleteMember} = props
    
    return (
        <div className="member">
            <AiFillCloseCircle className="delete" onClick={() => deleteMember(id)}/>
            <div className="header" style={{ backgroundColor: primaryColor}}>
                <img src={foto} alt="Foto del colaborador"></img>
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
            </div>
        </div>
    )
}

export default Member