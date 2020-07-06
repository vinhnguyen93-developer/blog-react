import React from "react";
import "./styles.css"

function withLayout(Component) {

    return (props) => {
        return (
            <div className="app-layout">
                <section className="left-section container column">
                    <div className="main-menu container column">
                        <a href="/" className="active">Home</a>
                        <a href="/front-end">Front-End</a>
                        <a href="/back-end">Back-End</a>
                        <a href="/dev-ops">DevOps</a>
                    </div>
                    <div style={{ position: "sticky", bottom: 50 }}>
                        <h1 className="logo">
                            <a href="/">
                                Vinh
                                <span>Blogger</span>
                            </a>
                        </h1>
                        <div className="email-subscribe container column">
                            <span>Subscribe for newsletter</span>
                            <input placeholder="Enter Email Address" />
                            <span>Sharing to better</span>
                        </div>
                    </div>
                </section>
                <section className="center-section">
                    <Component {...props} />
                </section>
                <section className="right-section">

                </section>
            </div>
        )
    }
};

export default withLayout;