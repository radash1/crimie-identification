//customer routes
import Login from './pages/login'
import Addinfo from './pages/addinfo'
const authRoutes = [
  { path: "/login", component: Login },

]
const userRoutes = [
  { path: "/", component: Addinfo },
  
]

export { authRoutes,userRoutes};
