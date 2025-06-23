import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './index.css';
import { FaHome } from 'react-icons/fa';

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudent();
  }, []);

  const fetchStudent = async () => {
    try {
      const res = await axios.get(`http://localhost:4003/users/${id}`);
      console.log('Student data from DB:', res.data);
      setData(res.data);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="read-div">
      <button className="home" onClick={() => navigate('/')}>
        Home <FaHome />
      </button>
      <h1 className="stud-details">Student Details</h1>
      <tr className="user-table">
        <th className="first">NAME</th>
        <th className="first">EMAIL</th>
        <tr>
          <td>{data.name}</td>
          <td>{data.email}</td>
        </tr>
      </tr>
    </div>
  );
}

export default Read;
