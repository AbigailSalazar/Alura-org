import "./OptionList.css"

const OptionList =(props)=>{
    
    const setChange =(e)=>{ 
        props.setValue(e.target.value)
    } 
    return (
        <div className="option-list">
            <label>Equipos</label>
            <select value={props.value} onChange={setChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {props.teams.map( (equipo, index)=>{
                    return <option key={index} value={equipo}>{equipo}</option>
                } ) }
            </select>
        </div>
    )
}

export default OptionList