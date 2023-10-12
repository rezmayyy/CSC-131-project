import './styles/App.css';
import { HomePage } from './pages/HomePage';
import { FormPage } from './pages/FormPage';
import { DataProvider } from './context/dataContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataProvider>
          <BrowserRouter>
            <Routes>
              <Route>
                <Route index element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/form" element={<FormPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </header>
    </div>
  );
}

export default App;
