'use strict';

const color = require('color');

// Syntax scheme
var backgroundColor     = 'rgb(33, 47, 60)';
const foregroundColor   = 'rgb(164, 179, 194)';
const cursorColor       = 'rgba(255, 255, 255, 0.8)';
const borderColor       = '#1e2837';
var colors            = {
    black:              backgroundColor,
    red:                '#F75752',
    green:              '#54F48D',
    yellow:             '#E7F073',
    blue:               '#4ABCEF',
    magenta:            '#FE6EC5',
    cyan:               'rgb(143, 229, 246)',
    white:              foregroundColor,
    lightBlack:         'rgb(104, 104, 104)',
    lightRed:           'rgb(255, 103, 98)',
    lightGreen:         'rgb(100, 248, 153)',
    lightYellow:        'rgb(244, 250, 167)',
    lightBlue:          'rgb(98, 206, 255)',
    lightMagenta:       'rgb(255, 116, 200)',
    lightCyan:          'rgb(158, 233, 247)',
    lightWhite:         foregroundColor,
};
const selectionColor     = color(colors.foregroundColor).fade(0.6).string();
const selectionColorText = color(colors.magenta).string();
const scrollbars = {
    light: '#455A6D',
    dark: '#273848'
}

exports.decorateConfig = config => {

    const hyperQuickStyle = Object.assign({
        windowBlur: false,
        scrollbars: {
            light: scrollbars.light || 'transparent',
            dark: scrollbars.dark || 'transparent'
        }
    }, config.hyperQuickStyle);

    if(hyperQuickStyle.windowBlur === true){
        exports.onWindow = (browserWindow) => {
            browserWindow.setVibrancy('dark');
        };
        
        backgroundColor = color(backgroundColor).darken(0.20).fade(0.10).string();
        colors.black = backgroundColor;
    }

    return Object.assign({}, config, {
        foregroundColor,
        backgroundColor,
        colors,
        selectionColor: config.selectionColor || selectionColor, 
        selectionColorText: config.selectionColorText || selectionColorText, 
        borderColor: config.borderColor || borderColor,
        cursorColor: config.cursorColor || cursorColor,
        cursorShape: config.cursorShape || 'BEAM',
        fontSize: config.fontSize || 13,
        fontFamily: config.fontFamily || '"Roboto Mono for Powerline", "Fira Code"',
        termCSS: `
            x-row{ line-height:14px },
            ${config.termCSS || ''}
            ::selection {
                background: ${config.selectionColor} !important;
                color: ${config.selectionColorText} !important;
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
                background: ${config.selectionColor} !important;
                color: ${config.selectionColorText} !important;
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