import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createCampus} from '../../actions/action'

class CreateCampus extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            short_code:'',
            phone_no:'',
            country:'',
            state:'',
            city:'',
            postal_code:'',
            address:'',
            website:'',
            campus_type:''
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
                    <h2 style={{'float':'left'}}>Create Campus</h2>
                </div>
                <div className="sixteen wide column">
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
                                <label>Phone No</label>
                                <input type="text" name="phone_no" value={this.state.phone_no} onChange={this.changeHandler}/>
                            </div>                       
                        </div>
                        <div className="three fields">
                            <div className="field"> 
                                <label>Country</label>
                                <select name="country" onChange={this.changeHandler}>
                                    <option>-----------------</option>
                                    <option value="pakistan">pakistan</option>
                                    <option value="india">india</option>
                                    <option value="australia">australia</option>
                                    <option value="sri lanka">sri lanka</option>
                                    <option value="bangladesh">bangladesh</option>
                                    <option value="afghanistan">afghanistan</option>
                                </select>
                            </div>   
                            <div className="field"> 
                                <label>State</label>
                                <input type="text" name="state" value={this.state.state} onChange={this.changeHandler}/>
                            </div>  
                            <div className="field"> 
                                <label>City</label>
                                <input type="text" name="city" value={this.state.city} onChange={this.changeHandler}/>
                            </div>     
                        </div>
                        <div className="two fields">
                            <div className="four wide field">
                                <label>Postal Code</label>
                                <input type="text" name="postal_code" value={this.state.postal_code} onChange={this.changeHandler} /> 
                            </div>
                            <div className="twelve wide field">
                                <label>Address</label>
                                <input type="text" name="address" value={this.state.address} onChange={this.changeHandler} /> 
                            </div>
                        </div>
                        <div className="two fields">
                            <div className="field">
                                <label>Website</label>
                                <input type="text" name="website" value={this.state.website} onChange={this.changeHandler} /> 
                            </div>
                            <div className="field">
                                <label>Campus type</label>
                                <select name="campus_type" onChange={this.changeHandler}>
                                    <option>-----------------</option>
                                    <option value="head office">head office</option>
                                    <option value="branch">branch</option>
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

export default connect(mapStateToProps,{createCampus})(CreateCampus);