
import MasterLayout from './Shared/Component/MasterLayout/MasterLayout'
import Login from './AuthModule/Component/Login/Login'
import VerifyAccount from './AuthModule/Component/VerifyAccount/VerifyAccount'
import Register from './AuthModule/Component/Register/Register'
import RestPass from './AuthModule/Component/Restpass/Restpass'
import Forgetpass from './AuthModule/Component/Forgetpass/Forgetpass'
import RecipeData from './RecipeModule/component/RecipeData/RecipeData'
import CategoryData from './CategoriesModule/Component/CategoryData/CategoryData'
import Categories from './CategoriesModule/Component/Categories/Categories'
import NotFound from './Shared/Component/NotFound/NotFound'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RecipeList from './RecipeModule/component/RecipeList/RecipeList'
import AuthLayout from './Shared/Component/AuthLayout/AuthLayout'
import UserList from './UsersModule/Component/UserList/UserList'
import { ToastContainer } from 'react-toastify';

function App() {
 
  const routes = createBrowserRouter([
    {
    path:'/',
    element:<AuthLayout/>,
    errorElement:<NotFound/>,
    children:[
      {index:true, element:<Login/>},
      {path:'login', element:<Login/>},
      {path:'verify-account', element:<VerifyAccount/>},
      {path:'register', element:<Register/>},
      {path:'rest-pass', element:<RestPass/>},
      {path:'forget-password', element:<Forgetpass/>},
     
    ]}, 
       {
      path:'dashboard',
      element:<MasterLayout/>,
      errorElement:<NotFound/>,
      children:[
        // {index:true, element:<Dashboard/>},
        {path:'recipes', element:<RecipeList/>},
        {path:'recipe-data', element:<RecipeData/>},
        {path:'category', element:<Categories/>},
        {path:'category-data', element:<CategoryData/>},
        { path: 'users', element:<UserList/>}
      ]

    }

  ])


  return (
    <>
  <RouterProvider router={routes}></RouterProvider>
   <ToastContainer />
    </>
  )
}

export default App
