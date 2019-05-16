import React, { Component } from 'react'
import{Link} from 'react-router-dom';
import {getCourse} from '../../actions/action'
import { connect } from 'react-redux';

class CoursesList extends Component {
    componentWillMount(){
        this.props.getCourse();
    }
    render() {
        return (
            <React.Fragment>
                <div style={{'marginBottom':'-20px'}} className="sixteen wide column">
                    <h2 style={{'float':'left'}}>Courses List View</h2>
                    <Link to="/course/create" className="ui mini labeled right floated icon orange button"><i className="plus icon"></i>Create Course</Link>
                </div>
                <div className="sixteen wide column">
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Short Code</th>
                                <th>Is Compulsory</th>
                                <th>Session</th>
                                <th>Teacher</th>
                                <th>Program</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.course.courses.map(course => (
                                    <tr key={course._id}>
                                        <td>{course.name}</td>
                                        <td>{course.short_code}</td>
                                        <td>
                                            {
                                                course.compulsory === true? <i className="icon large green check circle"></i>:<i className="icon large red remove circle"></i>
                                            }
                                        </td>
                                        <td>{course.course_session}</td>
                                        <td>{course.course_teacher}</td>
                                        <td>{course.course_program}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>({
    course:state.course
})

export default connect(mapStateToProps,{getCourse}) (CoursesList);