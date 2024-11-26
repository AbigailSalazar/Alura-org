import Member from "../Member"
import "./Team.css"

const Team = (props)=>{
    const {primaryColor,secundaryColor, name}= props.data
    const {members} = props

    return <>
    {
        members.length > 0 &&   
        <section className="team" style={{ backgroundColor:secundaryColor }}>
            <h3 style={{ borderColor:primaryColor }}>{name}</h3>
            <div className="members">
                {members.map((member,index)=><Member 
                    data={member} 
                    key={index}
                    primaryColor={primaryColor}
                />)}
            </div>
        </section>
    }
  </>
}

export default Team