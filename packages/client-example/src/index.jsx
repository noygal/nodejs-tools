import React from 'react'
const ReactDOM = require('react-dom')

class App extends React.Component {
  render () {
    return (
      <div>
        Hello world
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
