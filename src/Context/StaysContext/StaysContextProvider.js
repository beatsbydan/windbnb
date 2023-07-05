import { useContext, useEffect, useState } from "react";
import StaysContext from "./StaysContext";
import axios from "axios";
import FilterContext from "../FilterContext/FilterContext";

const StaysContextProvider = (props) => {
    const [stays, setStays] = useState([])
    const [filteredStays, setFilteredStays] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const ctx = useContext(FilterContext)
    useEffect(()=>{
        axios.get('./stays.json')
        .then(res=>{
            setStays(res.data)
            setFilteredStays(res.data)
            setIsLoading(false)
        })
    },[])
    const filter = () => {
        if(ctx.details.location === "" && ctx.details.guests === 0){
            alert('Add a Location or Guests')
            return
        }
        else{
            ctx.closeNav()
            const filteredStays = stays.filter(stay=>{
                return(
                    (ctx.details.location !== '' && ctx.details.guests !== 0) ?
                        stay.city === ctx.details.location && ctx.details.guests <= stay.maxGuests:
                    (ctx.details.location === '' && ctx.details.guests !== 0) ?
                    ctx.details.guests <= stay.maxGuests :stay.city === ctx.details.location
                )
            })
            setFilteredStays([...filteredStays])
        }
    }
    const updatedContext = {
        isLoading: isLoading,
        stays: filteredStays,
        filter: filter
    }
    return ( 
        <StaysContext.Provider value={updatedContext}>
            {props.children}
        </StaysContext.Provider>
    );
}
export default StaysContextProvider;