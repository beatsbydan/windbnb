import { useReducer, useState } from "react";
import FilterContext from "./FilterContext";

const FilterContextProvider = (props) => {
    const defaultItems = {
        location: '',
        guests: 0,
        adults:0,
        children:0
    }
    const bnbReducer = (state, action) => {
        if(action.type === "ADD_ADULTS"){
            const newAdults = state.adults + 1
            const newGuests = state.children + newAdults
            return{
                location: state.location,
                guests: newGuests,
                children: state.children,
                adults: newAdults
            }
        }
        if(action.type === "REMOVE_ADULTS"){
            let newAdults = state.adults - 1
            if(state.adults === 0){
                newAdults = 0
            }
            const newGuests = state.children + newAdults
            return{
                location: state.location,
                guests: newGuests,
                children: state.children,
                adults: newAdults
            }
        }
        if(action.type === "ADD_CHILDREN"){
            const newChildren = state.children + 1
            const newGuests = state.adults + newChildren
            return{
                location: state.location,
                guests: newGuests,
                adults: state.adults,
                children: newChildren
            }
        }
        if(action.type === "REMOVE_CHILDREN"){
            let newChildren = state.children - 1
            const newGuests = state.adults + newChildren
            if(state.children === 0){
                newChildren = 0
            }
            return{
                location: state.location,
                guests: newGuests,
                adults: state.adults,
                children: newChildren
            }
        }
        if(action.type === "ADD_LOCATION"){
            const newLocation = action.location
            return{
                location: newLocation,
                guests: state.guests,
                adults: state.adults,
                children: state.children
            }
        }
        return defaultItems;
    }
    const [details, dispatchDetails] = useReducer(bnbReducer,defaultItems)
    const [navIsOpen, setNavIsOpen] = useState(false)
    const [currentProp, setCurrentProp] = useState('')
    const openNav = () =>{
        setNavIsOpen(true)
    }
    const handleLocation = () => {
        openNav()
        setCurrentProp('location')
    }
    const handleGuest = () => {
        openNav()
        setCurrentProp('guests')
    }
    const closeNav = () => {
        setNavIsOpen(false)
        setCurrentProp('')
    }
    const addAdults = () => {
        dispatchDetails({type: 'ADD_ADULTS'})
    }
    const addChildren = () => {
        dispatchDetails({type: 'ADD_CHILDREN'})
    }
    const removeAdults = () => {
        dispatchDetails({type: 'REMOVE_ADULTS'})
    }
    const removeChildren = () => {
        dispatchDetails({type: 'REMOVE_CHILDREN'})
    }
    const handleMyLocation = (location) => {
        dispatchDetails({type: 'ADD_LOCATION', location:location})
        setCurrentProp('')
    }
    const updatedcontext = {
        currentProp: currentProp,
        navIsOpen: navIsOpen,
        details: details,
        addAdults: addAdults,
        addChildren: addChildren,
        removeAdults: removeAdults,
        removeChildren: removeChildren,
        handleMyLocation: handleMyLocation,
        openNav: openNav,
        closeNav: closeNav,
        handleGuest: handleGuest,
        handleLocation: handleLocation
    }
    return ( 
        <FilterContext.Provider value={updatedcontext}>
            {props.children}
        </FilterContext.Provider>
    );
}
export default FilterContextProvider;