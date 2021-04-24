import React, { Component, useState } from 'react'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function RecipeHeading(props)  {
      const [value, setValue] = React.useState(3)
        return (
            <div>
                <h1>{props.title}</h1>
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <h4>{props.description}</h4>
      
            </div>
        )
    
}

export default RecipeHeading

