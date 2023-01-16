import { ACTIONS } from "./App"

export default function Digit({ dispatch, digit }) {
  return (
    <button
      // handleclick event and dispatch the action type and payload with require digit 
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}
