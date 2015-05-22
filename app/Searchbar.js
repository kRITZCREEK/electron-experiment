import React from 'react'
import './searchbar.styl'

export var Searchbar = React.createClass({
  getInitialState() {
    return {
      matches: this.props.yanks
    }
  },
  componentDidMount: function() {
    React.findDOMNode(this.refs.searchfield).focus()
    },
    refresh(){
      window.location.reload()
    },
    updateMatches(e){
      let newMatches = this.props.yanks
        .filter(y => y.startsWith(e.target.value))
      this.setState({matches: newMatches})
    },
    render(){
      return (
        <div className="Searchbar">
          <input type="search" ref="searchfield" onChange={this.updateMatches}/>
          <button onClick={this.refresh}>refresh</button>
          <hr />
          <ul>
            {this.state.matches.map(y => <li> {y} </li>)}
          </ul>
        </div>
      )
    }
})
