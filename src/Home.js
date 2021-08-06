import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, InputAdornment, TextField, Paper, MenuItem} from "@material-ui/core";
// import { Redirect } from 'react-router-dom';
import { RiMailLine, RiPhoneFill, RiAccountCircleFill, RiNurseFill } from "react-icons/ri";
import Swal from 'sweetalert2';
// import QrImg from './img/NAS_CSC_18_1181'

    const useStyles = makeStyles((theme) => ({
        inputFields: {
            color: "#1b5e20",
            outlineColor: "#1b5e20",
            fontSize: 10,
            width: "100%",
        },
        icons: {
            color: "#1b5e20",
        },
        gridContainer: {
            marginTop: 10,
            margin: 10,
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        submitBtn: {
            borderRadius: 5,
            border: 'none',
            borderBottomWidth: 200,
            borderBottomColor: "#1b5e20",
            color: "#1b5e20",
        },
        paper:{
            minHeight: 400,
            maxHeight: 500,
            minWidth: 200,
        },
        // text:{
        //     padding: 60,
        //     fontSize: 20,
        //     textAlign: 'center',
        //     justifyContent: 'center',
        //     color: 'primary'
        // },
        formHeading:{
            color: "#1b5e20",
        },
    }));

const Home = () => {
    const [name, setName] = useState('')
    const [regNo, setRegNo] = useState('')
    const [select, setSelect] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    // const initializePayment = usePaystackPayment(config)
    const classes = useStyles();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const inputName = document.getElementById('inputName').value
        const inputRegNo = document.getElementById('inputRegNo').value
        // const inputEmail = document.getElementById('inputEmail').value
        const inputPhone = document.getElementById('inputPhone').value
        const inputSelect = document.getElementById('selectId').value
        

        //Name validation
        if (inputName.length <= 5) {
            Swal.fire({
                title: 'Error',
                text: 'Please enter your full name',
                icon: 'error',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }   
              }, document.getElementById('inputName').focus())
            return
        }

        //Regno validation
        if (inputRegNo.length <= 14 || inputRegNo.length >= 16) {
            Swal.fire({
                title: 'Error',
                text: 'Please enter a valid Registration number',
                icon: 'error',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }
            }, document.getElementById('inputRegNo').focus())
                return
            }

        

                
        //Email validation
        // if () {
        //     alert('please enter a valid Registration number')
        //     // inputRegNo.focus()
        //     return
        // }

        //Phone number validation
        if (inputPhone.length <= 10 ||inputPhone.length >= 12) {
            Swal.fire({
                title: 'Error',
                text: 'Please enter a valid phone number (Eg. 07082838485)',
                icon: 'error',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }   
              }, document.getElementById('inputPhone').focus())
            return
        }

        //select validation
        if (inputSelect === '') {
            Swal.fire({
                title: 'Error',
                text: 'Please select your department',
                icon: 'error',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }   
              }, document.getElementById('selectId').focus())
            return
        }
        // if(status === true){
        //     swal("Thanks for your payment!", "Please print invoice  your reciept!", "success");
        // }else{
        //     swal("We encounter some error in your payment!", "Please try again!", "error");
        //     setSatus(true)
        // }
        
        console.log(name)
        console.log(regNo)
        console.log(select)
        console.log(email)
        console.log(phone)
    }

    return (
        <main>
            <Grid style={{ justifyContent: "center" }} container >
                
                {/* <Grid item x1={2} lg={4} md={6} sm={8} xs={12} className={classes.gridContainer} style={{}} >
                    <Paper elevation={3} className={classes.paper}>
                        <img src={QrImg} width={440} height={440} alt={"qrcode"} />
                        <Typography variant="h3" className={classes.text}>The Publish directory for single page apps is often called dist, but varies by framework and build tool. You can check the framework documentation, or try running the build script locally, then check to see what folder was created as a result.</Typography>
                    </Paper>
                </Grid> */}
                
                <Grid item x1={2} lg={4} md={6} sm={8} xs={12} className={classes.gridContainer} style={{}} >
                    <Paper elevation={6} className={classes.paper} style={{ padding: 20, paddingLeft: 80, paddingRight: 80}}>
                        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
                            <Typography variant="h6" color="primary" className={classes.formHeading} style={{marginTop: 10, marginBottom: 6}}>Pay Your MSSN Tax</Typography>
                            <br />
                            <TextField
                                className={classes.inputFields}
                                color="#1b5e20"
                                id="inputName"
                                label="Fullname *"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <RiAccountCircleFill className={classes.icons} size="20px"/>                                    
                                        </InputAdornment>                                
                                    )
                                }}
                            />
                            <br />
                            <br />
                            <TextField
                                className={classes.inputFields}
                                color="#1b5e20"
                                id="inputRegNo"
                                label="Registration Number *"
                                value={regNo}
                                onChange={e => setRegNo(e.target.value)}
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <RiNurseFill className={classes.icons} size="20px"/>                                    
                                        </InputAdornment>                                    
                                    )
                                }}
                            />
                            <br />
                            <br />
                            
                            <TextField
                                select
                                id="selectId"
                                value={select}
                                variant="outlined"
                                className={classes.inputFields}
                                onChange={(e) => setSelect(e.target.value)}
                                label="Department *"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <RiAccountCircleFill className={classes.icons} size="20px"/>                                    
                                        </InputAdornment>                                
                                    )
                                }}
                                >
                                <MenuItem value='none' selected>
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"Computer"} >Computer Science</MenuItem>
                                <MenuItem value={"Biology"} >Biology</MenuItem>
                                <MenuItem value={"Chemistry"} >Chemistry</MenuItem>
                                <MenuItem value={"Mathematics"} >Mathematics</MenuItem>
                                <MenuItem value={"English"} >English</MenuItem>
                                <MenuItem value={"Education"} >Education</MenuItem>
                                <MenuItem value={"Political Science"} >Political Science</MenuItem>
                                <MenuItem value={"Business Admin"} >Business Admin</MenuItem>
                                <MenuItem value={"Accounting "}>Accountig</MenuItem>
                            </TextField>
                            <br />
                            <br />
                            <TextField
                                className={classes.inputFields}
                                color="primary"
                                id="inputEmail"
                                label="Email *"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <RiMailLine className={classes.icons} size="20px"/>                                    
                                        </InputAdornment>                                
                                    )
                                }}
                            />
                            <br />
                            <br />
                            <TextField
                                className={classes.inputFields}
                                id="inputPhone"
                                style={{color: "primary",
                                outlineColor: "primary",
                                fontSize: 10,}}
                                label="Phone Number *"
                                value={phone}
                                type="tel"
                                onChange={e => setPhone(e.target.value)}
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">                                    
                                            <RiPhoneFill className={classes.icons} size="20px"/>                                    
                                        </InputAdornment>                               
                                    )
                                }}
                            />
                            <br />
                            <br />
                            <Button type="submit" variant="outlined" className={classes.submitBtn}>Pay Now</Button>
                        </form>
                        
                        {/* <a href="./reciept">Reciept</a> */}
                    </Paper>
                </Grid>
            </Grid>
        </main>
    )
}
export default Home