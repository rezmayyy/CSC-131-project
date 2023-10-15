import './styles/App.css';
import { HomePage } from './pages/HomePage';
import { FormPage } from './pages/FormPage';
import { TestlistPage }  from './pages/TestlistPage';
import { ErrorPage } from './pages/ErrorPage';
import { DataProvider } from './context/dataContext';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataProvider>
          <Routes>
            <Route>
              <Route path="/" element={<HomePage />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/testlist/:deviceName" element={<TestlistPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </DataProvider>
      </header>
    </div>
  );
}

export default App;
