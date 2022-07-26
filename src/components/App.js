import { useState, useEffect } from "react";
import "../styles/App.scss";
import getRandomWord from "../services/api";

function App() {
  const [lastLetter, setLastLetter] = useState("");
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [word, setWord] = useState("");

  console.log(word);
  useEffect(() => {
    getRandomWord().then((data) => setWord(data.word));
  }, []);
  const validLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "á",
    "é",
    "í",
    "ó",
    "ú",
    "",
  ];

  const handlerInput = (ev) => {
    const letterInput = ev.target.value.toLowerCase();
    if (validLetters.includes(letterInput)) {
      setLastLetter(letterInput);
    }

    /*    if( letterInput.search( /[a-zñaeiou]/i ) !== -1 ) {
      setLastLetter(letterInput);
      //la isigbificaba que no tiene en cuenta mayusculas o minusculas
    } */
  };
  const renderSolutionLetters = () => {
    const wordLetters = word.split("");
    console.log(wordLetters);
    const htmlWord = wordLetters.map((oneChar) => {
      return <li className="letter">{oneChar}</li>;
    });
    return htmlWord;
  };
  const handlerClick = (ev) => {
    setNumberOfErrors(numberOfErrors + 1);
    console.log(numberOfErrors);
  };
  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
              {/* <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li> */}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handlerInput}
            />
          </form>
          <button onClick={handlerClick}>Incrementar</button>
        </section>
        <section className={"dummy error-" + numberOfErrors}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
