import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let textDecorationStyle = this.props.item.completed ? 'line-through' : 'none';

        return (
            <li className="mui--divider-top" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '5px'
            }}>
                <div className="mui-checkbox">
                    <label style={{ textDecoration: textDecorationStyle }}>
                        <input type="checkbox" value="" checked={this.props.item.completed} onChange={this.props.toggle}/>
                        {this.props.item.text}
                    </label>
                </div>
                <button
                    onClick={this.props.remove}
                    className="mui-btn mui-btn--danger mui-btn--fab mui-btn--small ">
                    X<span className="mui-btn__ripple-container"><span className="mui-ripple"></span></span>
                </button>
            </li>
        );
    }
}

export default TodoItem;