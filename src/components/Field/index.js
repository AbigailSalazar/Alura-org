import "./Field.css"

const Field=(props)=>{
    const placeholderModif=`${props.placeholder}...`
    const {type = "text"} = props
   
    const setChanges=(e)=>{
        props.setValue(e.target.value)
    }
   return <div className="field">
        <label>{props.title}</label> 
        <input 
        type={type}
        name={props.title}
        placeholder={placeholderModif}
        required={props.required}
        value={props.value}
        onChange={setChanges}/>
    </div>
}

export default Field