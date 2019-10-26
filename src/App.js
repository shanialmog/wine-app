import React, {Component} from "react"
import uuid from "uuid/v4"
import localStorage from 'local-storage'
import Button from '@material-ui/core/Button'
import './App.css'
import WineItem from './components/WineItem/'
import { Container } from '@material-ui/core'

class App extends Component {
  constructor() {
    super()
    this.state = {
      wineList: []
    }


    this.handleClickSave = this.handleClickSave.bind(this)
    this.handleClickAdd = this.handleClickAdd.bind(this)
    this.handleClickDelete = this.handleClickDelete.bind(this)
  }

  componentDidMount(){
    const wineItems = localStorage.get('wineitems')
    if (wineItems !== null && wineItems !== undefined) {
      this.setState({
      wineList: wineItems
      })
    }
    console.log(wineItems)
  }

  handleClickSave(wineItem) {
    const updatedWineList = this.state.wineList.map(
      item => item.id !== wineItem.id ? item : {
        id: wineItem.id,
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
    localStorage.set('wineitems', updatedWineList)
  }

  handleClickAdd() {
    const winelist = [
      {
        id: uuid(),
        name: "Wine name",
        type: "Wine type",
        vintage: 2019,
        cost: 0,
        rate: 1,
        complexity: 0,
        finish: 0,
        typicity: 0
      },
      ...this.state.wineList
    ]
    this.setState({
      wineList: winelist
    })
  //  localStorage.set('wineitems', )
  }

  handleClickDelete(wineDeleteId){
    const wineList = this.state.wineList.filter(item => item.id !== wineDeleteId)
    this.setState({
      wineList: wineList
    })
    localStorage.set('wineitems', wineList)
  }

  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <h1>
            My wines
          </h1>
          <Button onClick={this.handleClickAdd} variant="contained" color="primary">
            Add wine
          </Button>
          <div>
            {
              this.state.wineList.map(item =>
                <WineItem key={item.id} onSave={this.handleClickSave}{...item} onDelete={this.handleClickDelete}/>
              )
            }
          </div>
        </Container>
      </div>
    )
  }
}



export default App
