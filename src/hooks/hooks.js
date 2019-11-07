import { useState } from "react"

export default function useLocalState(localItem) {
  const [local, setState] = useState(
    typeof window !== "undefined" ? localStorage.getItem(localItem) : ""
  )

  function setLocalState(newItem) {
    if (typeof window !== "undefined") {
      localStorage.setItem(localItem, newItem)
      setState(newItem)
    }
  }

  return [local, setLocalState]
}
