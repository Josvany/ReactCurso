import React from 'react'
import { useHistory } from 'react-router-dom'

const MainPage = props => {
    const history = useHistory();

    const onClickHeandler = () =>
    {
        history.push("/city");
    }

    return (
        <div>
            Main
            <br />
            <button onClick={onClickHeandler}>City</button>
        </div>
    )
}

export default MainPage
