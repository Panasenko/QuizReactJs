import React, {Component} from 'react'
import classes from './QuizCreator.css'
import Button from '../../components/UI/Button/Button'
import Input from '../../components/UI/Input/Input'
import {createControl} from '../../from/formFramework'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

function createOptionControl(number) {
    return createControl({
        label: `Вариант ${number}`,
        errorMassege: 'Значение не может быть пустым',
        id: number
    }, {required: true})
}

function createFormControl() {
    return {
        question: createControl({
            label: 'Введите вопрос',
            errorMassege: 'Вопрос не может быть пустым'
        }, {required: true}),
        option1: createOptionControl(1),
        option2: createOptionControl(2),
        option3: createOptionControl(3),
        option4: createOptionControl(4)
    }
}

class QuizCreator extends Component {

    state = {
        quiz: [],
        formControls: createFormControl()
    }

    onSubmitHandler = event => {
        event.preventDefault()
    }

    addQuestionHandler = () => {}

    createQuizHandler = () => {}

    changeHandler = (value, controlName) => {}

    renderControls() {
        return Object
            .keys(this.state.formControls)
            .map((controlName, index) => {
                const control = this.state.formControls[controlName];
                return (
                    <Auxiliary key={"Auxiliary" + index}>
                        <Input
                            key={controlName + index}
                            type={control.type}
                            value={control.value}
                            valid={control.valid}
                            label={control.label}
                            touched={control.touched}
                            errorMassage={control.errorMassage}
                            shouldValidate={!!control.validation}
                            onChange={event => this.changeHandler(event.target.value, controlName)} />
                        
                        {index === 0 ? <hr /> : null}
                    </Auxiliary>
                )

            })

    }

    render() {
        return (
            <div className={classes.QuizCreator}>
                <div>
                    <h1>Создание теста</h1>
                    <form onSubmit={this.onSubmitHandler}>

                        {this.renderControls()}

                        <select></select>

                        <Button type="primary" onClick={this.addQuestionHandler}>
                            Добавить вопрос
                        </Button>

                        <Button type="success" onClick={this.createQuizHandler}>
                            Создать тест
                        </Button>
                    </form>
                </div>
            </div>
        )
    }

};

export default QuizCreator;
