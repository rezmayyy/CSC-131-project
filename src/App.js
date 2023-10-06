import './styles/App.css';
import { HomePage } from './pages/HomePage';
import { FormPage } from './pages/FormPage';
import { DataProvider } from './context/dataContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataProvider>
          {/*<HomePage />*/}
          <FormPage />
        </DataProvider>
      </header>
    </div>
  );
}

export default App;
