import React from 'react'
import { useState } from 'react'


function Game() {
    let PlayerName = ['', '', '', '', '', '', '', '', ''];
    const [Board, setboard] = useState([...PlayerName])
    const [Player, setplayer] = useState("X");

    let ChangeValue = (index) => {
        if (Board[index] !== "") return;
        setboard((Board) => {

            return Board.map((value, i) => {
                if (i === index) return Player;
                return value;

            });
        });
        setplayer(Player === 'X' ? 'O' : 'X')
    };

    return (
        <>
            <div className='container'>
                <h1 className='Which-player'>Current player : {Player}</h1>
                <div className='board'>
                    {
                        Board.map((box, i) => {
                            return <div onClick={() => ChangeValue(i)} className='board-content'>{box}</div>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default Game
