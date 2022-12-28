import React from 'react';
import * as style from './styles';
import { TextFieldProps } from './TextFieldProps';

const TextField = (
    props: React.PropsWithChildren<TextFieldProps>,
    { ...rest }
): JSX.Element => {
    const layout = `${String(style.Layout)}`;
    const inputLayout = `${String(props.inputSize)} ${String(
        props.status
    )} ${String(style.LayoutSize)}`;
    const styles = `${String(style.TextFieldStyle)}`;
    return (
        <form action="" onSubmit={props.onSubmit}>
            <div className={layout}>
                <label style={{ fontSize: props.fontSize }} htmlFor="name">
                    {props.textLabel}
                </label>
                <div
                    className={inputLayout}
                    style={{ borderRadius: props.borderRadius }}
                >
                    <i>
                        <img
                            style={{ height: props.height }}
                            src={props.icon}
                            alt="icon"
                        />
                    </i>
                    <input
                        className={styles}
                        style={{ fontSize: props.fontSize, width: props.width }}
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
