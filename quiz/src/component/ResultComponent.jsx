/* eslint-disable */
import React, { Component } from 'react';
import './resultComponent.css';

class ResultComponent extends Component {
  handleRetry = () => {
    this.props.navigateTo('home');
  }

  render() {
    return (
      <div className="result-container">
        <p className='title'>You need more practice!</p>
        <h1 className='your-score'>Your score is 20%</h1>
        <p className="score1">Total number of questions<span className='number'>15</span></p>   
        <p className='score2'>Number of attempted questions<span className='number'>10</span></p>
        <p className='score3'>Number of correct answers<span className='number'>5</span></p>
        <p className='score4'>Number of wrong answers<span className='number'>5</span></p>
        
        <button className="retry-button" onClick={this.handleRetry}>Retry Quiz</button>
      </div>
    );
  }
}

export default ResultComponent;

