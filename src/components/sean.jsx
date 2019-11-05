import React from 'react';
import { CSSTransition } from 'react-transition-group';
import '../styles/animation.css';

class Word extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mounted: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({mounted: true})
        }, this.props.startFadeInTime)
    }

    render() {
        return (
            <CSSTransition
            in={this.state.mounted}
            classNames="word"
            timeout={1000}>
                    <div>
                        {this.state.mounted &&
                            this.props.children
                        }
                    </div>
            </CSSTransition>
        );
    }
}

class Sean extends React.Component {
    render() {
        return (
            <div className="sean">
                {['Simple',
                  'Elegant',
                  'Accurate',
                  'Neat'].map((word, i) => {
                    return (
                    <Word startFadeInTime={i*1000}>
                        {word}
                    </Word>
            )
        })}
            </div>
        )
    }
}

export default Sean;