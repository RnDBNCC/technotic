import React from 'react';
import * as style from './styles';
import { CheckBoxProps } from './CheckBoxProps';

const CheckBox = (
    props: React.PropsWithChildren<CheckBoxProps>
): JSX.Element => {
    const className = `${String(style.CheckBoxContainerStyle)}`;
    // ${String(props.cbType)} style={{ borderRadius: props.cbSize }}
    return (
        <div>
            <input
                type="checkbox"
                style={{ width: props.cbSize, height: props.cbSize }}
                className={className}
            />
            <label style={{ fontSize: props.fontSize }}>
                {props.textLabel}
            </label>
        </div>
    );
};

export default CheckBox;
