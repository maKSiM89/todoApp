import React from 'react';
import TodoItem from '../TodoItem/todo-item';
import {connect} from 'react-redux';
import {firebase as FirebaseTools, helpers} from 'redux-react-firebase';

import Container from 'muicss/lib/react/container';
import Appbar from 'muicss/lib/react/appbar';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

const {dataToJS, isLoaded} = helpers;

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: ''
        };

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.renderTodoList = this.renderTodoList.bind(this);
        this.handleAddClick = this.handleAddClick.bind(this);
    }

    render() {
        let isButtonDisabled = this.state.inputText === '';

        return (
            <div>
                <Appbar className="mui--text-center mui--z4">
                    <h2 className="mui--appbar-height mui--appbar-line-height"  style={{ marginTop: '0px' }}>
                        Tiny TODO Application
                        </h2>
                </Appbar>
                <Container>
                    <Form className="mui--text-center">
                        <legend>Add todo to your list</legend>
                        <Input
                            name="inputText"
                            value={this.state.inputText}
                            onChange={this.handleChangeInput}
                            label="Enter todo description"
                            floatingLabel={true}
                        />
                        <Button
                            variant="fab"
                            color="primary"
                            onClick={this.handleAddClick}
                            disabled={isButtonDisabled}
                            > +
                        </Button>
                    </Form>

                    <ul className="mui-list--unstyled">
                        {this.renderTodoList()}
                    </ul>
                </Container>
            </div>
        );
    }

    renderTodoList() {
        let todos = this.props.todos;

        if (typeof todos === 'undefined') {
            return null;
        } else {
            return this.props.todos.map((item, index) => {
                return (
                    <TodoItem
                        toggle={() => this.toggle(index)}
                        remove={() => this.remove(index)}
                        item={item}
                        key={index}
                    />
                );
            });
        }
    }

    remove(index) {
        const actions = this.props.actions;
        actions.removeTodoItem(index);
    }

    toggle(index) {
        this.props.actions.toggleTodoItem(index);
    }

    add(text) {
        const firebase = this.props.firebase;
        this.props.actions.addTodoItem(text);

        /*firebase.push('/todos', {
            text,
            completed: false
        });*/
    }

    handleAddClick(e) {
        e.preventDefault();

        if (this.state.inputText.length > 0) {
            this.add(this.state.inputText);

            this.setState({
                inputText: ''
            });
        }
    }

    handleChangeInput(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
}

export default TodoList;