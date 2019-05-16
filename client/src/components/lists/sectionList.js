import React, { Component } from 'react'
import { Modal, Button, Icon } from 'semantic-ui-react';
import{connect} from 'react-redux';
import{createSection, getSection, getSession} from '../../actions/action';

class SectionList extends Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: false,
            name:'',
            short_code:'',
            session:''
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
            short_code:'',
            session:''
        })
    }

    openModal = (e)=>{
        this.setState({
            showModal:true
        })
    }

    changeHandler = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const section_data = {
            name:this.state.name,
            short_code:this.state.short_code,
            session:this.state.session,
            program_id: this.props.match.params.id
        }
        this.props.createSection(section_data)
        this.setState({
            showModal: false,
            name:'',
            short_code:'',
            session:'',
            program_id:''
        })
    }

    componentWillMount(){
        this.props.getSection(this.props.match.params.id);
        this.props.getSession();
    }

    render() {
        return (
            <div className="sixteen wide column">
                <h1 style={{'float':'left'}}>Section Lists</h1>
                <Modal size="small" open={this.state.showModal} trigger={<Button floated='right' size='mini' icon labelPosition='left' color="orange" onClick={this.openModal}><Icon name='plus' />Create Section</Button>}>
                    <Modal.Header>Add Phone Number</Modal.Header>
                    <Modal.Content>
                        <form >
                            <div className="ui form">
                                <div className="field">
                                    <label>Name</label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                                </div>
                                <div className="field">
                                    <label>Short Code</label>
                                    <input type="text" name="short_code" value={this.state.short_code} onChange={this.changeHandler}/>
                                </div>
                                <div className="field">
                                    <label>Session</label>
                                    <select name="session" onChange={this.changeHandler}>
                                        <option>--------------</option>
                                        {
                                           this.props.my_session.sessions.map(session=>(
                                               <option key={session._id} value={session.name}>{session.name}</option>
                                           ))
                                        }
                                    </select>
                                </div>
                            </div>
                        </form>
                    </Modal.Content>
                    <Modal.Actions>
                        <button onClick={this.closeModal} className="ui small labeled icon button red cancel"><i className="close icon"></i>cancel</button>
                        <button onClick={this.submitHandler} className="ui small labeled icon button blue"><i className="right arrow icon"></i> Submit</button>
                    </Modal.Actions>
                </Modal>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Short Code</th>
                            <th>Session</th>
                            <th>Students</th>
                            <th>Courses</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.my_section.sections.map(section => (
                                <tr key={section._id}>
                                    <td>{section.name}</td>
                                    <td>{section.short_code}</td>
                                    <td>{section.session}</td>
                                    <td>
                                        <button className="ui mini blue button"></button>
                                    </td>
                                    <td>
                                        <i className="list large blue icon"></i>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    my_section:state.section,
    my_session:state.session,
})

export default connect(mapStateToProps,{createSection, getSection, getSession}) (SectionList);