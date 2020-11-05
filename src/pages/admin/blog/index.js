import React, { useState, useRef } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import "./styles.css";


const BlogAdmin = (props) => {
    const customStyles = {
        container: (styles) => ({
            ...styles,
            maxWidth: "500px"
        })
    }

    const [value, setValue] = useState('');
    const [tagState, setTagState] = useState([]);

    const titleRef = useRef();
    const descRef = useRef();


    const options = [
        { value: 'Javascript', label: 'Javascript' },
        { value: 'Nodejs', label: 'Nodejs' },
        { value: 'Reactjs', label: 'Reactjs' }
    ];

    const animatedComponents = makeAnimated();

    const handleSubmitForm = (e) => {
        e.preventDefault();

        let data = {
            title: titleRef.current.value,
            desc: descRef.current.value,
            topic: tagState,
            content: value
        }

        console.log(data);
    };

    const handleChangeSelect = (values) => {
        setTagState(values.map(values => values.value))
    };

    const handleChange = (value) => {
        setValue(value)
    };

    return (
        <div className="admin-layout">
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
                </div>
            </section>
            <section className="center-section">
                <div className="center-container">
                    <form className="form" onSubmit={handleSubmitForm}>
                        <div className="form-group">
                            <label>Title</label>
                            <input type="text" ref={titleRef}></input>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea type="text" ref={descRef}></textarea>
                        </div>
                        <div className="form-froup">
                            <label>Topic</label>
                            <Select
                                closeMenuOnSelect={false}
                                components={animatedComponents}
                                isMulti
                                options={options}
                                onChange={handleChangeSelect}
                                styles={customStyles}
                            />
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <input type="file"></input>
                        </div>
                        <div>
                            <ReactQuill
                                theme="snow"
                                value={value}
                                onChange={handleChange}
                                modules={{
                                    toolbar: [
                                        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                                        ['blockquote', 'code-block'],

                                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
                                        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
                                        [{ 'direction': 'rtl' }],                         // text direction

                                        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

                                        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                                        [{ 'font': [] }],
                                        [{ 'align': [] }],

                                        ['clean'],

                                        ['link', 'image', 'video']
                                    ]
                                }}
                            />
                        </div>
                        <button className="btn">Submit</button>
                    </form>
                </div>
            </section>
        </div>

    )
}

export default BlogAdmin;