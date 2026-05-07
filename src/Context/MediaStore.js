import { createContext, useEffect, useState } from "react";

export let mediaContext = createContext()

export default function MediaContextProvider(props) {
  const [userData, setUserData] = useState(null)

  let saveUserData = () => {
    const token = localStorage.getItem("token")
    setUserData(token)
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      saveUserData()
    }
  }, [])

  let LogOut = () => {
    localStorage.removeItem("token")
    setUserData(null)
  }

  return (
    <mediaContext.Provider value={{ saveUserData, userData, LogOut }}>
      {props.children}
    </mediaContext.Provider>
  )
}
