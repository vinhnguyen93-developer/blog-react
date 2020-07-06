import React from "react";
import Feed from "../../components/feed";
import withLayout from "../../shared/hocs/withLayout";

const Home = (props) => {

    return (
        <div>
            <Feed 
                imageUrl="https://lh3.googleusercontent.com/proxy/TUWfAyJMZ4L18CwP6jgCnukVvzBWJaQ4EvokBPltwd0SUyZbnP59WklVHrQ56zAMOYxuRAhwN1crwaHNksLx_fO3njfaMhCjwT9NEuCqMFEiWRsidrswGafOms2ThDoK2g"
                title="Vinh Ha Long"
                createdDate="17/05/2020"
                topic="Travel"
                desc="Du lich Vinh Ha Long"
            />
            <Feed 
                imageUrl="https://lh3.googleusercontent.com/proxy/TUWfAyJMZ4L18CwP6jgCnukVvzBWJaQ4EvokBPltwd0SUyZbnP59WklVHrQ56zAMOYxuRAhwN1crwaHNksLx_fO3njfaMhCjwT9NEuCqMFEiWRsidrswGafOms2ThDoK2g"
                title="Vinh Ha Long"
                createdDate="17/05/2020"
                topic="Travel"
                desc="Du lich Vinh Ha Long"
            />
            <Feed 
                imageUrl="https://lh3.googleusercontent.com/proxy/TUWfAyJMZ4L18CwP6jgCnukVvzBWJaQ4EvokBPltwd0SUyZbnP59WklVHrQ56zAMOYxuRAhwN1crwaHNksLx_fO3njfaMhCjwT9NEuCqMFEiWRsidrswGafOms2ThDoK2g"
                title="Vinh Ha Long"
                createdDate="17/05/2020"
                topic="Travel"
                desc="Du lich Vinh Ha Long"
            />
            <Feed 
                imageUrl="https://lh3.googleusercontent.com/proxy/TUWfAyJMZ4L18CwP6jgCnukVvzBWJaQ4EvokBPltwd0SUyZbnP59WklVHrQ56zAMOYxuRAhwN1crwaHNksLx_fO3njfaMhCjwT9NEuCqMFEiWRsidrswGafOms2ThDoK2g"
                title="Vinh Ha Long"
                createdDate="17/05/2020"
                topic="Travel"
                desc="Du lich Vinh Ha Long"
            />
        </div>
    );
};

export default withLayout(Home);