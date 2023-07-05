import { useContext } from 'react';
import Guests from '../Guests/Guests';
import Location from '../Location/Location';
import './Filter.css'
import {BiSearchAlt2} from 'react-icons/bi'
import {MdClose} from 'react-icons/md'
import FilterContext from '../../../../Context/FilterContext/FilterContext';
import StaysContext from '../../../../Context/StaysContext/StaysContext';
const Filter = () => {
    const ctx = useContext(FilterContext)
    const staysCtx = useContext(StaysContext)
    return ( 
        <div className={ctx.navIsOpen ? "filter active" : ""}>
            <nav className="myFilterNav">
                <MdClose size={30} onClick={ctx.closeNav} className='close'/>
                <div className="nav">
                    <Location/>
                    <Guests/>
                    <div className="actions">
                        <button onClick={staysCtx.filter} className='myFilterBtn'>
                            <BiSearchAlt2 color='white' size={25}/>
                            Search
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Filter;
