import React, { PropsWithChildren } from 'react';
import { SwitchProps } from './SwitchProps';
import { stySwitch, stySwitchDefault } from './style';
import { cx } from '@emotion/css';

const Switch = (props: PropsWithChildren<SwitchProps>): JSX.Element => {
    const { size } = props;

    const switchSize =
        size !== undefined ? `${size} ${stySwitch}` : cx(stySwitchDefault);

    return (
        <label className={`${switchSize}`}>
            <input type="checkbox" />
            <span className="slider"></span>
            <span className="labels" data-on="ON" data-off="OFF"></span>
        </label>
    );
};

export default Switch;
