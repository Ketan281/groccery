import React from "react";
import GroceryList from "./GroceryList";

export default class GroceryInput extends React.Component{
    constructor(){
        super();
        this.state = {text: '', items:[]}
    }
    handleDelete(d){
        var newItems = this.state.items.filter((_item)=>{
            return _item !== d
        });
        this.setState({items:newItems})
    }
    handleSubmit(event){
        event.preventDefault();
    
        var text = this.state.text;
        var newItems = this.state.items.concat(text);
    
        this.setState({text:'',items: newItems});
    }
    handleChange(event){
        var text = event.target.value;
        this.setState({text: text});
    }
    render(){
        return <>
        <h1>Grocery</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input onChange={this.handleChange.bind(this)} value={this.state.text} />
            <button>Add</button>

        </form>
        {this.state.items.toString()}
        <GroceryList handleDelete={this.handleDelete.bind(this)}
        items = {this.state.items} />    
        
        </>
    }
}
