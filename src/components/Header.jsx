import { useEffect, useState } from 'react';

const Header = ({ handleNewGame, wins }) => {
    const [winCount, setWinCount] = useState(wins);

    useEffect(() => {
        setWinCount(wins);
        document.title = `${winCount} wins`;
    }, [winCount, wins]);

    return (
        <header className="header">
            <h4>{winCount} wins</h4>
            <h3>Memory Game</h3>
            <button onClick={handleNewGame}>New Game</button>
        </header>
    );
};

export default Header;
