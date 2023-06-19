"./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import css from "./App.css"

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("thenga");

  const data = [
    {
      id: 1,
      question: "who is your favourite actor",
      answers: [
        {
          text: "salmon bhoi",
          correct: true,
        },
        {
          text: "rajpal yadov",
          correct: true,
        },
        {
          text: "shonkor",
          correct: false,
        },
        {
          text: "prem",
          correct: true,
        },
      ],
    },
    {
      id: 2,
      question:"who is your best friend",
      answers: [
        {
          text: "paarva",
          correct: true,
        },
        {
          text: "kaya",
          correct: false,
        },
        {
          text: "anjali",
          correct: false,
        },
        {
          text: "shobha",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "who do you look like",
      answers: [
        {
          text: "katrina",
          correct: false,
        },
        {
          text: "jaqueline",
          correct: false,
        },
        {
          text: "larra",
          correct: false,
        },
        {
          text: "tatti",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "who do you think is the most handsome guy in the village",
      answers: [
        {
          text: "darodo",
          correct: false,
        },
        {
          text: "hearthacker",
          correct: true,
        },
        {
          text: "lala09",
          correct: false,
        },
        {
          text: "novvaa81",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "what is thhe first step to eat mango ",
      answers: [
        {
          text: "step 1 bite  left part of mango ",
          correct: false,
        },
        {
          text: "step 1 bite left right of mango",
          correct: false,
        },
        {
          text: "step 1 sallow the whole mango",
          correct: false,
        },
        {
          text: "step 1 from the upper side of mango",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "0 mango" },
        { id: 2, amount: "1/4 mango" },
        { id: 3, amount: "1/2 mango" },
        { id: 4, amount: "2 mango" },
        { id: 5, amount: "0 mango" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <>
              <h1 className="endtext">
                Congratulaton : {setUsername}
              </h1>
              <h1 className="endText">
                tumko milta h: {earned}</h1>
                </>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            {/* <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul> */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;

