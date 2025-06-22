import { BrowserRouter,Routes,Route, } from 'react-router-dom'
import './App.css'
import { Signup } from './pages/signupPage'
import { LoginPage } from './pages/loginPage'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import {Loader} from "lucide-react"
import { ProfilePage } from './pages/profilePage'
import { Toaster } from 'react-hot-toast'
import {VerificationPage} from './pages/verificationPage'
import { Message } from './pages/message'
import { NameTemplate } from './components/nameTemaplate'
import { SearchInput } from './components/searchInput'
import { MessageTemplate } from './components/messageTeamplate'
import { Sidebar } from './components/sidebar'
import { useThemeStore } from './store/useThemeStore'
import { ThemePage } from './pages/themePage'
function App() {
  const {authUser,checkAuth,isCheckingAuth,isVerified} = useAuthStore()

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
  const {theme} = useThemeStore()
  return <div data-theme={theme}>
   
   <BrowserRouter>
                  <Routes>
                    <Route element={authUser?<ProfilePage/>:<Signup/>} path='/'/>
                    <Route element={authUser?<ProfilePage/>:<LoginPage/>} path='/login'/>
                    <Route element={<ProfilePage/>} path='/profile'/>
                    <Route element={<Message/>} path='/message'/>
                    <Route element={<NameTemplate/>} path='/t'/>
                    <Route element={<SearchInput/>} path='/i'/>
                    <Route element={<MessageTemplate/>} path='/m'/>
                    <Route element={<Sidebar/>} path='/sidebar'/>
                    <Route element={<ThemePage/>} path='/theme'/>
                    <Route element={isVerified?<ProfilePage/>:<VerificationPage/>} path='/verifyemail'/>
                  </Routes>
                  <Toaster/>
        </BrowserRouter> 
         
  </div>
}

export default App
