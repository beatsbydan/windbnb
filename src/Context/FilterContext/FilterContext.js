import React from "react";

const FilterContext = React.createContext({
    currentProp: '',
    navIsOpen: false,
    details: {},
    openNav: ()=>{},
    closeNav: ()=>{},
    handleLocation: ()=>{},
    handleGuest: ()=>{},
    addAdults: ()=>{},
    addChildren: ()=>{},
    removeAdults: ()=>{},
    removeChildren: ()=>{},
    handleMyLocation: ()=>{}
})
export default FilterContext