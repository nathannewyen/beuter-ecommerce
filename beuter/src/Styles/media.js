import {
    css
} from 'styled-components';

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2000px',
    desktopL: '2560px',
    giantDesktop: '2800px'
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
    // use em in breakpoints to work properly cross-browser and support users
    // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
    const emSize = sizes[label] / 16;
    accumulator[label] = (...args) => css `
      @media (max-width: ${emSize}em) {
        ${css(...args)};
      }
    `;
    return accumulator;
}, {});

export default media;