import React, { Component } from 'react'
import Slider from '@material-ui/core/Slider'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

class WineItemSlider extends Component {
  render () {
    return (
      <div style={{ width: '100%' }}>
        <Box display='flex' flexDirection='row'>
          <Typography style={{ width: 150 }} gutterBottom>
            {this.props.title}
          </Typography>
          <Slider
            onChange={(_e, value) => {
              this.props.onChange({
                target: {
                  name: this.props.name,
                  value
                }
              })
            }}
            value={this.props.value}
            step={1}
            disabled={this.props.disabled}
            max={7}
            valueLabelDisplay='on'
          />
        </Box>
      </div>
    )
  }
}

export default WineItemSlider
