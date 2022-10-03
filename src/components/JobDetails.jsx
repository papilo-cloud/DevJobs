
import { useContext } from "react"
// import { GlobalContext } from "./context/UserContext"
import { GlobalContext } from './context/UserContext'
import datas from '../data.json'


const JobDetails = () => {
    // const data = useContext(GlobalContext)
    let x = datas[14]
    console.log(x);

  return (
    
    <div className="job_details">
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

        <div className="footer">

        </div>
    </div>
  )
}

export default JobDetails