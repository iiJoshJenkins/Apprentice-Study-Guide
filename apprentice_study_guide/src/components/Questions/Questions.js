import React, { Component } from "react";
import "./Questions.css";
export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: props.questions.default,
      questionNumber: 0,
      score: 0,
      incorrectAnswers: [],
      showQuestions: false
    };
    this.handlePress = this.handlePress.bind(this);
    this.getLetterOrValue = this.getLetterOrValue.bind(this);
    this.restartQuiz = this.restartQuiz.bind(this);
    this.showIncorrectQuestions = this.showIncorrectQuestions.bind(this);
  }

  getLetterOrValue(value) {
    switch (value) {
      case 0:
        return "A";
      case 1:
        return "B";
      case 2:
        return "C";
      case 3:
        return "D";
      case "A":
        return 0;
      case "B":
        return 1;
      case "C":
        return 2;
      case "D":
        return 3;
      default:
        console.error("Something wen't wrong, please try again!");
    }
  }
  handlePress(e) {
    const currentQuestion = this.state.questions[this.state.questionNumber];
    const userAnswer = this.getLetterOrValue(
      currentQuestion.answers.indexOf(e.target.innerHTML)
    );

    if (currentQuestion.correctAnswer === userAnswer) {
      this.setState({ score: this.state.score + 1 });
    } else {
      let _incorrectAnswers = this.state.incorrectAnswers;
      _incorrectAnswers.push([currentQuestion, { userAnswer: userAnswer }]);
      this.setState({ incorrectAnswers: _incorrectAnswers });
    }
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  }

  restartQuiz() {
    this.setState({
      questionNumber: 0,
      score: 0,
      incorrectAnswers: [],
      showQuestions: false
    });
  }

  showIncorrectQuestions() {
    this.setState({ showQuestions: true });
  }

  render() {
    return (
      <div>
        {this.state.showQuestions === false &&
          this.state.questionNumber < this.state.questions.length && (
            <div className="Question_Container">
              <h3>
                {this.state.questions[this.state.questionNumber].question}
              </h3>
              <ul className="Answer_List">
                {this.state.questions[this.state.questionNumber].answers.map(
                  e => {
                    return (
                      <li key={e}>
                        <button className="Answer" onClick={this.handlePress}>
                          {e}
                        </button>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          )}
        {this.state.showQuestions === false &&
          this.state.questionNumber >= this.state.questions.length && (
            <div className="Question_Container">
              <h1> You've completed all the questions </h1>
              <h3>
                Your score was : {this.state.score}/
                {this.state.questions.length}
              </h3>
              <button onClick={this.restartQuiz}>Try again?</button>
              <button onClick={this.showIncorrectQuestions}>
                Show me what I did wrong
              </button>
            </div>
          )}
        {this.state.showQuestions && (
          <span>
            {this.state.incorrectAnswers.map((e, index) => {
              const questionObj = e[0];
              const userAnswer = e[1].userAnswer;
              return (
                <div key={e + index}>
                  <h3> {questionObj.question} </h3>
                  <ul>
                    {questionObj.answers.map((answer, index) => {
                      if (index === this.getLetterOrValue(userAnswer)) {
                        return (
                          <li
                            key={answer + index}
                            style={{ backgroundColor: "red" }}
                          >
                            {answer}
                          </li>
                        );
                      } else if (
                        index ===
                        this.getLetterOrValue(questionObj.correctAnswer)
                      ) {
                        return (
                          <li
                            key={answer + index}
                            style={{ backgroundColor: "green" }}
                          >
                            {answer}
                          </li>
                        );
                      } else return <li key={answer + index}>{answer}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
            <button onClick={this.restartQuiz}>Try again?</button>
          </span>
        )}
      </div>
    );
  }
}
