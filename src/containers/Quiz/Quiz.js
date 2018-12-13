import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'

class Quiz extends Component {

    state = {
        results: {},
        isFinished: false,
        ActiveQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'Какого цвета небо?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Черное', id: 1},
                    {text: 'Голубое', id: 2},
                    {text: 'Красное', id: 3},
                    {text: 'Феолетовое', id: 4}
                ]
            },{
                question: 'Какой год основания Санкт-Питербурга?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1702', id: 2},
                    {text: '1703', id: 3},
                    {text: '1803', id: 4}
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        if(this.state.answerState){
            const key = Object.keys(this.state.answerState)[0];
            if(this.state.answerState[key] === 'success'){
                return
            }
        }

        const question = this.state.quiz[this.state.ActiveQuestion];
        const results = this.state.results;

        if (question.rightAnswerId === answerId){
            if (!results[question.id]){
                results[question.id] = 'success'
            }

            this.setState({
                answerState: {[answerId]: 'success'},
                results
            });
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()){
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        ActiveQuestion: this.state.ActiveQuestion + 1,
                        answerState: null
                    })
                }
                window.clearTimeout(timeout)
            }, 1000)

        } else {
            results[question.id] = 'error';
            this.setState({
                answerState: {[answerId]: 'error'},
                results
            });
        }

    };

    isQuizFinished() {
        return this.state.ActiveQuestion + 1 === this.state.quiz.length
    }

    retryHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            ActiveQuestion: 0,
            answerState: null
        })
    }


    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Please, answer all questions</h1>
                    {
                        this.state.isFinished
                        ? <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                        />
                        : <ActiveQuiz
                            onAnswerClick = {this.onAnswerClickHandler}
                            question = {this.state.quiz[this.state.ActiveQuestion].question}
                            answers={this.state.quiz[this.state.ActiveQuestion].answers}
                            QuizLength={this.state.quiz.length}
                            AnswerNumber={this.state.ActiveQuestion + 1}
                            state={this.state.answerState}
                        />
                    }
                </div>
            </div>
        )

    }
}

export default Quiz