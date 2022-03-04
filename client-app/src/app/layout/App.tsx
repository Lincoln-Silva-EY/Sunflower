import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Header } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/activities').then(response => {
      setActivities(response.data);
    })
  }, [])

  return (
    <div>
      <Header as='h2' icon='sun' color='yellow' content='Sunflower'/>

      <List>
        {activities.map((activity: any) => (
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
