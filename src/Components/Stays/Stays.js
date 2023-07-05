import { useContext } from 'react';
import './Stays.css'
import StaysContext from '../../Context/StaysContext/StaysContext';
import Stay from './Stay/Stay';
const Stays = () => {
    const ctx = useContext(StaysContext)
    return ( 
        <section className='stays'>
            <div className="top">
                <h3>Stays in Finland</h3>
                <p>12+ stays</p>
            </div>
            <div className="myStays">
                {   
                    ctx.isLoading ? <h2 className='errorMsg'>Loading...</h2> : !ctx.isLoading && ctx.stays.length > 0 ?<ul className='staysList'>
                        {ctx.stays.map(stay=>{
                            return(
                                <Stay key={stay.id} stay={stay}/> 
                            )
                        })}
                    </ul>:
                    <h2 className='errorMsg'>Doesn't exist in Finland</h2>
                }
            </div>
        </section>
    );
}
export default Stays;