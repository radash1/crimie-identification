import React from "react"
import { authRoutes,userRoutes} from "./routes"
import { Switch, BrowserRouter as Router } from "react-router-dom"

import AuthLayout from "./layouts/AuthLayout"
import Authmiddleware from "./middlewares/AuthMiddleware"

const App = props => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={AuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
            />
          ))}

           {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={AuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}
     
        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;
