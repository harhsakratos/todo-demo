import "./App.css";
import ComponentC from "./components/ComponentC";
import StateProvider from "./Context/MyContext";


function App() {
  return (
    <StateProvider>
      <ComponentC/>
    </StateProvider>
  );
}
export default App;
