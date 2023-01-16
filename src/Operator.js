import { ACTIONS } from "./App"

export default function Operator({ dispatch, operation }) {
  return (
    <button 
      // handleclick event and dispatch the action type and payload with require operator 
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}
