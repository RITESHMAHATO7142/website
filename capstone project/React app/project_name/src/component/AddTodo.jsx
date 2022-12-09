import { Component } from "react";

class Addtodo extends Component{

constructor(){
    super()
    this.state ={
        'myData':''
    }
}

    myTodoFunction = (event) => {
     this.setState({myData:event.target.value} )
    }
render() {
 return (
   <div>
    <form>
    <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="TODO" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <button type="submit" className="btn btn-primary">Add TODO</button>
</div>
  <div className="mb-3">
    
    <input type="text" 
    class="form-control"
     id="exampleInputtext"
     placeholder='Todo'
     onchange={this.myTodoFunction}/>
</div>
  <button type="submit" className="btn btn-primary">Add TODO</button>
</form>

     
   </div>
 );
}
}
export default Addtodo

