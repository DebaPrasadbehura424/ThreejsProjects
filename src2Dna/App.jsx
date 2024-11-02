import { useState } from 'react'
let cardsy = [
  {
    id: 1,
    url: "ai2.jpg",
    matched: false,
  },
  {
    id: 2,
    url: "ai3.jpg",
    matched: false,
  },
  {
    id: 3,
    url: "aircraft.jpg",
    matched: false,
  },
  {
    id: 4,
    url: "soilder1.jpg",
    matched: false,
  },
  {
    id: 5,
    url: "ai2.jpg",
    matched: false,
  },
  {
    id: 6,
    url: "aircraft.jpg",
    matched: false,
  },
  {
    id: 7,
    url: "soilder1.jpg",
    matched: false,
  },
  {
    id: 8,
    url: "ai3.jpg",
    matched: false,
  },
]
function App() {
  const [cardimages, setCardimages] = useState([...cardsy]);
  const [newbut, setNewbut] = useState(false);
  let selectimages;
  const shufflecards = () => {
    setNewbut(false);
    for (let i = 0; i < cardsy.length; i++) {
      cardsy[i].matched = false;
      cardimages.push(cardsy[i]);
    };

    for (let i = 0; i < cardimages.length; i++) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardimages[i], cardimages[j]] = [cardimages[j], cardimages[i]];
    }
    selectimages = [];
    for (let i = 0; i < cardimages.length; i++) {
      selectimages.push(cardimages[i]);
    }
    setCardimages(selectimages);


  }
  let count = 0;
  let firstchoice, secchoice;
  let stands;
  let a, b;
  let afterpick;
  function handleCards(ind) {
    let roatecard = document.querySelectorAll('.front');
    stands = document.querySelectorAll('.card');
    if (count == 0) {
      firstchoice = cardimages[ind].url;
      roatecard[ind].classList.add('font_active');
      cardimages[ind].matched = true;
      a = ind;
      count = count + 1;
    }
    else if (count == 1) {
      secchoice = cardimages[ind].url;
      roatecard[ind].classList.add('font_active');
      cardimages[ind].matched = true;
      b = ind;
      count = count + 1;
      if (firstchoice == secchoice) {
        setTimeout(() => {
          afterpick = cardimages.filter((x) => x.matched == false)
          setCardimages(afterpick);
          try {
            if (afterpick.length == 0) {
              setNewbut(true)
            }
          } catch (e) {
            console.log('continue your game');

          }
        }, 800)
      } else {
        count = 0;
        cardimages[a].matched = false;
        cardimages[b].matched = false;
        setTimeout(() => {
          roatecard[a].classList.remove('font_active');
          roatecard[b].classList.remove('font_active');
        },800)


      }

    }
  }
  return (
    <div className='head_line'>
      <h1>Matching game</h1>
      {
        newbut == true ? <button onClick={shufflecards}>NEW GAME</button> : <p>LETS WIN</p>
      }

      <div className='card_grid'>
        {
          cardimages.map((x, index) => {
            return (
              <div className='card' onClick={() => handleCards(index)} key={x.id}>
                <div className='photo_smash'>
                  <div className='front_c'>
                    <img src={x.url} alt="name" className='back' />
                  </div>
                  <div className='back_c '>
                    <img src='wall.jpg' alt="name" className='front' />
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>

  )
}
export default App