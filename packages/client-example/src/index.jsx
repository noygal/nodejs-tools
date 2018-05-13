import Swagger from 'swagger-client'
import React from 'react'
const ReactDOM = require('react-dom')

class App extends React.Component {
  componentDidMount () {
    setTimeout(() =>
      Swagger(window.config.openApiPath)
        .then(client => client.apis.default.getHi())
        .then(res => this.setState({message: res.body.msg}))
      , 5000)
  }
  render () {
    return (
      <div>
        {(this.state && this.state.message) || 'No message'}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
