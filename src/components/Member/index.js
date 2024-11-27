import "./Member.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

const Member = (props) => {
    const {foto,nombre,puesto,id,fav} = props.data
    const {primaryColor, deleteMember,likeMember} = props
    
    return (
        <div className="member">
            <AiFillCloseCircle className="delete" onClick={() => deleteMember(id)}/>
            <div className="header" style={{ backgroundColor: primaryColor}}>
                <img src={foto} alt="Foto del colaborador"></img>
            </div>
            <div className="info">
                <h4>{nombre}</h4>
                <h5>{puesto}</h5>
                { fav ? <AiFillHeart className = "like" color = "red" onClick = { () => likeMember(id) }/>
                    :<AiOutlineHeart  className = "like" onClick = { () => likeMember(id) }/>
                }

            </div>
        </div>
    )
}

export default Member