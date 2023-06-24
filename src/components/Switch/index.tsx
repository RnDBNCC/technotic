import React, { PropsWithChildren } from 'react';
import { SwitchProps } from './SwitchProps';
import { styleSwitch } from './style';
import { cx } from '@emotion/css';

const Switch = (props: PropsWithChildren<SwitchProps>): JSX.Element => {
    const { size } = props;

    const switchSize =
        size !== undefined ? `${size} ${styleSwitch}` : cx(styleSwitch);

    return (
        <label className={`${switchSize}`}>
            <input type="checkbox" />
            <span className="slider"></span>
            <span className="labels" data-on="ON" data-off="OFF"></span>
        </label>
    );
};

export default Switch;
