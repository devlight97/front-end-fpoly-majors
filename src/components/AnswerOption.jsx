import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import {
  updateListAnswer,
} from '@containers/TestingTab/action';

import {
  WrapAnswerOption,
  LabelAnswerOption,
  SpanAnswerOption,
  RadioAnswerOption,
} from './styled';

class AnswerOption extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps(nextProps) {
    console.log('next props', nextProps);
  }

  render() {
    const {
      answer,
      currentQuestion,
      listAnswer,
    } = this.props;
    return (
      <WrapAnswerOption>
        <LabelAnswerOption>
          {answer.content}
          <RadioAnswerOption
            ref="radio-answer-option"
            type="radio"
            name="answer-option"
            value={answer.id}
            onChange={(evt) => {
              listAnswer.set(currentQuestion.id, answer.id);
              const radio = ReactDOM.findDOMNode(this.refs['radio-answer-option']);
              radio.checked = true;
            }}
            checked={answer.id === 1 ? true : null}
          />
          <SpanAnswerOption />
        </LabelAnswerOption>
      </WrapAnswerOption>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listAnswer: state.testingTab.listAnswer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateListAnswer: listAnswer => dispatch(updateListAnswer(listAnswer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOption);
