import React, { useEffect, useState } from "react";
import Feed from "../../components/feed";
import withLayout from "../../shared/hocs/withLayout";
import apiService from "../../shared/services/apiService";

import dayjs from 'dayjs'

const Home = (props) => {
    const [state, setState] = useState({
        blogs: []
    })

    useEffect(() => {
        apiService.axios("/blog", {
            method: "GET",
            config: {
                headers: {
                    token: localStorage.getItem("token")
                }
            }
        }).then(res =>
            //console.log(res.data)
            setState(prevState => ({
                ...prevState,
                blogs: res.data.data
            }))
        ).catch(err => console.log(err))
    }, []);

    return (
        <div>
            {
                state.blogs.map((blog) => (
                    <Feed
                        key={blog._id}
                        imageUrl="https://dulichhalongquangninh.com/wp-content/uploads/2016/07/hinh-anh-du-lich-ha-long.jpg"
                        title={blog.title}
                        createdDate={dayjs(blog.createdAt).format("DD/MM/YYYY")}
                        topic="Travel"
                        desc={blog.content}
                    />
                ))
            }
        </div>
    );
};

export default withLayout(Home);