import React from 'react';
import {Avatar} from 'evergreen-ui';
import Moment from 'react-moment';

const PersonalInfo = ({user}) => {
    // This component renders >>> avatar , name , last name city info etc. 
    const city = user.city !== null ? user.city : ' N/A';
    const state = user.state !== null ? user.state : ' N/A';
    return(
        <div className='personal-info-component'>
            <div className="personal-info">
                <Avatar name={`${user.first_name} ${user.last_name}`} size={200} />
                <h1 className="user-name">{`${user.first_name} ${user.last_name}`}</h1>
            </div>
                <p><span className="prop">City:</span>{city}</p>
                <p><span className="prop">State:</span>{state}</p>
                <p><span className="prop">Safe email:</span> {user.safe_email}</p>
                <p><span className="prop">Email:</span> {user.email}</p>
                <p><span className="prop">Last activity:</span> <Moment date={user.logins[user.logins.length-1].date} durationFromNow/> ago</p>
        </div>
    )
}
export default PersonalInfo;