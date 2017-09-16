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


exports.decorateConfig = config => {
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
        `,
        css: `
            ${config.css || ''}
            ::selection {
                background: ${foregroundColor} !important;
            }
        `
    });
};