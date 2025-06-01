import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/signupPage'
import { LoginPage } from './pages/loginPage'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import {Loader} from "lucide-react"
import { ProfilePage } from './pages/profilePage'
import { Toaster } from 'react-hot-toast'
function App() {
  const {authUser,checkAuth,isCheckingAuth} = useAuthStore()

  useEffect(()=>{
  checkAuth()
  },[checkAuth])
  
  // console.log(authUser)

  if(authUser && isCheckingAuth){
    return (
      <div className='flex items-center justify-center h-screen bg-white'>
        <Loader className="size-10 animate-spin text-indigo-600 "/>
      </div>
    )
  }
  
  return <BrowserRouter>
                  <Routes>
                    <Route element={authUser?<ProfilePage/>:<Signup/>} path='/signup'/>
                    <Route element={<LoginPage/>} path='/signin'/>
                    <Route element={authUser?<ProfilePage/>:<Navigate to={'/signin'}/>} path='/profile'/>
                  </Routes>
                  <Toaster/>
        </BrowserRouter>
  


}

export default App
