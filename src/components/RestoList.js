import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit,faTrashAlt } from '@fortawesome/free-solid-svg-icons'

class RestoList extends Component {
    constructor(){
        super();
        this.state={
            list:null
        }
    }
    componentDidMount(){
        fetch("http://localhost:3001/resto").then((response)=>{
            response.json().then((result)=>{
                this.setState({list:result})
            })
        })
    }
    render() {
        return (
            <div>
                
                {
                    
                    this.state.list ?
                    <div>
                    <Table striped bordered hover>
                    <thead>
                        <tr className="text-center"><th colspan="6"><h4>List of Restaurant Name</h4></th></tr>
                      <tr>
                        <th>#</th>
                        <th>Resto Name</th>
                        <th>Email</th>
                        <th>Rating</th>
                        <th>Address</th>
                        <th>Operation</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.list.map((item)=>
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <Link to={"/update/"+item.id} ><FontAwesomeIcon icon={faEdit} color="blue"/></Link>
                                        <Link to={"/update/"+item.id} ><FontAwesomeIcon icon={faTrashAlt} color="red"/></Link>
                                     </td>
                                </tr>  
                            )
                        }
                        </tbody>
                        </Table>
                        </div>
                    :
                    <p>Please wait......</p>
                }
            </div>
        );
    }
}

export default RestoList;