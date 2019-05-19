import content from './content'
const home =()=>import('@/views/home')
const notfound =()=>import('@/views/notfound')
const login =()=>import('@/views/login')
export default[{
  path:'/',
  redirect:'/home'
},{
  path:'/home',
  component:home,
  children:content
},{
  path:'*',
  redirect:'/404'
},{
  path:'/404',
  component:notfound
},{
  path:'/login',
  component:login
}]