import React,{useContext, useState,useEffect} from 'react';
import '../index.css';
import LoginHistory from './LoginHistory';
import {useParams} from 'react-router-dom';
import { PeopleContext } from '../contexts/PeopleContextProvider';
import PersonalInfo from './PersonalInfo';
import UserDetails from './UserDetails';
import {Spinner} from 'evergreen-ui';

const Accaunt = () => {
    //Display data for individual user.
    const {data} = useContext(PeopleContext);// get data from context
    const {_id} = useParams(); // get url parameter :_id
    const user = data.find(person=>person.id === Number(_id)); // find the clicked user 
    let logins = user.logins;
    const [week,setWeeks] = useState(); // week is an object with values like Mon:13, Tue:5 and etc. set week inside useEffect;
    
      useEffect(()=>{
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let obj={
            byWeek:{}
          }
          logins.forEach(login=>{
            const date = new Date(login.date) 
            const day = days[date.getDay()] // get if Mon or Tue etc
            obj.byWeek[day] ? obj.byWeek[day]++ : obj.byWeek[day] = 1;
          })
          setWeeks(obj.byWeek);
    },[logins]); // run again only if logins array gets changed
    
    const userDetails = week !== undefined ? <UserDetails week={week}/> : <Spinner />
    
    return(
        <div className="user-info-component">
           <div id="contact-details">
           <PersonalInfo user = {user} />
           <LoginHistory user = {user} />
           {userDetails}
           </div>
        </div>
    )
}
export default Accaunt;