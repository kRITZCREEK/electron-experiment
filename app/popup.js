import React from 'react'
import {Searchbar} from './Searchbar.js'

React.render(<Searchbar yanks={["A yank", "a small yank", "A BIG YANK"]}/>,
  document.querySelector('#content'))
