import "./App.scss";
import Card from "../components/Card/Card";
import TimeCon from "../components/TimeCon/TimeCon";
import CountdownTimer from "../components/CountdownTimer/CountdownTimer";
import { useState } from "react";
import BlockTime from "../components/BlockTime/BlockTime";
import TourList from "../components/TourList/TourList";

function App() {
    const [firstDateFromChild, setFirstDateFromChild] = useState(null);
    const handleFirstDateFromChild = (date) => {
        setFirstDateFromChild(date);
    };
    console.log(firstDateFromChild);
    let targetDate = null; // Изначально установите targetDate как null

    if (firstDateFromChild) {
        const dateParts = firstDateFromChild.split(".");
        if (dateParts.length === 3) {
            const formattedDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T00:00:00`;
            targetDate = new Date(formattedDate);
        }
    }

    return (
        <div className="App">
            <h1>Hello World!</h1>
            <TimeCon onFirstDateFromChild={handleFirstDateFromChild} />
            {/* <TourList /> */}
            <CountdownTimer targetDate={targetDate} />
        </div>
    );
}

export default App;
