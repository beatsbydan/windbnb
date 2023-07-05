import {BiSolidStar} from 'react-icons/bi'
import './Stay.css'
const Stay = (props) => {
    return ( 
        <li className="stay">
            <img className="background" src={props.stay.photo} alt=''></img>
            <div className="midBlock">
                <div className="myDesc">
                    {props.stay.superHost && <div className="superHost">
                            <small>SUPER HOST</small>
                        </div>
                    }
                    <small className='myType'>{props.stay.type} </small>
                    {props.stay.beds !== null && <small className='beds'>. {props.stay.beds} beds</small>}    
                </div>
                <div className="rating">
                    <BiSolidStar color='#EB5757' size={15}/>
                    <small>{props.stay.rating}</small>
                </div>
            </div>
            <small className="desc">{props.stay.title}</small>
        </li>
    );
}
export default Stay;