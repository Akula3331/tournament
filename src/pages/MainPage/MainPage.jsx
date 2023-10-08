import React, { useState } from "react";
import TimeCon from "./../../components/TimeCon/TimeCon";
import CountdownTimer from "./../../components/CountdownTimer/CountdownTimer";
import cls from "./MainPage.module.scss"

export default function MainPage() {
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
        <div>
            <div className={cls.con}>
            <CountdownTimer targetDate={targetDate} />
            <TimeCon onFirstDateFromChild={handleFirstDateFromChild} />
            </div>

            {/* <CardsBlock /> */}
            {/* <TourList /> */}
            
        </div>
    );
}
