import React, { Component } from 'react'
import{connect} from 'react-redux';
import{getProgram} from '../../actions/action';

class ProgramList extends Component {
  
    componentWillMount(){
       this.props.getProgram();
    }

    render() {
        return (
            <div className="sixteen wide column">
                dsfsfdsfdsffdf
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Short Code</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          console.log('props', this.props)
                      }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    program:state.programs
})


export default connect(mapStateToProps,{getProgram}) (ProgramList);