import React, { Component } from 'react'
import {connect} from 'react-redux';

class CreateCourse extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            short_code:'',
            compulsory:'',
            course_teacher:'',
            course_session:'',
            course_program:'',
        }
    }

    changeHandler = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    submitHandler = (e) =>{
       e.preventDefault();
       this.props.createCampus(this.state, this.props.history);
    }

    render() {
        return (
            <React.Fragment>
                <div style={{'marginBottom':'-20px'}} className="sixteen wide column">
                    <h2 style={{'float':'left'}}>Create Course</h2>
                </div>
                <div className="sixteen wide column">
                    <div className="ui form">
                        <div className="two fields">
                            <div className="field"> 
                                <label>Name</label>
                                <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                            </div>   
                            <div className="field"> 
                                <label>Short Code</label>
                                <input type="text" name="short_code" value={this.state.short_code} onChange={this.changeHandler}/>
                            </div>                   
                        </div>
                        <div className="three fields">
                            <div className="field"> 
                                <label>Select Session</label>
                                <select name="course_session" onChange={this.changeHandler}>
                                    <option>-----------------</option>
                                    <option value="pakistan">pakistan</option>
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
                                    <option value="pakistan">pakistan</option>
                                </select>
                            </div> 
                        </div>
                        <div style={{'textAlign':'center'}} className="field">
                            <button onClick={this.submitHandler} className="ui blue icon labeled button "><i className="right arrow icon"></i>Create</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>({
    campus:state.campus
})

export default connect(mapStateToProps,{})(CreateCourse);