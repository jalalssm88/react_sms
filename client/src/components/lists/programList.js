import React, { Component } from 'react'
import{connect} from 'react-redux';
import{getProgram} from '../../actions/action';
import {Link} from 'react-router-dom'


class ProgramList extends Component {

    componentWillMount(){
        var urlParama = window.location.pathname;
        var splited_url = urlParama.split('/');
        var final_id = splited_url[3];
        this.props.getProgram(final_id);
    }

    render() {
        return (
            <div className="sixteen wide column">
                <h1 style={{'float':'left'}}>Program Lists</h1>
                <Link to={'/program/'+this.props.match.params.id} className="ui orange mini labeled icon right floated button"><i className="plus icon"></i>Create Program</Link>
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Short Code</th>
                            <th>View Sections</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.my_prog.programs.map(program => (
                                <tr key={program._id}>
                                    <td>{program.name}</td>
                                    <td>{program.short_code}</td>
                                    <td>
                                        <Link to={"/sections/program/"+program._id} className="ui mini icon labeled green button"><i className="eye icon"></i>view </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    my_prog:state.program
})

export default connect(mapStateToProps,{getProgram}) (ProgramList);