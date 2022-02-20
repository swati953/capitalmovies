import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Signup extends Component {
  render() {
    return (
      <div className="my-5" style={{display:"flex",justifyContent:"center"}}>
        <main className="form-signin">
          <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
             <div className="form-floating">
              <input
                type="name"
                className="form-control my-2"
                id="floatingInput"
                placeholder="Jhon"
              />
              <label for="floatingInput">User Name</label>
            </div>
             <div className="form-floating">
              <input
                type="email"
                className="form-control my-2"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control my-2"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-dark" type="submit">Login in</button>
            
            <p className="mt-5 mb-3 text-muted">Already have account? Login here!!</p>
            <Link className="btn btn-dark btn-sm" to="/login">Login in</Link>
            
          </form>
        </main>
      </div>
    );
  }
}
