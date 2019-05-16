import React, { Component } from 'react'
import{Link} from 'react-router-dom';
import{connect} from 'react-redux';
import{getCampus} from '../../actions/action';

class CampusList extends Component {
    componentWillMount(){
        this.props.getCampus();
    }
    render() {
        return (
            <React.Fragment>
                <div style={{'marginBottom':'-20px'}} className="sixteen wide column">
                    <h2 style={{'float':'left'}}>Campuses List View</h2>
                    <Link to="/campus/create" className="ui mini labeled right floated icon orange button"><i className="plus icon"></i>Create Campus</Link>
                </div>
                <div className="sixteen wide column">
                    <table className="ui celled table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Short Code</th>
                                <th>Phone no</th>
                                <th>Country</th>
                                <th>Address</th>
                                <th>Website</th>
                                <th>Branch Type</th>
                                <th>View Programs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.campus.campuses.map(campus => (
                                    <tr key={campus._id}>
                                        <td>{campus.name}</td>
                                        <td>{campus.short_code}</td>
                                        <td>{campus.phone_no}</td>
                                        <td>{campus.country}</td>
                                        <td>{campus.address}</td>
                                        <td>{campus.website}</td>
                                        <td>{campus.campus_type}</td>
                                        <td>
                                            <Link to={"/programs/campus/"+campus._id} className="ui mini labeled green icon button"><i className="eye icon"></i>view</Link>
                                        </td>
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

const mapStateToProps = (state)=>({
    campus:state.campus
})

export default connect(mapStateToProps,{getCampus})(CampusList);