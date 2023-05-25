
import './App.css';
import CityList from './components/CityList/CityList';
import { action } from "@storybook/addon-actions"

const cities = [
  {city: "Buenos Aires", country: "Argentina"},
  {city: "Bogotá", country: "Colombia"},
  {city: "Madrid", country: "España"},
  {city: "Ciudad De México", country: "México"},
  {city: "Managua", country: "Nicaragua"}   
]

function App() {
  return (
    <div className="App">
      <CityList  cities={cities} onClickCity={action("Click in city")}/>
    </div>
  );
}

export default App;
