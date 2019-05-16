import React, { Component } from 'react'
import{Link} from 'react-router-dom';

class ProfileDashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{'marginBottom':'-20px'}} className="sixteen wide column">
                    <h2 style={{'float':'left'}}>Profile Dashboard</h2>
                </div>
                <div className="sixteen wide column" style={{'marginTop':'30px'}}>
                    <div className="ui three column grid stackable">
                        <div className="column">
                            <div className="profile_items">
                                <Link to="/student/create" >Create Student</Link>
                                <div className="ui divider"></div>
                                <Link to="/student/list" >Student Lists</Link>
                            </div>
                        </div>
                        <div className="column">
                            <div className="profile_items">
                                <Link to="/parent/create" >Create Parent</Link>
                                <div className="ui divider"></div>
                                <Link to="/parent/list" >Parent Lists</Link>
                            </div>
                        </div>
                        <div className="column">
                            <div className="profile_items">
                                <Link to="/teacher/create" >Create Teacher</Link>
                                <div className="ui divider"></div>
                                <Link to="/teacher/list" >Teacher Lists</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProfileDashboard;