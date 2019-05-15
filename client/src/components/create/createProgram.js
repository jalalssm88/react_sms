import React, { Component } from 'react'
import{connect} from 'react-redux';
import{createProgram} from '../../actions/action'

class CreateProgram extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            short_code:'',
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
            campus_id:this.props.match.params.id
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log('state', this.state)
        var data = {
            name:this.state.name,
            short_code:this.state.short_code,
            campus_id:this.state.campus_id
        }
        this.props.createProgram(data, this.props.history,this.props.match.params.id)
        this.setState({
            name:'',
            short_code:'',
        })
    }
    render() {
        return (
            <div className="sixteen wide column">
                <div className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
                    </div>
                    <div className="field">
                        <label>Short Code</label>
                        <input type="text" name="short_code" value={this.state.short_code} onChange={this.changeHandler} />
                    </div>
                    <div className="field">
                        <label>S</label>
                        <button className="ui blue button" onClick={this.submitHandler} >submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToprops = (state)=>({
    program:state.programs
})

export default connect(mapStateToprops,{createProgram}) (CreateProgram);