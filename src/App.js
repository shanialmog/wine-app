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
        }, {
          id: 124,
          name: "Old Moldova",
          type: "Semi sweet red wine",
          vintage: 2017,
          cost: 15,
          rate: 6,
          complexity: 4,
          finish: 4,
          typicity: 1
        }, {
          id: 125,
          name: "Old Ukraine sdg fsdfgdfg sdfgsgs",
          type: "Semi sweet red wine",
          vintage: 2017,
          cost: 15,
          rate: 6,
          complexity: 6,
          finish: 4,
          typicity: 1
        }
      ],
      sortBy: "",
    }

    this.handleClickSave = this.handleClickSave.bind(this)
  }

  handleClickSave(wineItem) {
    const updatedWineList = this.state.wineList.map(
      item => item.id !== wineItem.id ? item : {
        name: wineItem.name,
        type: wineItem.type,
        vintage: wineItem.vintage,
        cost: wineItem.cost,
        rate: wineItem.rate,
        complexity: wineItem.complexity,
        finish: wineItem.finish,
        typicity: wineItem.typicity
      }
    )
    this.setState({
      wineList: updatedWineList
    })
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
                <WineItem onSave={this.handleClickSave}{...item}/>
              )
            }
          </div>
        </Container>
      </div>
    )
  }
}



export default App
