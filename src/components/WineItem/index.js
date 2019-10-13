import React, {Component} from "react"
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import WineItemSlider from "../WineItemSlider"
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


class WineItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      edit: false,
      id: this.props.id,
      name: this.props.name,
      type: this.props.type,
      vintage: this.props.vintage,
      cost: this.props.cost,
      rate: this.props.rate,
      complexity: this.props.complexity,
      finish: this.props.finish,
      typicity: this.props.typicity
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClickEdit = this.handleClickEdit.bind(this)
    this.handleClickSave = this.handleClickSave.bind(this)
    this.handleClickCancel = this.handleClickCancel.bind(this)
  }

  handleChange(event) {
    const {name,value} = event.target
    console.log("name:",name)
    console.log("value:",value)
    this.setState({
      [name] : value
    },() => {console.log(this.state)})
  }

  handleClickEdit() {
    this.setState({
      edit: true
    })
  }
  
  handleClickSave() {
    this.setState({
      edit: false
    })
  }
  
  handleClickCancel() {
    this.setState({
      edit: true
    })
  }

  render() {
    const {
      id,
      name,
      type,
      vintage,
      cost,
      rate,
      complexity,
      finish,
      typicity,
    } = this.props


    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
              <Typography
                variant="subtitle1"
                noWrap= {true}
                style={{ width: "40%"}}
              >{name}
              </Typography>
              <Typography
                variant="subtitle1"
                noWrap={true}
                style={{ width: "10%" }}
              >{vintage}
              </Typography>
              <Typography
                variant="subtitle1"
                noWrap={true}
                style={{ width: "35%"}}
              >{type}
              </Typography>
              <Typography
                variant="subtitle1"
                noWrap={true}
                style={{ width: "10%" }}
              >${cost}
              </Typography>
              <Typography
                variant="subtitle1"
                noWrap={true}
                style={{ width: "5%"}}
              >{rate}
              </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display:'block'}}>
          <Box display="flex">
              <Box width={200} pr={2.5} pb={4}>
                <TextField
                  onChange={this.handleChange}
                  disabled={!this.state.edit}
                  id="standard-disabled"
                  label="Name"
                  name="name"
                  value={this.state.name}
                  margin="normal"
                />
              </Box>
              <Box width={50} pr={2.5}>
                <TextField
                  onChange={this.handleChange}
                  disabled={!this.state.edit}
                  id="standard-disabled"
                  label="Vintage"
                  name="vintage"
                  value={this.state.vintage}
                  margin="normal"
                />
              </Box>
              <Box width={200} pr={2.5}>
                <TextField
                  onChange={this.handleChange}
                  disabled={!this.state.edit}
                  id="standard-disabled"
                  label="Type"
                  name="type"
                  value={this.state.type}
                  margin="normal"
                />
              </Box>
              <Box width={90} pr={2.5}>
                <TextField
                  onChange={this.handleChange}
                  disabled={!this.state.edit}
                  id="standard-disabled"
                  label="Price (USD)"
                  name="cost"
                  value={this.state.cost}
                  margin="normal"
                />
              </Box>
              <Box width={30} pr={2.5}>
                <TextField
                  onChange={this.handleChange}
                  disabled={!this.state.edit}
                  id="standard-disabled"
                  label="Rate"
                  name="rate"
                  value={this.state.rate}
                  margin="normal"
                />
              </Box>
          </Box>
          <WineItemSlider
            onChange={this.handleChange}
            title="Complexity"
            name="complexity"
            disabled={!this.state.edit}
            value={this.state.complexity}
          />
          <WineItemSlider
            onChange={this.handleChange}
            title="Finish"
            name="finish"
            disabled={!this.state.edit}
            value={this.state.finish}
          />
          <WineItemSlider
            onChange={this.handleChange}
            title="Typicity"
            name="typicity"
            disabled={!this.state.edit}
            value={this.state.typicity}
          />
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          {this.state.edit ?
            <div>
            <Button onClick={this.handleClickSave} size="small" color="primary">
            Save
            </Button>
            <Button onClick={this.handleClickCancel} size="small" color="primary">
            Cancel
          </Button>
          </div>
          : 
            <Button onClick={this.handleClickEdit} size="small" color="primary">
            Edit
          </Button> }
        </ExpansionPanelActions>
      </ExpansionPanel>
    )
  }
}



export default WineItem
