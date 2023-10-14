import './styles/App.css';
import { HomePage } from './pages/HomePage';
import { TestlistPage }  from './pages/TestlistPage';
import { LoginPage } from './pages/LoginPage';
import { FormPage } from './pages/FormPage';
import { DataProvider } from './context/dataContext';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <LoginPage />
        <DataProvider>
          
          <Routes>
            <Route>
              
              <Route path="/" element={<HomePage />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/testlist/:deviceName" element={<TestlistPage />} />
            </Route>
          </Routes>
        </DataProvider>
      </header>
    </div>
  );
}

export default App;
