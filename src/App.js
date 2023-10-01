import './App.css';
import { HomePage } from './HomePage';
import { DataProvider } from './dataContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DataProvider>
          <HomePage />
        </DataProvider>
      </header>
    </div>
  );
}

export default App;
