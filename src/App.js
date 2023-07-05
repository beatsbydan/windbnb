import './App.css';
import Main from './Components/Main/Main';
import FilterContextProvider from './Context/FilterContext/FilterContextProvider';
import StaysContextProvider from './Context/StaysContext/StaysContextProvider';

function App() {
  return (
    <FilterContextProvider>
      <StaysContextProvider>
        <div className="App">
          <Main/>
        </div>
      </StaysContextProvider>
    </FilterContextProvider>
  );
}
export default App;
