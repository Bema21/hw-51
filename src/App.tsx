import './App.css'
import './components/Lottery/LotteryBall.css'
import { useState } from 'react';
import LotteryBall from "./components/Lottery/LotteryBall";


const App = () => {
    const arrayNumbers = [5, 11, 16, 23, 32];

    const [numbers, setNumbers] = useState<number[]>(arrayNumbers);

    const generateNewNumbers = () => {
        const newNumbers: number[] = [];
        while (newNumbers.length < 5) {
            const randomNumber = Math.floor(Math.random() * 32) + 5;
            if (!newNumbers.includes(randomNumber)) {
                newNumbers.push(randomNumber);
            }
        }
        setNumbers(newNumbers.sort((a, b) => a - b));
    };

    return (
        <div className="lottery-app">
            <h1>Lottery</h1>
            <div className="container">
                {numbers.map((number, index) => (
                    <LotteryBall key={index} number={number}/>
                ))}
            </div>
            <button className="btn-change" onClick={generateNewNumbers}>New numbers</button>
        </div>
    );
}

export default App;