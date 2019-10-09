import React, {Component} from "react"
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import WineItemSlider from "../WineItemSlider"
import { display } from "@material-ui/system"
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import { spacing } from '@material-ui/system'


class WineItem extends Component {
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
      typicity
    } = this.props
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div style={{display:"flex", justifyContent:"space-between", width:"100%"}}>
              <Typography>{name}</Typography>
              <Typography>{vintage}</Typography>
              <Typography>{type}</Typography>
              <Typography>${cost}</Typography>
              <Typography>{rate}</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display:'block'}}>
        <Box display="flex">
            <Box width={200} pr={3} pb={4}>
              <TextField
              disabled
              id="standard-disabled"
              label="Name"
              defaultValue={name}
              margin="normal"
              />
            </Box>
            <Box width={40} pr={3}>
              <TextField
              disabled
              id="standard-disabled"
              label="Vintage"
              defaultValue={vintage}
              margin="normal"
              />
            </Box>
            <Box width={200} pr={3}>
              <TextField
              disabled
              id="standard-disabled"
              label="Type"
              defaultValue={type}
              margin="normal"
              />
            </Box>
            <Box width={90} pr={3}>
              <TextField
              disabled
              id="standard-disabled"
              label="Price (USD)"
              defaultValue={cost}
              margin="normal"
              />
            </Box>
            <Box width={30} pr={3}>
              <TextField
              disabled
              id="standard-disabled"
              label="Rate"
              defaultValue={rate}
              margin="normal"
              />
            </Box>
        </Box>
          <WineItemSlider title="Complexity" value={complexity}/>
          <WineItemSlider title="Finish" value={finish}/>
          <WineItemSlider title="Typicity" value={typicity}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}



export default WineItem
