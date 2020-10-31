import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import clsx from 'clsx';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';
import {DropzoneArea} from 'material-ui-dropzone'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/styles';





const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }),
);

const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 24,
    }
  },
});

const styles = theme => ({
  textField: {
      // marginLeft: theme.spacing(1),
      // marginRight: theme.spacing(1),
      width: 200,
    },
    margin:{
      marginRight:30
    }
});


class BasicTextFields extends React.Component {
  state = {
    event:'',
    upload:[],
    category:'',
    summary:'',
    regState:'',
    isVirtual:false,
    link:'',
    startDate:'',
    startTime:'',
    endDate:'',
    endTime:'',
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value}
      )
  }

  render(){
  const {classes} = this.props;
  // const classes = useStyles();

  return (
    <div>
    <div style={{display:'flex', justifyContent: 'space-between'}}>
    <h3 style={{color:'purple'}}>Create Event</h3>
    <div style={{display:'flex', marginRight:'15'}}>

    <Button variant="contained" color="primary" size="small" className={classes.margin}>
        Create
      </Button>
      <Button variant="contained" color="default" size="small" className={classes.margin}>
        Cancel
      </Button>
    </div>
    
    </div>
    <form className="container mt-5">
      <FormControl fullWidth>
      {/* <FormControl className={classes.formControl} fullWidth> */}
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          Add event in *
        </InputLabel>
        <NativeSelect
          inputProps={{
            name: 'age',
            id: 'age-native-label-placeholder',
          }}
        >
          <option value="">Select...</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
      <br></br>
      <br></br>

      <Button
        variant="contained"
        component="label"
              startIcon={<Avatar src={'http://www.wpsimplesponsorships.com/wp-content/uploads/2019/05/cropped-icon-256x256.png'} />}
      >
        Upload Image
        <input
          type="file"
          style={{ display: "none" }}
          
        />
      </Button>
      <br></br>
      <br></br>

      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">Title *</Typography>
        <TextField
          id="standard-full-width"
          name="title"
          helperText={`0/250`}
          fullWidth
          error = {1 == false ? true : false}
          inputProps={{ maxLength: 2 }}
        />
      </ThemeProvider>
      <br></br>
      <br></br>

      <FormControl fullWidth>
      {/* <FormControl className={classes.formControl} fullWidth> */}
        <InputLabel shrink htmlFor="age-native-label-placeholder">
          categories *
        </InputLabel>
        <NativeSelect
          //value={state.age}
          //onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'age-native-label-placeholder',
          }}
        >
          <option value="">Select...</option>
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>

      <br></br>
      <br></br>

      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">Short summary *</Typography>
        <TextField
          id="standard-full-width"
          name="title"
          helperText={`0/250`}
          fullWidth
          error = {1 == false ? true : false}
          
          inputProps={{ maxLength: 2 }}
        />
      </ThemeProvider>

      <br></br>
      <br></br>
     

      <Typography variant="subtitle1">Type : Public</Typography>
      
      <br></br>
      <br></br>

        <TextField
          id="standard-full-width"
          name="title"
          label="Registration State"
          helperText={`0/1024`}
          fullWidth
          error = {1 == false ? true : false}
          inputProps={{ maxLength: 1024 }}
        />

      <br></br>
      <br></br>

      <div style={{
          display: 'flex',
          alignItems: 'center'}}>

      <Typography variant="subtitle1">Is this a virtual event ?</Typography>
      <Switch
        // checked={state.checkedB}
        // onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      </div>
        
      <br></br>
      <br></br>

<TextField
          id="standard-full-width"
          name="title"
          placeholder="Online Link"
          fullWidth
          error = {1 == false ? true : false}
        />
      <br></br>
      <br></br>

      <div>
      <TextField
        id="date"
        label="Start date *"
        type="date"
        defaultValue='2020-10-31'
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
        <TextField
        id="time"
        label="Start time *"
        type="time"
        defaultValue="09:00"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      </div>
      <br></br>
      <br></br>
      <div>
      <TextField
        id="date"
        label="End date *"
        type="date"
        defaultValue='2020-10-31'
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
        <TextField
        id="time"
        label="End time *"
        type="time"
        defaultValue="17:00"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      </div>
      <br></br>
      
      <DropzoneArea/>


    </form>
    </div>
  )}
}


export default withStyles(styles) (BasicTextFields)