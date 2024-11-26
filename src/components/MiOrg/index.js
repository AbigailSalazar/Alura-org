//import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {   

    return (
        <section className="orgSection">
            <h3 className="title">Mi Organización</h3>
            <img onClick={props.showForm} src="/img/add.png" alt="add"></img>
        </section>
    )
}

export default MiOrg