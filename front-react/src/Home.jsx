import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { FaChessKing, FaEdit, FaHome, FaReadme, FaTrash } from 'react-icons/fa';

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios
      .get('http://localhost:4003/users')
      .then((res) => {
        console.log('Student data from DB:', res.data);
        setData(res.data);
      })
      .catch((err) => console.error('Error:', err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4003/users/${id}`)
      .then((res) => {
        console.log('Deleted:', res.data);
        fetchStudents();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button className="create-acc" onClick={() => navigate('/create')}>
        Create Account <FaChessKing />
      </button>
      <h2 className="stud-details">Student List</h2>

      <div>
        <table className="user-table">
          <thead>
            <tr>
              <th className="first">ID</th>
              <th className="first">FIRSTNAME</th>
              <th className="first">EMAIL</th>
              <th className="first">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    <button
                      className="read-btn"
                      onClick={() => navigate(`/read/${student.id}`)}
                    >
                      Read <FaReadme />
                    </button>
                    <button
                      className="update-btn"
                      onClick={() => navigate(`/update/${student.id}`)}
                    >
                      Update <FaEdit />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>No students found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
