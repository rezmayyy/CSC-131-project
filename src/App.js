import './App.css';
import { HomePage } from './HomePage';
import { FormPage } from './FormPage';
import { DataProvider } from './dataContext';
import { Demo } from './Demo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataProvider>
          {/*<HomePage />*/}
          <FormPage />
          {/*<Demo /> */}
        </DataProvider>
      </header>
    </div>
  );
}

export default App;
