import React, { Component } from 'react'
import{connect} from 'react-redux';
import{campusView} from '../../actions/action'
import {Link} from 'react-router-dom'

class CampusView extends Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.campusView(this.props.match.params.id);
    }

    render() {
        return (
        <div className="sixteen wide column">
            {console.log('propsssss', this.props)}
            <h1>{this.props.campus.campus.name}</h1>
            <div className="ui three column grid">
                <div className="column ">
                    <div className="create_view_detail">
                        <Link to={"/program/"+this.props.match.params.id}>Create Program</Link>
                        <div className="ui divider"></div>
                        <Link to={"/programs/lists/"+this.props.match.params.id}>Program List</Link>
                    </div>
                </div>
                <div className="column ">
                    <div className="create_view_detail">
                        <Link to="">Create Program</Link>
                        <div className="ui divider"></div>
                        <Link to="">Program List</Link>
                    </div>
                </div>
                <div className="column ">
                    <div className="create_view_detail">
                        <Link to="">Create Program</Link>
                        <div className="ui divider"></div>
                        <Link to="">Program List</Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state)=>({
    campus:state.campus
})

export default connect(mapStateToProps,{campusView})(CampusView);