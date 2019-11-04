import { useState } from "react"

export function useLocalState(localItem, initialState) {
  const [local, setState] = useState(
    localStorage.getItem(localItem) || initialState
  )

  function setLocalState(newItem) {
    localStorage.setItem(localItem, newItem)
    setState(newItem)
  }

  return [local, setLocalState]
}
