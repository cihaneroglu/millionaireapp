import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(14);
  const [earned, setEarned] = useState("₺ 0");

  const data = [
    {
      id: 1,
      question: "Türkiye Futbol Süper Ligi'nin diğer adı nedir?",
      answers: [
        { text: "Süper Lig", correct: true },
        { text: "Süper Futbol", correct: false },
        { text: "Türkiye Futbol Ligi", correct: false },
        { text: "Futbol Süperstar", correct: false },
      ],
    },
    {
      id: 2,
      question: "Hangi takım 'Aslanlar' lakabıyla anılmaktadır?",
      answers: [
        { text: "Galatasaray", correct: true },
        { text: "Fenerbahçe", correct: false },
        { text: "Beşiktaş", correct: false },
        { text: "Trabzonspor", correct: false },
      ],
    },
    {
      id: 3,
      question: "Türkiye Futbol Süper Ligi'nde kaç takım yer almaktadır?",
      answers: [
        { text: "16", correct: false },
        { text: "18", correct: true },
        { text: "20", correct: false },
        { text: "22", correct: false },
      ],
    },
    {
      id: 4,
      question: "Türkiye Futbol Süper Ligi'nin en fazla şampiyon olan takımı hangisidir?",
      answers: [
        { text: "Galatasaray", correct: true },
        { text: "Fenerbahçe", correct: false },
        { text: "Beşiktaş", correct: false },
        { text: "Trabzonspor", correct: false },
      ],
    },
    {
      id: 5,
      question: "Hangi takım 'Kartal' lakabıyla anılmaktadır?",
      answers: [
        { text: "Galatasaray", correct: false },
        { text: "Fenerbahçe", correct: false },
        { text: "Beşiktaş", correct: true },
        { text: "Trabzonspor", correct: false },
      ],
    },
    {
      id: 6,
      question: "Türkiye Futbol Süper Ligi'nde şu an kaç hafta oynanmıştır?",
      answers: [
        { text: "4", correct: false },
        { text: "3", correct: false },
        { text: "2", correct: true },
        { text: "1", correct: false },
      ],
    },
    {
      id: 7,
      question: "Hangi takım 'Hamsi' lakabıyla anılmaktadır?",
      answers: [
        { text: "Galatasaray", correct: false },
        { text: "Fenerbahçe", correct: false },
        { text: "Beşiktaş", correct: false },
        { text: "Trabzonspor", correct: true },
      ],
    },
    {
      id: 8,
      question: "Türkiye Futbol Süper Ligi'nde gol kralı unvanını en fazla kim kazanmıştır?",
      answers: [
        { text: "Hakan Şükür", correct: false },
        { text: "Tanju Çolak", correct: false },
        { text: "Alex de Souza", correct: true },
        { text: "Metin Oktay", correct: false },
      ],
    },
    {
      id: 9,
      question: "Hangi takım 'Kanaryalar' lakabıyla anılmaktadır?",
      answers: [
        { text: "Galatasaray", correct: false },
        { text: "Fenerbahçe", correct: true },
        { text: "Beşiktaş", correct: false },
        { text: "Trabzonspor", correct: false },
      ],
    },
    {
      id: 10,
      question: "Türkiye Futbol Süper Ligi'nde şu ana kadar kaç sezon oynanmıştır?",
      answers: [
        { text: "60", correct: false },
        { text: "62", correct: false },
        { text: "64", correct: false },
        { text: "66", correct: true },
      ],
    },
    {
      id: 11,
      question: "4 büyüklerin dışındaki anadolu takımlarından ilk şampiyon olan takım hangisidir?",
      answers: [
        { text: "Başakşehir", correct: false },
        { text: "Fatih Karagümrük", correct: false },
        { text: "Giresunspor", correct: false },
        { text: "Bursaspor", correct: true },
      ],
    },
    {
      id: 12,
      question: "Türkiye Futbol Süper Ligi'nde en fazla gol atan yabancı futbolcu kimdir?",
      answers: [
        { text: "Gheorghe Hagi", correct: false },
        { text: "Mario Jardel", correct: true },
        { text: "Alex de Souza", correct: false },
        { text: "Shota Arveladze", correct: false },
      ],
    },
    {
      id: 13,
      question: "Hangi takım 'Anadolu Kartalı' lakabıyla anılmaktadır?",
      answers: [
        { text: "Galatasaray", correct: false },
        { text: "Fenerbahçe", correct: false },
        { text: "Beşiktaş", correct: false },
        { text: "MKE Ankaragücü", correct: true },
      ],
    },
    {
      id: 14,
      question: "Türkiye Futbol Süper Ligi'nde 2022-2023 sezonunu şampiyon tamamlayan takım hangisidir?",
      answers: [
        { text: "Galatasaray", correct: true },
        { text: "Fenerbahçe", correct: false },
        { text: "Beşiktaş", correct: false },
        { text: "Trabzonspor", correct: false },
      ],
    },
    {
      id: 15,
      question: "Hangi takım 'Çotanaklar' lakabıyla anılmaktadır?",
      answers: [
        { text: "Galatasaray", correct: false },
        { text: "Fenerbahçe", correct: false },
        { text: "Altay", correct: false },
        { text: "Giresunspor", correct: true }
      ],
    }]
  

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₺ 100" },
        { id: 2, amount: "₺ 200" },
        { id: 3, amount: "₺ 300" },
        { id: 4, amount: "₺ 500" },
        { id: 5, amount: "₺ 1.000" },
        { id: 6, amount: "₺ 2.000" },
        { id: 7, amount: "₺ 4.000" },
        { id: 8, amount: "₺ 8.000" },
        { id: 9, amount: "₺ 16.000" },
        { id: 10, amount: "₺ 32.000" },
        { id: 11, amount: "₺ 64.000" },
        { id: 12, amount: "₺ 125.000" },
        { id: 13, amount: "₺ 250.000" },
        { id: 14, amount: "₺ 500.000" },
        { id: 15, amount: "₺ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
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
            <ul className="moneyList">
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
            </ul>
          </div>

      
    </div>
  );
                }

export default App;