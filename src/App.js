import './styles/App.css';
import { HomePage } from './pages/HomePage';
import { TestlistPage } from './pages/TestlistPage';
import { LoginPage } from './pages/LoginPage';
import { FormPage } from './pages/FormPage';
import { DataProvider } from './context/dataContext';
import { Routes, Route } from 'react-router-dom';
import { SignUpPage } from './pages/SignUpPage';
import { Protected } from './component/protected';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataProvider>
          <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/testlist/:deviceName" element={<TestlistPage />} />
            <Route path="/" element={<Protected />} >
              <Route path="/" index element={<HomePage />} />
            </Route>
          </Routes>
        </DataProvider>
      </header>
    </div>
  );
}

export default App;
