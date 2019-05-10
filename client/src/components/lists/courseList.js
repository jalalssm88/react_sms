import React, { Component } from 'react'
import{Link} from 'react-router-dom';

class CoursesList extends Component {
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
                                <th>header</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>body</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}

export default CoursesList;