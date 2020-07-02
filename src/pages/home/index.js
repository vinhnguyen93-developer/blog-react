import React from "react";
import Feed from "../../components/feed";

const Home = (props) => {

    return (
        <div>
            <Feed 
                imageUrl="https://avatars0.githubusercontent.com/u/29276005?s=88&u=c9dde4a310d43714ccd2ce2d94d7f0118e6aa2e7&v=4"
                title="Vinh Ha Long"
                createdDate="17/05/2020"
                topic="Travel"
                desc="Du lich Vinh Ha Long"
            />
        </div>
    );
};

export default Home;