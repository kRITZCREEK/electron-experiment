import React from 'react'
import {Yank} from './Yank'

export var Clipboard = React.createClass({
    getInitialState() {
        return {yanks: []}
    },
    componentDidMount() {
        require('ipc')
            .on('update', yanks =>
                this.setState({yanks: JSON.parse(yanks)}))
    },
    searchPopup() {
        var remote = require('remote')
        var url = window.location.href.replace('index', 'searchBar')
        var BrowserWindow = remote.require('browser-window')
        var win = new BrowserWindow({
            "width": 500,
            "height": 500,
            "skip-taskbar": false,
            "always-on-top": true,
            "frame": false,
            "transparent": true
        })
        win.loadUrl(url)
        win.show()
    },

    render() {
        return (
            <main>
                <ul>
                    {this.state.yanks.map(yank =>
                        <Yank key={yank.timestamp} yank={yank} />)}
                </ul>
                <button onClick={this.searchPopup}> Popup </button>
            </main>
        )
    }
})
