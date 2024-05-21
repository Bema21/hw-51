import React from 'react';

interface Props {
    number:number;
}

const LotteryBall: React.FC<Props> = ({number}) => {
    return (
                <div className="lottery-ball">
                    <p className="number">{number}</p>
                </div>
    );
};

export default LotteryBall;