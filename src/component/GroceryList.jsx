import React from "react";
export default class GroceryList extends React.Component{
    render(){
        return <ul>
           {this.props.items.map((item, i)=>{
               return <li key={item}>{ item }
               <button onClick={this.props.handleDelete.bind(null, item)}>
                   Delete
               </button>
               </li>
           })} 
        </ul>
    }
}
