import axios from 'axios';
import { useState } from 'react';
import { FaHome, FaSign } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function App() {
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (email && name) {
      try {
        const res = await axios.post('http://localhost:4003/users', {
          email,
          name,
        });
        setUsers((prev) => [...prev, res.data]);
        setMessage(`Welcome, ${name}`);
      } catch (err) {
        console.error('Signup error:', err);
        setMessage('Email is already taken!');
      }
    } else {
      setMessage(`Hoy!!! ${name || 'stranger'}`);
    }
  };

  return (
    <div className="acc-create">
      <div>
        <button className="home" onClick={() => navigate('/')}>
          Home <FaHome />
        </button>
        <h1>Welcome {name}</h1>
        <form onSubmit={handleSignup}>
          <label>Email: </label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label>Name: </label>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <br></br>
          <button className="sign" type="submit">
            <FaSign /> Signup
          </button>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default App;
