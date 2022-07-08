import React from "react";
import Card, { CardfVariant } from "./components/Card";
import UserList from "./components/UserList";
import { IUser } from "./types/types";

const App = () => {
    const users: IUser[] = [
        {id: 1, name: 'Name_1', email: 'email_1@mail.ru', address: {city: 'city_1', street: 'street_1', zipcode: 'zip_1'}},
        {id: 2, name: 'Name_2', email: 'email_2@mail.ru', address: {city: 'city_2', street: 'street_2', zipcode: 'zip_2'}}
    ]

    return (
        <div>
            <Card 
                width="200px" 
                height="200px" 
                variant={CardfVariant.primary}
                onClick={(num) => console.log('click - ', num)}
            >
                <button>Button</button>
            </Card>
            <UserList users={users}/>
        </div>
    );
};

export default App;
