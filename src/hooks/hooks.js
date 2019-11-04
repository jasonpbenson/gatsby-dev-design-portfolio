import { useState } from "react"

export function useLocalState(localItem) {
  const [local, setState] = useState(undefined)

  function setLocalState(newItem) {
    if (typeof window !== "undefined") {
      localStorage.setItem(localItem, newItem)
      setState(newItem)
    }
  }

  return [local, setLocalState]
}
