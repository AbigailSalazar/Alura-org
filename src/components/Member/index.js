import "./Member.css"

const Member = (props) => {
    const {foto,nombre,puesto} = props.data
    const {primaryColor} = props
    return (
        <div className="member">
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