import { useState } from 'react';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import AllTodosList from './components/AllTodoList';
import SwitchMainStyle from './components/SwitchMainStyle/SwitchMainStyle';


function App() {
  const [isDarkStyle, switchMainStyle] = useState(true)

  const switchStyleClick = () => {
    switchMainStyle(!isDarkStyle);
  }
  // test123
  return (
    <div className={isDarkStyle ? 'App lightStyle' : 'App darkStyle'}>
      <header className="app-header">
      </header>
      <div className="app-main_fixed">
        <h1>TODO</h1>
        <SwitchMainStyle switchStyleClick={switchStyleClick}/>
        <AddTodoForm />

        <AllTodosList />
      </div>
      <div className="app-footer">
      </div>
    </div>
  );
}

export default App;
