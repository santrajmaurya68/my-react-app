import React, { useState } from "react";

const Form = () => {
    const [state, setState] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("You have submitted the form.");
        //console.log(email , password)
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h4>Login</h4>
            <div className="form-group">
                <label className="form-label" htmlFor="email">
                    Email
                </label>
                <input
                    className="form-input"
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label className="form-label" htmlFor="password">
                    Password
                </label>
                <input
                    className="form-input"
                    type="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                />
            </div>
            <button className="form-button">Submit</button>
        </form>
    );
};

export default Form;