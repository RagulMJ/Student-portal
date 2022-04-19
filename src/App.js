import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Tables from './Tables';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard';
import User from './User';
import CreateUserform from './CreateUserform';
import Productform from './Productform';
import { useState } from 'react';
import { UserProvider } from './Usercontext';
import UserView from './UserView';
import UserEdit from './UserEdit';
import ProductView from './ProductView';
import ProductEdit from './ProductEdit';

function App() {
  const [userName, setUserName] = useState("Ragul praveen")
  const [users, setUsers] = useState([]);

  return (
    <BrowserRouter>
      <div id="wrapper">
        <UserProvider  value={{ userName, setUserName, users, setUsers }}>
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div class="container-fluid">
                <Routes>
                  <Route path="/Tables" element={<Tables />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/User" element={<User />} />
                  <Route path="/Userform" element={<CreateUserform />} />
                  <Route path="/Productform" element={<Productform />} />
                  <Route path="/UserView/:id" element={ <UserView/> } />
                  <Route path="/UserEdit/:id" element={ <UserEdit/> } />
                  <Route path="/ProductEdit/:id" element={ <ProductEdit/> } />
                  <Route path="/ProductView/:id" element={ <ProductView/> } />
                </Routes>
              </div>
            </div>
          </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
