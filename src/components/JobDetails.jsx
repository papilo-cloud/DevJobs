
import { useContext } from "react"
// import { GlobalContext } from "./context/UserContext"
import { GlobalContext } from './context/UserContext'
import datas from '../data.json'
import { useParams } from "react-router-dom"


const JobDetails = () => {
    const {theme} = useContext(GlobalContext)

     function getId(number) {
        return datas.find(
          num => num.id === number
        );
      }

    let params = useParams()
    let nums = getId(parseInt(params.id, 10))
    console.log(nums.id);

  return (
    <div className={theme ? 'job_details darkss_theme':'job_details'}>
        <div className="top">
            <div className="details">
                <div className="img" style={{ backgroundColor: nums.logoBackground}}>
                    <img src={nums.logo} alt="Hello" />
                </div>
                <div className="txt">
                    <h2>{nums.company}</h2>
                    <span>{nums.company}.com</span>
                </div>
            </div>
            <div className="btnn">
                <button>Company Site</button>
            </div>
        </div>

        <div className="msg">
            <div className="msg_txt">
                <div className="txt">
                    <p>{nums.postedAt}<span></span>{nums.contract}</p>
                    <h3>{nums.position}</h3>
                    <p className="region">{nums.location}</p>
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
                <p>{nums.requirements.content}</p>
                <ul>
                    {nums.requirements.items.map(item => <li key={item}>{item}</li> )}
                </ul>
                <h4>What You Will Do</h4>
                <p>{nums.role.content}</p>
                <ul>
                    {nums.role.items.map(item => <li key={item}>{item}</li> )}
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
                <h3>{nums.position}</h3>
                <span>{nums.company}</span>
            </div>
            <div className="button">
                <button>Apply Now</button>
            </div>
        </div>
    </div>
  )
}

export default JobDetails