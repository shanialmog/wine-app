import React, {Component} from "react"
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import WineItemSlider from "../WineItemSlider"
import { display } from "@material-ui/system"
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class WineItem extends Component {
  render() {
    const {
      id,
      name,
      type,
      vintage,
      cost,
      complexity,
      finish,
      typicity
    } = this.props
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          style={{justifyContent:'space-between'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{name}</Typography>
          <div>
            <Typography>{vintage} {type}</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display:'block'}}>
          <TextField
          disabled
          id="standard-disabled"
          label="vintage"
          defaultValue={vintage}
          margin="normal"
          />
          <TextField
          disabled
          id="standard-disabled"
          label="type"
          defaultValue={type}
          margin="normal"
          />
          <WineItemSlider title="Complexity" value={complexity}/>
          <WineItemSlider title="Finish" value={finish}/>
          <WineItemSlider title="Typicity" value={typicity}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}



export default WineItem
