import React from "react";
import { useHistory, useParams, useLocation } from "react-router-dom";

const BlogDetail = (props) => {
    const location = useLocation();
    const history = useHistory();
    const params = useParams();

    return (
        <div>
            Blog detail
            <button onClick={() => history.push("/")}>Go to homepage</button>
        </div>
    )
}

export default BlogDetail;