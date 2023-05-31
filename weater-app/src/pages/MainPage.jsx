import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList/CityList';

const MainPage = props => {
    const history = useHistory();

    const onClickHeandler = () =>
    {
        history.push("/city");
    }

    const cities = [
        {city: "Buenos Aires", country: "Argentina"},
        {city: "Bogotá", country: "Colombia"},
        {city: "Madrid", country: "España"},
        {city: "Ciudad De México", country: "México"},
        {city: "Managua", country: "Nicaragua"}   
]

    return (
        <div>
            <h2>Lista de ciudades</h2>
            <br />
            <CityList cities={cities} onClickCity={onClickHeandler} />
        </div>
    )
}

export default MainPage
