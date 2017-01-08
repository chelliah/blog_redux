import React, {Component} from 'react'

// const App = ({children}) => (
//     <div className="app">
//     </div>
// );
//
//
// export default App

export default class App extends Component {
  render() {
    return (
      <div className="app">{this.props.children}</div>
    )
  }
}
