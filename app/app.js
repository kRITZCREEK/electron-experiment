/*require('ipc').on('update', function (yanks) {
    var yankList = JSON.parse(yanks)
        .map(function(yank) {return '<li>' + yank + '</li>'})
        .reduce(function(s1, s2){return s1.concat(s2)})

    console.log(yankList)
    document.querySelector('#content').innerHTML =
        '<ul>' + yankList + '</ul>'
})*/

import React from 'react'
import {Clipboard} from './Clipboard'

React.render(<Clipboard />,
    document.querySelector('#content')
);