import React, { useState, useEffect } from "react"
import facade from "./apiFacade"
import Content from "./components/Content";


function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({username: "", roles: ""});
  

    const logout = () => {  
        facade.logout()
        setLoggedIn(false)
        setUser({username: "", roles: ""})
    } 

    const login = (user, pass) => { 
        facade.login(user,pass).then(() => {
            const token = facade.readJWTTokken(facade.getToken());
            setUser({username: token.username, roles: token.roles});
            setLoggedIn(true);
        })
    } 

    return (
        <div className="APP">
            <Content user={user} loggedIn={loggedIn} logout={logout} login={login}  />
        </div>
    )
}
export default App;
