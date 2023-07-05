import React from "react";

const StaysContext = React.createContext({
    isLoading: false,
    stays: [],
    filter: ()=>{},
})
export default StaysContext