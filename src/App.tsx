import React from "react";
import Card, { CardfVariant } from "./components/Card";

const App = () => {
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
        </div>
    );
};

export default App;
