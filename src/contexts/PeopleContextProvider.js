import React,{useState,createContext} from 'react';
import PeopleData from '../data/people.json';

export const PeopleContext = createContext(); 

const PeopleContextProvider = (props) => {
    const [data] = useState(PeopleData); // get json data 
    
    return(
        <PeopleContext.Provider value={{data /*pass whichever variable or method you need as props */}}>
            {props.children}
        </PeopleContext.Provider>
    )
}
export default PeopleContextProvider;