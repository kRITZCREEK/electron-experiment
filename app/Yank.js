import React from 'react'

export var Yank = React.createClass({
    render() {
        var style = {
            float: "right"
        }
        return (
            <div>
                <div> {this.props.yank.content} </div>
                <div style={style}>
                    {this.props.yank.timestamp}
                </div>
            </div>
        )
    }
})
