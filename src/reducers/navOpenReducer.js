export default function isNavActive(state = { navOpen: false }, action) {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return Object.assign({}, state, {
        navOpen: !state.navOpen,
      });
    default:
      return state;
  }
}
