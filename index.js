'use strict';

//const color = require('color');

// Syntax scheme
const backgroundColor   = '#212f3c';
const foregroundColor   = '#A4B3C2';
const cursorColor       = 'rgba(255, 255, 255, 0.8)';
const borderColor       = '#1e2837';
const colors            = {
    black:              backgroundColor,
    red:                '#F75752',
    green:              '#54F48D',
    yellow:             '#E7F073',
    blue:               '#4ABCEF',
    magenta:            '#FE6EC5',
    cyan:               '#8FE5F6',
    white:              foregroundColor,
    lightBlack:         '#686868',
    lightRed:           '#FF6762',
    lightGreen:         '#64F899',
    lightYellow:        '#F4FAA7',
    lightBlue:          '#62CEFF',
    lightMagenta:       '#FF74C8',
    lightCyan:          '#9EE9F7',
    lightWhite:         foregroundColor,
};
const scrollbars        = {
    light: '#455A6D',
    dark: '#273848'
}

exports.decorateConfig = config => {

    const hyperQuickStyle = Object.assign({
        scrollbars: {
            light: scrollbars.light || 'transparent',
            dark: scrollbars.dark || 'transparent'
        }
    }, config.hyperQuickStyle);

    return Object.assign({}, config, {
        foregroundColor,
        backgroundColor,
        borderColor,
        colors,
        cursorColor: config.cursorColor || cursorColor,
        cursorShape: config.cursorShape || 'BEAM',
        fontSize: config.fontSize || 13,
        fontFamily: config.fontFamily || '"Roboto Mono for Powerline", "Fira Code"',
        termCSS: `
            ${config.termCSS || ''}
            ::selection {
                background: ${foregroundColor} !important;
            }
            x-screen x-row {
                font-variant-ligatures: initial;
            }
            span {
                font-weight: normal !important;
            }
            ::-webkit-scrollbar-button {
                width: 0;
                height: 0;
                display: none;
            }
            ::-webkit-scrollbar-corner {
                background-color: transparent;
            }
            ::-webkit-scrollbar {
                width: 4px;
                height: 4px;
            }
            ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
                -webkit-border-radius: 8px;
            }
            ::-webkit-scrollbar-track {
                background-color: ${scrollbars.dark};
            }
            ::-webkit-scrollbar-thumb {
                background-color: ${scrollbars.light};
                -webkit-box-shadow: none;
            }
        `,
        css: `
            ${config.css || ''}
            ::selection {
                background: ${foregroundColor} !important;
            }
            ::-webkit-scrollbar-button {
                width: 0;
                height: 0;
                display: none;
            }
            ::-webkit-scrollbar-corner {
                background-color: transparent;
            }
            ::-webkit-scrollbar {
                width: 4px;
                height: 4px;
            }
            ::-webkit-scrollbar-track, ::-webkit-scrollbar-thumb {
                -webkit-border-radius: 8px;
            }
            ::-webkit-scrollbar-track {
                background-color: ${scrollbars.dark};
            }
            ::-webkit-scrollbar-thumb {
                background-color: ${scrollbars.light};
                -webkit-box-shadow: none;
            }
        `
    });
};