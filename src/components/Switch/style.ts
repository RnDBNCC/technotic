import { css } from '@emotion/css';

export const stySwitch = css`
    --primary: #22539f;

    position: relative;
    display: inline-block;
    width: var(--width);
    height: var(--height);
    border-radius: var(--height);

    .slider {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: var(--height);
        background-color: #ccc;
        transition: 0.3s all ease-in-out;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: calc(var(--height));
            height: calc(var(--height));
            background-color: #f7f7f7;
            border-radius: var(--height);
            transition: 0.3s all ease-in-out;
        }
    }

    input {
        display: none;
    }

    input:checked + .slider {
        background-color: var(--primary);

        &::before {
            transform: translateX(calc(var(--width) - var(--height)));
        }
    }

    .labels {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        transition: 0.3s all ease-in-out;
        overflow: hidden;

        &::after {
            content: attr(data-off);
            position: absolute;
            color: #fff;
            right: 5px;
            opacity: 1;
            transition: 0.3s all ease-in-out;
        }

        &::before {
            content: attr(data-on);
            position: absolute;
            color: #fff;
            left: calc(var(--width) / -2);
            opacity: 0;
            transition: 0.3s all ease-in-out;
        }
    }

    input:checked ~ .labels::after {
        opacity: 0;
        transform: translateX(calc(var(--width) - var(--height)));
    }

    input:checked ~ .labels::before {
        opacity: 1;
        transform: translateX(calc(var(--width) - var(--height)));
    }

    &.small {
        --width: 40px;
        --height: calc(var(--width) / 2.5);

        .labels {
            top: 2px;
            font-size: 8px;
        }
    }

    &.medium {
        --width: 70px;
        --height: calc(var(--width) / 2.5);

        .labels {
            top: 3.5px;
            font-size: 14px;
        }
    }

    &.large {
        --width: 100px;
        --height: calc(var(--width) / 2.5);

        .labels {
            top: 6px;
            font-size: 18px;
        }
    }
`;

export const stySwitchDefault = css`
    --width: 70px;
    --height: calc(var(--width) / 2.5);
    --primary: #22539f;

    position: relative;
    display: inline-block;
    width: var(--width);
    height: var(--height);
    border-radius: var(--height);

    .slider {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: var(--height);
        background-color: #ccc;
        transition: 0.3s all ease-in-out;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: calc(var(--height));
            height: calc(var(--height));
            background-color: #f7f7f7;
            border-radius: var(--height);
            transition: 0.3s all ease-in-out;
        }
    }

    input {
        display: none;
    }

    input:checked + .slider {
        background-color: var(--primary);

        &::before {
            transform: translateX(calc(var(--width) - var(--height)));
        }
    }

    .labels {
        position: absolute;
        top: 3.5px;
        left: 0;
        width: 100%;
        height: 100%;
        font-size: 14px;
        transition: 0.3s all ease-in-out;
        overflow: hidden;

        &::after {
            content: attr(data-off);
            position: absolute;
            color: #fff;
            right: 5px;
            opacity: 1;
            transition: 0.3s all ease-in-out;
        }

        &::before {
            content: attr(data-on);
            position: absolute;
            color: #fff;
            left: calc(var(--width) / -2);
            opacity: 0;
            transition: 0.3s all ease-in-out;
        }
    }

    input:checked ~ .labels::after {
        opacity: 0;
        transform: translateX(calc(var(--width) - var(--height)));
    }

    input:checked ~ .labels::before {
        opacity: 1;
        transform: translateX(calc(var(--width) - var(--height)));
    }
`;
