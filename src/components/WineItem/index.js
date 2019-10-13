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
      id: null,
      name: this.props.name,
      type: null,
      vintage: null,
      cost: null,
      rate: null,
      complexity: null,
      finish: null,
      typicity: null
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
              <Box width={200} pr={3} pb={4}>
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
              <Box width={40} pr={3}>
                <TextField
                  onChange={this.handleChange}
                  disabled={!this.state.edit}
                  id="standard-disabled"
                  label="Vintage"
                  name="vintage"
                  defaultValue={vintage}
                  margin="normal"
                />
              </Box>
              <Box width={200} pr={3}>
                <TextField
                  onChange={this.handleChange}
                  disabled={!this.state.edit}
                  id="standard-disabled"
                  label="Type"
                  defaultValue={type}
                  margin="normal"
                />
              </Box>
              <Box width={90} pr={3}>
                <TextField
                  onChange={this.handleChange}
                  disabled={!this.state.edit}
                  id="standard-disabled"
                  label="Price (USD)"
                  defaultValue={cost}
                  margin="normal"
                />
              </Box>
              <Box width={30} pr={3}>
                <TextField
                  onChange={this.handleChange}
                  disabled={!this.state.edit}
                  id="standard-disabled"
                  label="Rate"
                  defaultValue={rate}
                  margin="normal"
                />
              </Box>
          </Box>
          <WineItemSlider
            onChange={this.handleChange}
            title="Complexity"
            disabled={!this.state.edit}
            value={complexity}
          />
          <WineItemSlider
            onChange={this.handleChange}
            title="Finish"
            disabled={!this.state.edit}
            value={finish}
          />
          <WineItemSlider
            onChange={this.handleChange}
            title="Typicity"
            disabled={!this.state.edit}
            value={typicity}
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
