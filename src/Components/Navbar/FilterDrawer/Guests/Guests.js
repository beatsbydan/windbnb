import React, { useContext } from 'react';
import './Guests.css'
import FilterContext from '../../../../Context/FilterContext/FilterContext';
const Guests = () => {
    const ctx = useContext(FilterContext)
    return ( 
        <div className='myGuestsBlock'>
            <div className={ctx.currentProp === 'guests' ? "current selectGuests" : "selectGuests"}>
                <div onClick={ctx.handleGuest} className="guestsBlock">
                    <small>GUESTS</small>
                    <p className={ctx.details.guests === 0 ? " empty my-Guests" : "my-Guests"}>{ctx.details.guests === 0 ?'Add guests' : `${ctx.details.guests} guests`}</p>
                </div>
                {ctx.currentProp === 'guests' &&
                    <div className="guestsDropDown">
                        <div className="adults">
                            <h4>Adults</h4>
                            <p>Ages 13 or above</p>
                            <div className="buttonBlock">
                                <button onClick={ctx.removeAdults}>-</button>
                                <span>{ctx.details.adults}</span>
                                <button onClick={ctx.addAdults}>+</button>
                            </div>
                        </div>
                        <div className="children">
                            <h4>Children</h4>
                            <p>Ages 2-12</p>
                            <div className="buttonBlock">
                                <button onClick={ctx.removeChildren}>-</button>
                                <span>{ctx.details.children}</span>
                                <button onClick={ctx.addChildren}>+</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}
export default Guests;