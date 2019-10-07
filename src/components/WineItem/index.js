import React, {Component} from "react"
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Slider from '@material-ui/core/Slider'
import Box from '@material-ui/core/Box'

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
        <ExpansionPanelDetails>
          <div style={{width:'100%'}}>
            <Box display="flex" flexDirection="row">
              <Typography style={{width:150}} gutterBottom>
                Complexity
              </Typography>
              <Slider
                defaultValue={complexity}
                step={1}
                disabled={false}
                max={7}
                valueLabelDisplay="on"
              />
            </Box>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}



export default WineItem
