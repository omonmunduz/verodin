import React from 'react';
import '../index.css';
import {Table} from 'evergreen-ui';
import Moment from 'react-moment';


const LoginHistory = ({user}) => {
    // Format data with Moment and create list of login history.
    const loginHistory = user.logins.length ? (user.logins.map((item,ind)=>{
        return(
                <Table.Row key={ind}>
                    <Table.TextCell><Moment>{item.date}</Moment></Table.TextCell>
                </Table.Row>
              );
            })) : ('Data is not available') // if {user.logins} is still loading or undefined 


    return(
        <div id="login-history">
            <Table>
                <Table.Head padding={10}>
                    <strong>Login History > Total: {user.logins.length}</strong>
                </Table.Head>
                <Table.Body height={200}>
                    {loginHistory}
                </Table.Body>
            </Table>
        </div>
    )
}
export default LoginHistory;