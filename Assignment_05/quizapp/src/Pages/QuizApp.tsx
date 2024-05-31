import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export default function QuizScreen() {

    var questions = [
        {
          question: "HTML Stands For _________",
          options: [
            "Anchor Text Language",
            "HTML",
            "Case Cading Style Sheet",
            "HyperText markup language",
          ],
          correctAns: "HyperText markup language",
        },
        {
          question: "CSS Stands For _________",
          options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language",
          ],
          correctAns: "Casecading Style Sheet",
        },
        {
          question: "JS Stands For _________",
          options: ["Java Style", "Java Script", "Script", "Script Src"],
          correctAns: "Java Script",
        },
        {
          question: "DOM Stands For _________",
          options: ["Document Object Model", "html", "Css", "Java"],
          correctAns: "Document Object Model",
        },
        {
          question: "RAM Stands For _________",
          options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
          correctAns: "Random Access Memory",
        },
        {
          question: "ROM Stands For _________",
          options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory",
          ],
          correctAns: "Read Only Memory",
        },
      ]

      function checkScore (answer:any){
        if(answer === questions[currentIndex].correctAns){
            setScore(score + 1);
        }
      }


      const [currentIndex, setCurrentIndex]  = useState(0)
      const [score, setScore] = useState(0)


      return (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className='card' style={{ width: "45rem" }}>
            <div className='card-body'>
              <h2 className=''>General Knowledge Quiz</h2>
              <h6 className=''>Test your knowledge with these questions.</h6>
              <hr />
              <p>{currentIndex >= questions.length ? <div></div> : `${currentIndex+1} / ${questions.length}`}</p>
              <p className='pt-1'>{currentIndex < questions.length ? questions[currentIndex].question : 'Quiz completed'}</p>
              {currentIndex >= questions.length ? (
                <p>You have completed your quiz. Your score is {score}</p>
              ) : (
                questions[currentIndex].options.map((option, index) => (
                  <button
                    className="btn btn-primary m-1"
                    key={index}
                    onClick={() => {
                      setCurrentIndex(prevIndex => prevIndex + 1);
                      checkScore(option);
                    }}
                  >
                    {option}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      );
      
      
}