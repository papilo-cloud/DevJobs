
import { useContext } from "react"
// import { GlobalContext } from "./context/UserContext"
import { GlobalContext } from './context/UserContext'
import datas from '../data.json'


const JobDetails = () => {
    const {theme} = useContext(GlobalContext)
    let x = datas[1]
    console.log(x);

  return (
    <div className={theme ? 'job_details darkss_theme':'job_details'}>
        <div className="top">
            <div className="details">
                <div className="img" style={{ backgroundColor: x.logoBackground}}>
                    <img src={x.logo} alt="Hello" />
                </div>
                <div className="txt">
                    <h2>{x.company}</h2>
                    <span>{x.company}.com</span>
                </div>
            </div>
            <div className="btnn">
                <button>Company Site</button>
            </div>
        </div>

        <div className="msg">
            <div className="msg_txt">
                <div className="txt">
                    <p>{x.postedAt}<span></span>{x.contract}</p>
                    <h3>{x.position}</h3>
                    <p className="region">{x.location}</p>
                </div>
                <div className="butn">
                    <button>Apply Now</button>
                </div>
            </div>
            <div className="msg_cont">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Libero, ullam non. Nobis odio animi doloribus expedita veniam quia,
                    omnis quisquam aut repellendus reiciendis fugiat error?
                    Incidunt ea eos qui assumenda?
                </p>
                <h4>Requirements</h4>
                <p>{x.requirements.content}</p>
                <ul>
                    {x.requirements.items.map(item => <li key={item}>{item}</li> )}
                </ul>
                <h4>What You Will Do</h4>
                <p>{x.role.content}</p>
                <ul>
                    {x.role.items.map(item => <li key={item}>{item}</li> )}
                </ul>
            </div>
        </div>

        <div className="apply">
            <h4>How To Apply</h4>
            <p> Diam volutpat commodo sed egestas egestas fringilla 
                phasellus faucibus. Ante in nibh mauris cursus mattis.
                Ac turpis egestas sed tempus. Nunc faucibus a pellentesque sit. 
                Vitae turpis massa sed elementum tempus egestas sed sed risus. 
                Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
                Mattis nunc sed blandit libero volutpat sed. Faucibus turpis in eu mi.
                Ultrices gravida dictum fusce ut placerat orci nulla. Massa sapien
                faucibus et molestie ac feugiat. Malesuada proin libero nunc consequat 
                interdum varius sit. Malesuada fames ac turpis egestas sed tempus.</p>
        </div>

        <div className="footer">
            <div className="aside">
                <h3>{x.position}</h3>
                <span>{x.company}</span>
            </div>
            <div className="button">
                <button>Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default JobDetails