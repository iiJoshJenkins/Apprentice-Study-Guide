import React, { Component } from "react";
import "./Questions.css";
export default class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: props.questions.default,
      questionNumber: 0,
      score: 0
    };
    this.handlePress = this.handlePress.bind(this);
    this.getValueFromLetter = this.getValueFromLetter.bind(this);
  }
  getValueFromLetter(letter) {
    switch (letter) {
      case "A":
        return 0;
      case "B":
        return 1;
      case "C":
        return 2;
      case "D":
        return 3;
      default:
        console.error("There's something wrong with your correctAnswer value");
    }
  }
  handlePress(e) {
    const currentQuestion = this.state.questions[this.state.questionNumber];
    if (
      currentQuestion.answers[
        this.getValueFromLetter(currentQuestion.correctAnswer)
      ] === e.target.innerHTML
    ) {
      console.log(this.state.score);
      this.setState({ score: this.state.score + 1 });
    }
    this.setState({ questionNumber: this.state.questionNumber + 1 });
  }

  render() {
    return (
      <div>
        {this.state.questionNumber < this.state.questions.length && (
          <div className="Question_Container">
            <h3>{this.state.questions[this.state.questionNumber].question}</h3>
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
        {this.state.questionNumber >= this.state.questions.length && (
          <div className="Question_Container">
            <h1> You've completed all the questions </h1>
            <h3>
              Your score was : {this.state.score}/{this.state.questions.length}
            </h3>
          </div>
        )}
      </div>
    );
  }
}
