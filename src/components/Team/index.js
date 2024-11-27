import Member from "../Member"
import hexToRgba from "hex-to-rgba"
import "./Team.css"

const Team = (props)=>{
    const {primaryColor, titulo,id}= props.data
    const {members, deleteMember,updateColor} = props

    return <>
    {
        members.length > 0 &&   
        <section className="team" style={{ backgroundColor:hexToRgba(primaryColor,0.3) }}>
            <input type="color"
                className="colorpicker" 
                value={primaryColor}
                onChange={(e)=>{
                    updateColor(e.target.value,id)
                }}
            />
            <h3 style={{ borderColor:primaryColor }}>{titulo}</h3>
            <div className="members">
                {members.map((member,index)=><Member 
                    data={member} 
                    key={index}
                    primaryColor={primaryColor}
                    deleteMember={deleteMember}
                />)}
            </div>
        </section>
    }
  </>
}

export default Team