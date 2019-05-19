const list =()=>import('@/views/list')
const product =()=>import('@/views/product')
export default[{
  path:'/list',
  component:list,
  meta:{
    isNav:true,
    title:'列表'
  }
},{
  path:'/product',
  component:product,
  meta:{
    isNav:true,
    title:'产品'
  }

}]