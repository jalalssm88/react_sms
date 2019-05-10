import React, { Component } from 'react'
import{Link} from 'react-router-dom';
import { Modal, Form, Button, Icon } from 'semantic-ui-react';

class SessionList extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            name:'',
            short_name:'',
            start_date:'',
            end_date:'',
            is_active: props.is_active || false,
        }
    }
    
    handleCreateButton(evt) {
        evt.preventDefault()
        this.closeModal();
    }

    closeModal = () => {
        this.setState({ 
            showModal: false,
            name:'', 
            short_name:'',
            start_date:'',
            end_date:'',
            is_active:false
        })
    }

    openModal = (e)=>{
        this.setState({
            showModal:true
        })
    }

    checkboxHandler = (e)=>{
        this.setState({ is_active: !this.state.is_active })
    }

    changeHandler = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    submitHandler = (e) =>{
        e.preventDefault();
        const session_values = {
            name:this.state.name,
            short_name:this.state.short_name,
            start_date:this.state.start_date,
            end_date:this.state.end_date,
            is_active:this.state.is_active
        }
        this.props.createSession(session_values)
        this.setState({
            showModal: false,
            name:'', 
            short_name:'',
            start_date:'',
            end_date:'',
            is_active:false
        })
    }
    render() {
        return (
            <React.Fragment>
                <div style={{'marginBottom':'-20px'}} className="sixteen wide column">
                    <h2 style={{'float':'left'}}>Sessions List View</h2>
                    <Modal size="small" open={this.state.showModal} trigger={<Button floated='right' size='mini' icon labelPosition='left' color="orange" onClick={this.openModal}><Icon name='plus' />Create Session</Button>}>
                    <Modal.Header>Create Session</Modal.Header>
                    <Modal.Content>
                        <form >
                            <div className="ui form">
                                <div className="field">
                                    <label>Name</label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                                </div>
                                <div className="field">
                                    <label>Short Name</label>
                                    <input type="text" name="short_name" value={this.state.short_name} onChange={this.changeHandler}/>
                                </div>
                                <div className="field">
                                    <label>Start Date</label>
                                    <input type="text" name="start_date" value={this.state.start_date} onChange={this.changeHandler}/>
                                </div>
                                <div className="field">
                                    <label>End Date</label>
                                    <input type="text" name="end_date" value={this.state.end_date} onChange={this.changeHandler}/>
                                </div>
                                <div className="field">
                                    <label>Is Active</label>
                                    <div className="ui toggle checkbox">
                                        <input type="checkbox" value={this.state.is_active} onChange={this.checkboxHandler} />
                                        <label></label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Modal.Content>
                    <Modal.Actions>
                        <button onClick={this.closeModal} className="ui small labeled icon button red cancel"><i className="close icon"></i>cancel</button>
                        <button onClick={this.submitHandler} className="ui small labeled icon button blue"><i className="right arrow icon"></i> Submit</button>
                    </Modal.Actions>
                </Modal>
                </div>
                <div className="sixteen wide column">
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th>Agency</th>
                                <th>Is Active</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default SessionList;