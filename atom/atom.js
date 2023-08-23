import {atom} from 'recoil'

export const linkState = atom({
    key: 'LinkState',
    default: ["home","pricing", "projects"],
  });

export const showNavbarState = atom({
    key: "ShowNavbarState",
    default: true,
})
export const lastScrollYState = atom({
    key: "LastScrollYState",
    default: 0,
})
export const navBackgroundState = atom({
    key: "NavBackgroundState",
    default: false,
})