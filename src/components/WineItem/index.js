import React, {Component} from "react"
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import WineItemSlider from "../WineItemSlider"
import { display } from "@material-ui/system"

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
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display:'block'}}>
          <WineItemSlider title="Complexity" value={complexity}/>
          <WineItemSlider title="Finish" value={finish}/>
          <WineItemSlider title="Typicity" value={typicity}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}



export default WineItem
