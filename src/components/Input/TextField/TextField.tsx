import React from 'react';
import * as style from './styles';
import { TextFieldProps } from './TextFieldProps';

const TextField = (
    props: React.PropsWithChildren<TextFieldProps>,
    { ...rest }
): JSX.Element => {
    const layout = `${String(style.Layout)}`;
    const layout1 = `${String(props.inputSize)} ${String(style.LayoutSize)}`;
    const styles = `${String(style.TextFieldStyle)}`;
    return (
        <form action="" onSubmit={props.onSubmit}>
            <div className={layout}>
                <label style={{ fontSize: props.fontSize }} htmlFor="name">
                    {props.textLabel}
                </label>
                <div
                    className={layout1}
                    style={{ borderRadius: props.borderRadius }}
                >
                    <i>
                        <img
                            style={{ width: props.width }}
                            src={props.icon}
                            alt="icon"
                        />
                    </i>
                    <input
                        className={styles}
                        style={{ fontSize: props.fontSize }}
                        {...rest}
                        onChange={props.onInputChange}
                        id="name"
                        name="name"
                        type="text"
                        placeholder={props.textPlaceholder}
                    />
                </div>
                <button type="submit">submit</button>
            </div>
        </form>
    );
};

export default TextField;
