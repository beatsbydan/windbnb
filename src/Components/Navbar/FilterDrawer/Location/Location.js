import { useContext } from 'react'
import './Location.css'
import {MdLocationOn} from 'react-icons/md'
import FilterContext from '../../../../Context/FilterContext/FilterContext'
const Location = () => {
    const ctx = useContext(FilterContext)
    const locations = [
        {
            id:1,
            place: 'Helsinki'
        },
        {
            id:2,
            place: 'Turku'
        },
        {
            id:3,
            place: 'Oulu'
        },
        {
            id:4,
            place: 'Vaasa'
        }
    ]
    return ( 
        <div className='myLocationBlock'>
            <div className={ctx.currentProp === 'location' ? "current selectLocation":"selectLocation"}>
                <div onClick={ctx.handleLocation} className="locationBlock">
                    <small>LOCATION</small>
                    <p className={ctx.details.location === "" ? 'empty myPosition' : 'myPosition'}>{ctx.details.location === '' ? 'Add location' : `${ctx.details.location}, Finland`}</p>
                </div>
                {ctx.currentProp === 'location' &&
                    <div className="locationDropDown">
                        <ul>
                            {locations.map(location=>{
                                return(
                                    <li onClick={()=>ctx.handleMyLocation(location.place)} className='locationItem' key={location.id}>
                                        <MdLocationOn color='#4F4F4F' size={25}/>
                                        <p>{location.place}, Finland</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
}
export default Location;