import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import clsx from 'clsx';
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

import SelectTimezoneMaterialUi from "select-timezone-material-ui";
// import SelectTimezoneMaterialUi from "input-material-ui";



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
      marginRight:20
    },
    timezone:{
      width:600
    },
    margin:{
      marginRight:20
    }
});


class BasicTextFields extends React.Component {
  state = {

    event:'',
    upload:[],
    title:'',
    category:'',
    summary:'',
    regState:'',
    isVirtual:false,
    link:'',
    timezone:'',
    startDate:'',
    startTime:'',
    endDate:'',
    endTime:'',
    dropZoneArea:[]
  }

  submit(){
    let {event,title,category,summary,timezone,startDate,startTime,endDate,endTime} = this.state
    if(event === ''){
      alert('Please Select Event')
    }else if(title===''){
      alert('Please Add Title')
    }else if(category===''){
      alert('Please Select Catagory')
    }else if(summary===''){
      alert('Please Add Summary')
    }else if(timezone===''){
      alert('Please Add Timezone')
    }else if(startDate===''){
      alert('Please Select Start Date')
    }else if(startTime===''){
      alert('Please Select Start Time')
    }else if(endDate===''){
      alert('Please Select End Date')
    }else if(endTime===''){
      alert('Please Select End Time')
    }else{
      alert('Submitted form successfully')
    }
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value}
      )
  }

  handleChangeUpload(event){
    this.setState({
      [event.target.name]: event.target.files[0]}
      )
  }

  handleTimezone(event){
    this.setState({
      timezone: event
    })
  }
  

  render(){
  const {classes} = this.props;
  // const classes = useStyles();

  return (
    <div>
    <div style={{display:'flex', justifyContent: 'space-between'}}>
    <h3 style={{color:'purple'}}>Create Event</h3>
    <div style={{display:'flex', marginRight:'15'}}>

    <Button variant="contained" color="primary" size="small"
    type="submit" className={classes.margin} onClick={() => {this.submit()}}>
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
        <InputLabel shrink htmlFor="age-native-label-placeholder" required>
          Add event in
        </InputLabel>
        <NativeSelect
          inputProps={{
            name: 'event',
            id: 'age-native-label-placeholder',
          }}
          value={this.state.event}
          onChange={(e)=>{this.handleChange(e)}}
        >
          <option value="" >Select...</option>
          <option value={10} >Ten</option>
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
          name="upload"
          style={{ display: "none" }}
          onChange={(e) => {this.handleChangeUpload(e)}}
          
        />
      </Button>
      <br></br>
      <br></br>

      <ThemeProvider theme={theme}>
        <Typography variant="subtitle1">Title</Typography>
        <TextField
          id="standard-full-width"
          name="title"
          label="Title"
          helperText={`${this.state.title.length}/250`}
          fullWidth
          error = {1 == false ? true : false}
          inputProps={{ maxLength: 250 }}
          onChange={(e)=>{this.handleChange(e)}}
          required
        />
      </ThemeProvider>
      <br></br>
      <br></br>

      <FormControl fullWidth>
      {/* <FormControl className={classes.formControl} fullWidth> */}
        <InputLabel shrink htmlFor="age-native-label-placeholder" required>
          categories
        </InputLabel>
        <NativeSelect
          value={this.state.category}
          onChange={(e)=>{this.handleChange(e)}}
          inputProps={{
            name: 'category',
            id: 'age-native-label-placeholder',
          }}
          required
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
        <Typography variant="subtitle1" required>Short summary</Typography>
        <TextField
          id="standard-full-width"
          name="summary"
          onChange={(e)=>{this.handleChange(e)}}
          helperText={`${this.state.summary.length}/250`}
          fullWidth
          //error = {1 == false ? true : false}
          //error={text === "hello"}
          inputProps={{ maxLength: 250 }}
        />
      </ThemeProvider>

      <br></br>
      <br></br>
     

      <Typography variant="subtitle1">Type : Public</Typography>
      
      <br></br>
      <br></br>

        <TextField
          id="standard-full-width"
          name="regState"
          label="Registration State"
          onChange={(e)=>{this.handleChange(e)}}
          helperText={`${this.state.regState.length}/1024`}
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
        //checked={this.state.isVirtual}
        name="isVirtual"
        onChange={(e)=>{this.setState({isVirtual: !this.state.isVirtual})}}
        color="primary"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      </div>
        
      <br></br>
      <br></br>

      <TextField
          id="standard-full-width"
          name="link"
          placeholder="Online Link"
          fullWidth
          error = {1 == false ? true : false}
          onChange={(e)=>{this.handleChange(e)}}
        />
      <br></br>
      <br></br>

      <SelectTimezoneMaterialUi
          label="Select timezone *"
          name="timezone"
          helpertext="Please select a timezone from the list"
          required
          onChange={(e)=>{this.handleTimezone(e)}}
          className={classes.timezone}
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
        name="startDate"
        onChange={(e)=>{this.handleChange(e)}}
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
        name="startTime"
        onChange={(e)=>{this.handleChange(e)}}
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
        name="endDate"
        onChange={(e)=>{this.handleChange(e)}}
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
        name="endTime"
        onChange={(e)=>{this.handleChange(e)}}
      />
      </div>
      <br></br>
      
      
      <DropzoneArea name="dropZoneArea" onChange={(e)=>{this.setState({dropZoneArea:e})}}/>
      

    </form>
    </div>
  )}
}


export default withStyles(styles) (BasicTextFields)