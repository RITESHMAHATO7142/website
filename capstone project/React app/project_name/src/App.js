import { Component } from "react";
import AddTodo from "./component/AddTodo";
class app extends Component{
render() {
 return (
   <div className="container">
     <h1 className='text-center'>TODO App in ReactJs</h1>
     <AddTodo/>
   </div>
 );
}
}
export default app

