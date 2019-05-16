import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createCourse, getSession, getPrograms} from '../../actions/action';

class CreateCourse extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            short_code:'',
            course_teacher:'',
            course_session:'',
            course_program:'',
            compulsory:false
        }
    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    checkboxHandler = (e)=>{
        this.setState({ compulsory: !this.state.compulsory })
    }

    submitHandler = (e) =>{
        e.preventDefault();
        this.props.createCourse(this.state, this.props.history);
        this.setState({
            name:'',
            short_code:'',
            compulsory:false,
            course_teacher:'',
            course_session:'',
            course_program:'',
        })
    }
    componentWillMount(){
        this.props.getSession();
        this.props.getPrograms();
    }
    render() {
        return (
            <React.Fragment>
                <div style={{'marginBottom':'-20px'}} className="sixteen wide column">
                    <h2 style={{'float':'left'}}>Create Course</h2>
                </div>
                <div className="sixteen wide column">
                    <form onSubmit={this.submitHandler}>
                        <div className="ui form">
                            <div className="three fields">
                                <div className="field"> 
                                    <label>Name</label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                                </div>   
                                <div className="field"> 
                                    <label>Short Code</label>
                                    <input type="text" name="short_code" value={this.state.short_code} onChange={this.changeHandler}/>
                                </div> 
                                <div className="field">
                                    <label>Is Compulsory</label>
                                    <div className="ui toggle checkbox">
                                        <input type="checkbox" value={this.state.is_active} onChange={this.checkboxHandler} />
                                        <label></label>
                                    </div>
                                </div>                
                            </div>
                            <div className="three fields">
                                <div className="field"> 
                                    <label>Select Session</label>
                                    <select name="course_session" onChange={this.changeHandler}>
                                        <option>-----------------</option>
                                        {
                                            this.props.session.sessions.map(session => (
                                                <option key={session._id} value={session.name}>{session.name}</option>
                                            ))
                                        }
                                    </select>
                                </div> 
                                <div className="field"> 
                                    <label>Select Teacher</label>
                                    <select name="course_teacher" onChange={this.changeHandler}>
                                        <option>-----------------</option>
                                        <option value="pakistan">pakistan</option>
                                    </select>
                                </div> 
                                <div className="field"> 
                                    <label>Select Program</label>
                                    <select name="course_program" onChange={this.changeHandler}>
                                        <option>-----------------</option>
                                        {
                                            this.props.program.all_program.map(all_prog =>(
                                                <option key={all_prog._id} value={all_prog.name}>{all_prog.name}</option>
                                            ))
                                        }
                                    </select>
                                </div> 
                            </div>
                            <div style={{'textAlign':'center'}} className="field">
                                <button className="ui blue icon labeled button "><i className="right arrow icon"></i>Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>({
    course:state.course,
    session:state.session,
    program:state.program

})

export default connect(mapStateToProps,{createCourse, getSession, getPrograms})(CreateCourse);