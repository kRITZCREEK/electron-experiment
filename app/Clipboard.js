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
        var BrowserWindow = remote.require('browser-window')
        var win = new BrowserWindow({
            "width": 500,
            "height": 200,
            "skip-taskbar": true,
            "always-on-top": true,
            "frame": false
        })
        var url = 'file://D:/Documents/Source/electron-experiment' + '/searchBar.html'
        console.log('url', url)
        win.loadUrl(url)
        win.show()
    },

    render() {
        return (
            <main>
                <ul>
                    {this.state.yanks.map(yank =>
                        <Yank yank={yank} />)}
                </ul>
                <button onClick={this.searchPopup}> Popup </button>
            </main>
        )
    }
})