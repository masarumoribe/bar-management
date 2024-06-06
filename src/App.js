import './App.css';
import Navbar from './Navbar';
import AddNewItem from './components/AddNewItem';
import EditItem from './components/EditItem';
import DeleteItem from './components/DeleteItem';
import Content from './components/Content';
import Home from './components/Home';
import Inventory from './components/Inventory';
import Recipes from './components/Recipes';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [inventoryData, setInventoryData] = useState([]);

  console.log(inventoryData)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/inventory' element={<Inventory inventoryData={inventoryData}/>}>
          <Route path='content' element={<Content/>}/>
          <Route path="add" element={<AddNewItem setInventoryData={setInventoryData}/>}/>
          <Route path="edit" element={<EditItem/>}/>
          <Route path="delete" element={<DeleteItem/>}/>
        </Route>
        <Route path='/recipes' element={<Recipes />} />
      </Routes>
    </>
  );
}

export default App;
