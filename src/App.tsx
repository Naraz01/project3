import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Header } from './components/header';
import CollapsibleTable from './components/Table';
import { fetchGroupe } from './store/ducks/groupe/actionCreators';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchGroupe())
  }, [])
  return (
    <div className="App">
      <Header /> 
      <main>
        <CollapsibleTable />
      </main>
    </div>
  );
}

export default App;
