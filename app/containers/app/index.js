import React from 'react';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const children = this.props.children;

        return (
            <div className="main">
                {children}
            </div>
        );
    }
}

export default AppContainer;