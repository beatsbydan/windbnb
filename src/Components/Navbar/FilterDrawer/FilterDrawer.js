import React, { useContext } from 'react';
import './FilterDrawer.css'
import {BiSearchAlt2} from 'react-icons/bi'
import Filter from './Filter/Filter';
import FilterContext from '../../../Context/FilterContext/FilterContext';
import StaysContext from '../../../Context/StaysContext/StaysContext';
const FilterDrawer = () => {
    const ctx = useContext(FilterContext)
    const staysCtx = useContext(StaysContext)
    return (
        <React.Fragment>
            <div className="filterDrawer">
                <div className='location'>
                    <div onClick={ctx.handleLocation} className="myLocation">
                        <span className={ctx.details.location === "" ?'empty':'addLocation'}>{ctx.details.location === "" ?'Add Location': `${ctx.details.location}, Finland`}</span>
                    </div>
                </div>
                <div className="guests">
                    <div onClick={ctx.handleGuest} className="myGuests">
                        <span className={ctx.details.guests === 0 ?'empty':'addGuests'}>{ctx.details.guests === 0 ?'Add Guests': `${ctx.details.guests} guests`}</span>
                    </div>
                </div>
                <BiSearchAlt2 onClick={staysCtx.filter} color='#EB5757' size={25} cursor='pointer' className='mySearch'/>
            </div>
            {ctx.navIsOpen && <Filter/>}
        </React.Fragment> 
    );
}
export default FilterDrawer;