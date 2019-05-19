import React, { Component } from 'react'
import SampleComponent from './SampleComponent'

class App extends Component {

  state = {
    red: false,
    yellow: false,
    green: false
  }

  clickHandler(color) {
    switch (color.target.name) {
      case "red":
        this.setState({
          red: true,
          yellow: false,
          green: false
        })
        break;
      case "yellow":
        this.setState({
          red: false,
          yellow: true,
          green: false
        })
        break;
      case "green":
        this.setState({
          red: false,
          yellow: false,
          green: true
        })
        break;
      default:
        this.setState({
          red: false,
          yellow: false,
          green: false
        })
        break;
    }
  }

  render() {
    let colorsJson = {
      btncolorR: "", 
      btncolorY: "", 
      btncolorG: ""
    }
    if (this.state.red) {
      colorsJson.btncolorR = '#944317'
    } else if (this.state.yellow) {
      colorsJson.btncolorY = 'rgb(151, 240, 9)'
    } else if (this.state.green) {
      colorsJson.btncolorG = '#5C9210'
    }
    return (
      <div>
        <SampleComponent colors={colorsJson} clickHandler={this.clickHandler.bind(this)}/>
      </div>
    )
  }

}
export default App