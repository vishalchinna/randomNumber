import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {newNumber: 1}

  changeNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1
    console.log(randomNum)
    this.setState({newNumber: randomNum})
  }

  render() {
    const {newNumber} = this.state
    return (
      <div className="bg-container">
        <div className="box-container">
          <h1>Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" type="button" onClick={this.changeNumber}>
            Generate
          </button>
          <p>{newNumber - 1}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
