import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/achievements/your_student_id', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAchievements(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Your Achievements</h2>
      <ul>
        {achievements.map(a => (
          <li key={a._id}>{a.title} - {a.description}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
