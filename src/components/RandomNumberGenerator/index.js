// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateNumber = () => {
    const num = Math.round(Math.random() * 100, 0)
    // console.log(num)
    this.setState({number: num})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="details">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.generateNumber}>
            Generate
          </button>
          <p className="number">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
