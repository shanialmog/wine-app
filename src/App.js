import React, {Component} from "react"
import Button from '@material-ui/core/Button'
import './App.css'
import WineItem from './components/WineItem/'
import { Container } from '@material-ui/core'

class App extends Component {
  constructor() {
    super()
    this.state = {
      wineList: [
        {
          id: 123,
          name: "Old Tbilisi",
          type: "Semi sweet red wine",
          vintage: 2017,
          cost: 15,
          rate: 6,
          complexity: 1,
          finish: 4,
          typicity: 1
        },        {
          id: 123,
          name: "Old Moldova",
          type: "Semi sweet red wine",
          vintage: 2017,
          cost: 15,
          rate: 6,
          complexity: 4,
          finish: 4,
          typicity: 1
        },        {
          id: 123,
          name: "Old Ukraine",
          type: "Semi sweet red wine",
          vintage: 2017,
          cost: 15,
          rate: 6,
          complexity: 6,
          finish: 4,
          typicity: 1
        }
      ],
      sortBy: "date"
    }
  }
  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <h1>
            My wines
          </h1>
          <Button variant="contained" color="primary">
            Add wine
          </Button>
          <div>
            {
              this.state.wineList.map(item =>
                <WineItem {...item}/>
              )
            }
          </div>
        </Container>
      </div>
    )
  }
}



export default App
