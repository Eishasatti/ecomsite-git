const cart=[];
const handlecart=(state= cart,action)=>{
const product=action.payload;
switch(action.type){
    case ADDITEM:
       const exist=state.find((x)=>x.id===product.id);
       if(exist){
        return state.map((x)=>
            x.id===product.id ?{...x,qty:x.qty+1}:x
        );
       }
    break;
case DELITEM:
    break;
    default:
        break;
}
}
export default handlecart;