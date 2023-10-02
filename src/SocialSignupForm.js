import React, { useState } from 'react';
import './App.css'; 

const SocialSignupForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedButton, setSelectedButton] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`${selectedButton}\nName: ${name}\nPassword: ${password}`);
  };

  return (
    <div className="main-block">
      <div className="block-item left">
        <h1>Sign up with:</h1>
        <p>
          <small>
            W3docs provides free learning materials for programming languages like HTML, CSS, JavaScript, PHP, etc.
         </small>
        </p>
      </div>
      {/* <div className="block-item right">
        <button
          className="btn facebook"
          onClick={() => {
            setSelectedButton('Facebook');
            setShowForm(true);
          }}
        >
          <i className="fab fa-facebook-f"></i>
          <span>Facebook</span>
        </button>
        <button
          className="btn twitter"
          onClick={() => {
            setSelectedButton('Twitter');
            setShowForm(true);
          }}
        >
          <i className="fab fa-twitter"></i>
          <span>Twitter</span>
        </button>
        <button
          className="btn google"
          onClick={() => {
            setSelectedButton('Google');
            setShowForm(true);
          }}
        >
          <i className="fab fa-google"></i>
          <span>Google</span>
        </button>
      </div> */}

      {showForm ? (
        <div className="form-container">
          <form onSubmit={handleFormSubmit}>
            <h2>Signup with {selectedButton}</h2>
            <div>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      ): (<div className="block-item right">
      <button
        className="btn facebook"
        onClick={() => {
          setSelectedButton('Facebook');
          setShowForm(true);
        }}
      >
        <i className="fab fa-facebook-f"></i>
        <span>Facebook</span>
      </button>
      <button
        className="btn twitter"
        onClick={() => {
          setSelectedButton('Twitter');
          setShowForm(true);
        }}
      >
        <i className="fab fa-twitter"></i>
        <span>Twitter</span>
      </button>
      <button
        className="btn google"
        onClick={() => {
          setSelectedButton('Google');
          setShowForm(true);
        }}
      >
        <i className="fab fa-google"></i>
        <span>Google</span>
      </button>
    </div>)}
    </div>
  );
};

export default SocialSignupForm;
