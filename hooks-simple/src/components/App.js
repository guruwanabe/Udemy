import React, {useState} from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  //array destructuring
  //const [currentState, setState] = useState('posts');
  const [resource, setResources] = useState('posts');

  return(
    <div>
      <UserList />
      <div>
        <button onClick={()=> setResources('posts')}>Posts</button>
        <button onClick={()=> setResources('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource}/>
    </div>
  );

}

export default App;
