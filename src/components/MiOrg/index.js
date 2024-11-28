//import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {   

    return (
        <section className="orgSection">
            <h3 className="title">Mi Organización</h3>
            
            <div className="options">
            <img className="add" onClick={props.showForm} src="/img/add.png" alt="add"></img>
            </div>
        </section>
    )
}

export default MiOrg