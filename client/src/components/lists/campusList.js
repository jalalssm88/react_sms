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

const mapStateToProps = (state)=>({
    campus:state.campus
})

export default connect(mapStateToProps,{getCampus})(CampusList);