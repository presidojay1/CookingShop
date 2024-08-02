export const initialState = {
  isDropdownOpen: false,
  isLoginDropdownOpen: false,
};

export function dropdownReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_DROPDOWN":
      return {
        ...state,
        isDropdownOpen: !state.isDropdownOpen,
      };
    case "TOGGLE_LOGIN_DROPDOWN":
      return {
        ...state,
        isLoginDropdownOpen: !state.isLoginDropdownOpen,
      };
    case "CLOSE_DROPDOWN":
      return {
        ...state,
        isDropdownOpen: false,
      };
    case "CLOSE_ALL":
      return initialState;
    default:
      return state;
  }
}
