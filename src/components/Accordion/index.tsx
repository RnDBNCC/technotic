import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { styAccordion } from './style';
import { AccordionProps } from './AccordionProps';
import { cx } from '@emotion/css';

interface AccordionState {
    isActive: boolean;
}

class Accordion extends Component<AccordionProps, AccordionState> {
    state: AccordionState = {
        isActive: false,
    };

    toggleAccordion: () => void = () => {
        this.setState((prevState) => ({ isActive: !prevState.isActive }));
    };

    render(): JSX.Element {
        const { isActive } = this.state;
        const { question, answer } = this.props;
        return (
            <div className={styAccordion}>
                <div
                    className={cx('faq', { active: isActive })}
                    onClick={this.toggleAccordion}
                >
                    <div className="question">
                        <h3>{question}</h3>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            size="2x"
                            className="icon"
                        />
                    </div>

                    <div className="answer">
                        <p>{answer}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Accordion;
