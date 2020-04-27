import React from 'react';
import {VictoryPie} from "victory";
import {Heading} from 'evergreen-ui';
const UserDetails = ({week}) => {
    //This component renders a  pie chart based on selected user's login activity.
    return(
        <div className="graphs">
            
            <Heading size={800}>Average weekly activity</Heading>
            <VictoryPie
                colorScale={["#084B8A", "#00783E", "#66788A", "#EFBB35","#234361","#008f68", "#6DB65B"]}
                data={[
                    { x: "Mon", y: week.Mon },
                    { x: "Tue", y: week.Tue},
                    { x: "Wed", y: week.Wed },
                    { x: "Thu", y: week.Thu },
                    { x: "Fri", y: week.Fri },
                    { x: "Sat", y: week.Sat },
                    { x: "Sun", y: week.Sun }
                    ]}
                    />
        </div>
    )
}
export default UserDetails;