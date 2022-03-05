import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:8000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, [])

  return (
    <div>
      <NavBar />

      <List>
        {activities.map(activity => (
          <List.Item key={activity.id}>
            <br></br>
            {activity.title} <br></br>
            Cidade: {activity.city} <br></br>
            Lugar: {activity.venue}
          </List.Item>
        ))}
      </List>

    </div>
  );
}

export default App;
