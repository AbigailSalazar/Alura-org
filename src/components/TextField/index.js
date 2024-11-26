import "./TextField.css"

const TextFild=(props)=>{
    const placeholderModif=`${props.placeholder}...`
   
    const setChanges=(e)=>{
        props.setValue(e.target.value)
    }
   return <div className="text-field">
        <label>{props.title}</label> 
        <input 
        type="text"
        name={props.title}
        placeholder={placeholderModif}
        required={props.required}
        value={props.value}
        onChange={setChanges}/>
    </div>
}

export default TextFild