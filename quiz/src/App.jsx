/* eslint-disable */
import React, { Component } from 'react';
import HomeComponent from './component/HomeComponent';
import QuizComponent from './component/QuizComponent';
import ResultComponent from './component/ResultComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentComponent: 'home'
    };
  }

  navigateTo = (componentName) => {
    this.setState({ currentComponent: componentName });
  }

  render() {
    const { currentComponent } = this.state;

    let componentToRender;
    if (currentComponent === 'home') {
      componentToRender = <HomeComponent navigateTo={this.navigateTo} />;
    } else if (currentComponent === 'quiz') {
      componentToRender = <QuizComponent navigateTo={this.navigateTo} />;
    } else if (currentComponent === 'result') {
      componentToRender = <ResultComponent navigateTo={this.navigateTo} />;
    }

    return (
      <div>
        {componentToRender}
      </div>
    );
  }
}

export default App;
