import React from "react";
import { useHistory } from "react-router-dom";

const BlogDetail = (props) => {
    const history = useHistory();

    return (
        <div>
            Blog detail
            <button onClick={() => history.push("/")}>Go to homepage</button>
        </div>
    )
}

export default BlogDetail;