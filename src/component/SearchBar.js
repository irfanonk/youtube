import React from 'react';

export default class SearchBar extends React.Component{
    
    state = {term: ''};

    componentDidMount() {
        this.props.onUserSubmit('buildings')
    }

    onSearchSubmit = (e) => {
        e.preventDefault();
        console.log("formsubmit:",this.state.term)
        //console.log('thisprops:,' , this.props)
        this.props.onUserSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui inverted segment">
                <form className="ui inverted form" onSubmit={this.onSearchSubmit}>
                    <div className="field">
                        <label> 
                            <h1>Search Videos on Youtube</h1>
                        </label>
                        <input 
                        type="text" value={this.state.term}
                        onChange={e => this.setState({term:e.target.value})}>
                        </input>
                    </div>
                </form>
            </div>
                
            
        )
    }
}