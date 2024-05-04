import { useState, useEffect } from 'react';
import shuffle from './utilities/shuffle';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  
  const [cards, setCards] = useState(shuffle); // src/utilities/shuffle.js
  const [pickOne, setPickOne] = useState(null);
  const [pickTwo, setPickTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [wins, setWins] = useState(0);

    const handleClick = (card) => {
      if (!disabled) {
        pickOne ? setPickTwo(card) : setPickOne(card);
      }
  };

  const handleTurn = () => {
    setPickOne(null);
    setPickTwo(null);
    setDisabled(false);
  };

    const handleNewGame = () => {
      setWins(0);
      handleTurn();
      setCards(shuffle);
    };

  useEffect(() => {
    let pickTimer;

    if (pickOne && pickTwo) {
      if (pickOne.image === pickTwo.image) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.image === pickOne.image) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        handleTurn();
      } else {
        setDisabled(true);
        pickTimer = setTimeout (() => {
          handleTurn();
        }, 1000);
      }
    }

    return() => {
      clearTimeout(pickTimer);
    };
  }, [cards, pickOne, pickTwo]);

    useEffect (() => {
      const checkWin = cards.filter((card) => !card.matched);

      if (cards.length && checkWin.length < 1) {
        console.log('You win!');
        setWins(wins + 1);
        handleTurn();
        setCards(shuffle);
      }
    }, [cards, wins]);

  return (
    <>

      <Header handleNewGame={handleNewGame} wins={wins} />

      <div className="grid">
        {cards.map((card) => {
          const { image, id, matched } = card;

          return (
            <Card
              key={id}
              image={image}
              selected={card === pickOne || card === pickTwo || matched}
              onClick={() => handleClick(card)}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
