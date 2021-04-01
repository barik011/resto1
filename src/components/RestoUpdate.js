import React, { Component } from 'react';

class RestoUpdate extends Component {

    constructor(){
        super();
        this.state={
            name:null,
            email:null,
            rating:null,
            address:null
        }
    }

    componentDidMount(){
        fetch('http://localhost:3001/resto/'+this.props.match.params.id).then((resp)=>{
            resp.json().then((result)=>{
                // console.warn(result)
                this.setState({
                    id:result.id,
                    name:result.name,
                    email:result.email,
                    rating:result.rating,
                    address:result.address
                })
            })
        })
    }
    update() {
        fetch('http://localhost:3001/resto/'+this.state.id, {
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((response)=>{
                alert('Data has been updated')
            }
            )
        })
    }



    render() {
        
        return (
           
            <div className="text-center">
               <h4>Update Restaurant</h4>
            <div className="myTable">
               <input onChange={(event)=>{this.setState({name:event.target.value})}} 
               placeholder="Restaurant Name" value={this.state.name} /><br/><br/>
               <input onChange={(event)=>{this.setState({email:event.target.value})}} 
               placeholder="Restaurant Email" value={this.state.email}  /><br/><br/>
               <input onChange={(event)=>{this.setState({rating:event.target.value})}} 
               placeholder="Restaurant Rating" value={this.state.rating}  /><br/><br/>
               <input onChange={(event)=>{this.setState({address:event.target.value})}} 
               placeholder="Restaurant Address" value={this.state.address}  /><br/><br/>
               <button onClick={()=>{this.update()}}>Update Restaurant</button>
               </div>
               
            </div>
        );
    }
}

export default RestoUpdate;