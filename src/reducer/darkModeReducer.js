
export default function darkModeReducer(state, action) {
  switch (action.type) {
    case "ON":
      return {darkMode: true};
    case "OFF":
      return {darkMode: false};
    default:
      throw new Error();
  }
}