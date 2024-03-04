import { Container, Box, useMediaQuery ,  useTheme, Grid, FormControl, TextField, InputLabel, Select, MenuItem, RadioGroup, FormControlLabel , Radio, FormLabel , Checkbox, Button, SelectChangeEvent} from '@mui/material';
import React from 'react';
import { FormDataType , InputValueType} from '../DataTypeModule/FormDataType';


// Props we are getting
type FormPropsType = {
setFormData:React.Dispatch<React.SetStateAction<FormDataType>>
setFormValue:React.Dispatch<React.SetStateAction<InputValueType>>
formValue:InputValueType
initialValue:InputValueType
action:string
setAction: React.Dispatch<React.SetStateAction<string>>
data: FormDataType;
}


const Form:React.FC<FormPropsType> = ({setFormData , formValue , setFormValue , initialValue , action , setAction}) => {

const theme = useTheme()
const isScreenMedium = useMediaQuery(theme.breakpoints.down("md"));


// Handle on Submit
const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (action === "Update") {
        setFormData((prev) => {
            const updatedData = prev.map((data) =>
                data.id === formValue.id ? formValue : data
            );
            return updatedData;
        });
        setFormValue(initialValue);
        setFormValue((prev) => ({ ...prev, terms: false }));
        setAction("Add");
    } else {
        setFormData((prev) => [...prev, formValue]);

        setFormValue((prev) => ({ ...prev, terms: false }));
        setFormValue(initialValue);
    }
};


// Handle for onChange
const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormValue((prev)=>({...prev , [e.target.name]:e.target.value}))
}


  return (
    <>
      <Container sx={{ width: isScreenMedium ? "100%" : "60%"}}  >
        <Box p={2} >
            <form onSubmit={handleOnSubmit} >
                <Grid spacing={2} container >
                    {/* Name Field */}
                    <Grid item md={6} sm={12} xs={12} >
                        <FormControl fullWidth >
                            <TextField name='name' value={formValue.name || ""} onChange={handleOnChange} label="Name" type='text'   />
                        </FormControl>
                    </Grid>

                    {/* Contact */}
                    <Grid item md={6} sm={12} xs={12} >
                        <FormControl fullWidth >
                            <TextField name='contact' onChange={handleOnChange} value={formValue.contact || ""} label="Contact" type='number'  />
                        </FormControl>
                    </Grid>

                    {/* Email  */}
                    <Grid item md={6} sm={12} xs={12} >
                        <FormControl fullWidth >
                            <TextField name='email' onChange={handleOnChange} value={formValue.email || ""} label="Email" type='email' />
                        </FormControl>
                    </Grid>

                    {/* Branch */}
                    <Grid item md={6} sm={12} xs={12} >
                        <FormControl fullWidth >
                            <InputLabel>Branch</InputLabel>
                            <Select name='branch' onChange={(e:SelectChangeEvent<string>)=>{setFormValue((prev)=>({...prev , branch:e.target.value}))}} label="Branch"  value={formValue.branch || ""} >
                                <MenuItem value="Arts" >Arts</MenuItem>
                                <MenuItem value="Commerce" >Commerce</MenuItem>
                                <MenuItem value="Science" >Science</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Gender */}
                    <Grid item md={6} sm={12} xs={12} >
                        <FormControl fullWidth  >
                            <FormLabel>Gender</FormLabel>
                            <RadioGroup name='gender' value={formValue.gender}   onChange={handleOnChange} sx={{display:"flex" , flexDirection:"row"}}  >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>


                    {/* Terms */}
                    <Grid item md={6} sm={12} xs={12} >
                        <FormControl sx={{padding: isScreenMedium ? "0px" : "20px"}} fullWidth  >
                        <FormControlLabel  control={<Checkbox  name='terms' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setFormValue((prev)=>({...prev , terms:e.target.checked}))}} />} label="Terms and Condtion" />
                        </FormControl>
                    </Grid>


                </Grid>

                <Box m={2} >
                    <Button fullWidth type='submit' variant='contained' >{action==="Add" ? "Submit" : "Update"}</Button>
                </Box>
            </form>
        </Box>
      </Container>
    </>
  );
};

export default Form;
