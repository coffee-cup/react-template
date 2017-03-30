import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    increment(amount) {
        this.setState({
            count: this.state.count + amount
        });
    }

    render() {
        const { count } = this.state;
        return (
            <div className="counter f1">
                <span className="pointer" onClick={() => this.increment(-1)}>
                    -
                </span>
                <span className="ph4">{count}</span>
                <span className="pointer" onClick={() => this.increment(1)}>
                    +
                </span>
            </div>
        );
    }
}

export default Counter;
