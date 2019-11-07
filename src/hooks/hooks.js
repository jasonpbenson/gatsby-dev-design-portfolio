import { useState } from "react"

export default function useLocalState(localItem) {
  const [local, setState] = useState(localStorage.getItem(localItem))

  function setLocalState(newItem) {
    if (typeof window !== "undefined") {
      localStorage.setItem(localItem, newItem)
      setState(newItem)
    }
  }

  return [local, setLocalState]
}
