import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './index.css';
import { FaEdit, FaHome } from 'react-icons/fa';

function Update() {
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

  const updateField = async (field) => {
    const currentValue = data[field] || '';
    const newValue = prompt(`Enter new ${field}:`, currentValue);

    if (newValue && newValue !== currentValue) {
      try {
        await axios.patch(`http://localhost:4003/users/${id}`, {
          [field]: newValue,
        });
        fetchStudent();
      } catch (err) {
        console.error(`Failed to update ${field}:`, err);
      }
    } else {
      alert(`${field} was not updated`);
    }
  };

  return (
    <div className="read-div">
      <button className="home" onClick={() => navigate('/')}>
        Home <FaHome />
      </button>
      <h1 className="stud-details">Student Details</h1>

      <table className="user-table">
        <thead>
          <tr>
            <th className="first">NAME</th>
            <th className="first">EMAIL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {data.name}
              <button
                className="update-btn flex items-center gap-1"
                onClick={() => updateField('name')}
              >
                Update <FaEdit />
              </button>
            </td>
            <td>
              {data.email}
              <button
                className="update-btn flex items-center gap-1"
                onClick={() => updateField('email')}
              >
                Update <FaEdit />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Update;
