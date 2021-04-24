import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
export default function Ingredients(props) {
    return (
        <FormControlLabel
        value="end"
        control={<Checkbox color="primary" />}
        label="End"
        labelPlacement="end"
      />
        // <ul>
        //     <li>Prep: props.prep </li>
        //     <li>Cook: props.time</li>
        //     <li>Servings: props.serving</li>
        //     <li>Yield: 1 info</li>
        // </ul>
    )
}
