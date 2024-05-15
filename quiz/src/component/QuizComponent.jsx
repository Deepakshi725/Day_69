/* eslint-disable */
import React, { Component } from 'react';
import './QuizComponent.css';

class QuizComponent extends Component {

  handleNext = () => {
    this.props.navigateTo('result');
  }

  handleQuit = () => {
    this.props.navigateTo('home');
  }

  render() {
    return (
      <div className="quiz-container">
        <div className="quiz-box">
          <h2>Question</h2>
          <p className="question-text">What is the capital of France?</p>
          <div className="options-container">
            <div className="option"><input type="radio" name="answer" /> A. Berlin</div>
            <div className="option"><input type="radio" name="answer" /> B. Madrid</div>
            <div className="option"><input type="radio" name="answer" /> C. Paris</div>
            <div className="option"><input type="radio" name="answer" /> D. Rome</div>
          </div>
          <div className="button-container">
            <button className="nav-button" onClick={this.handlePrevious}>Previous</button>
            <button className="nav-button" onClick={this.handleNext}>Next</button>
            <button className="nav-button" onClick={this.handleQuit}>Quit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuizComponent;

