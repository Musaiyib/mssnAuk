import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, Paper} from "@material-ui/core";
// import { Redirect } from 'react-router-dom';
import { } from "react-icons/ri";
import mssnLogo from './img/mssn-auk-logo.jpeg'
import Swal from 'sweetalert2';
import QrLogo from './img/QrLogo'

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
            minHeight: 507,
            maxHeight: 517,
            minWidth: 410,
            maxWidth: 420,
            overflow: 'hidden',
        },
        formHeading:{
            color: "#1b5e20",
        },
        logoImg: {
            // float: "right",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
            marginLeft: 325,
        },
        logoContainer: {
            justifyContent: "center",
            alignItems: "center",
            width: 400,
        },
        recieptContect:{
            // marginTop:
            // float: 'left',
        },
        line:{
            width: 300,
            color: "#1b5e20",
        },
        recieptTitle:{
            fontSize: 15,
            color: "#1b5e20",
        },
        recieptDetails: {
            marginLeft: 58,
            textAlign: "left",
        },
        recieptDetailH5: {
            color: "#1b5e20",
        },
        recieptDetailSpan: {
            color: "black",
            marginLeft: 8,
        },
        
    }));

const Reciept = () => {
    const [name, setName] = useState('')
    const [regNo, setRegNo] = useState('')
    const [select, setSelect] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    // const initializePayment = usePaystackPayment(config)
    const classes = useStyles();
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // const inputName = document.getElementById('inputName').value
        // const inputRegNo = document.getElementById('inputRegNo').value
        // // const inputEmail = document.getElementById('inputEmail').value
        // const inputPhone = document.getElementById('inputPhone').value
        // const inputSelect = document.getElementById('selectId').value
        

        // //Name validation
        // if (inputName.length <= 5) {
        //     Swal.fire({
        //         title: 'Error',
        //         text: 'Please enter your full name',
        //         icon: 'error',
        //         showClass: {
        //           popup: 'animate__animated animate__fadeInDown'
        //         },
        //         hideClass: {
        //           popup: 'animate__animated animate__fadeOutUp'
        //         }   
        //       }, document.getElementById('inputName').focus())
        //     return
        // }

        // //Regno validation
        // if (inputRegNo.length <= 14 || inputRegNo.length >= 16) {
        //     Swal.fire({
        //         title: 'Error',
        //         text: 'Please enter a valid Registration number',
        //         icon: 'error',
        //         showClass: {
        //           popup: 'animate__animated animate__fadeInDown'
        //         },
        //         hideClass: {
        //           popup: 'animate__animated animate__fadeOutUp'
        //         }
        //     }, document.getElementById('inputRegNo').focus())
        //         return
        //     }

        

                
        // //Email validation
        // // if () {
        // //     alert('please enter a valid Registration number')
        // //     // inputRegNo.focus()
        // //     return
        // // }

        // //Phone number validation
        // if (inputPhone.length <= 10 ||inputPhone.length >= 12) {
        //     Swal.fire({
        //         title: 'Error',
        //         text: 'Please enter a valid phone number (Eg. 07082838485)',
        //         icon: 'error',
        //         showClass: {
        //           popup: 'animate__animated animate__fadeInDown'
        //         },
        //         hideClass: {
        //           popup: 'animate__animated animate__fadeOutUp'
        //         }   
        //       }, document.getElementById('inputPhone').focus())
        //     return
        // }

        // //select validation
        // if (inputSelect === '') {
        //     Swal.fire({
        //         title: 'Error',
        //         text: 'Please select your department',
        //         icon: 'error',
        //         showClass: {
        //           popup: 'animate__animated animate__fadeInDown'
        //         },
        //         hideClass: {
        //           popup: 'animate__animated animate__fadeOutUp'
        //         }   
        //       }, document.getElementById('selectId').focus())
        //     return
        // }
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
                <Grid item x1={2} lg={4} md={6} sm={8} xs={12} className={classes.gridContainer} style={{}} >
                    <Paper elevation={3} className={classes.paper}>
                        <div className={classes.logoContainer}>
                            <img src={mssnLogo} className={classes.logoImg} alt="mssnLogo" width="65" height="65" />
                        </div>
                        <div className={classes.recieptContect}>
                            <Typography variant="h6" className={classes.recieptTitle} >Transaction Reciept</Typography>
                            <hr className={classes.line} />
                            <div className={classes.recieptDetails}>
                            <h5 className={classes.recieptDetailH5} >Transaction Date: <span className={classes.recieptDetailSpan}>12:32 18/8/2020</span></h5>
                            <h5 className={classes.recieptDetailH5} >Reference Number: <span className={classes.recieptDetailSpan}>3382844544312345</span></h5>
                            <h5 className={classes.recieptDetailH5} >Amount: <span className={classes.recieptDetailSpan}>₦ 500.00</span></h5>
                            <h5 className={classes.recieptDetailH5} >Amount In Words: <span className={classes.recieptDetailSpan}>Five Hundred Naira Only</span></h5>
                            <h5 className={classes.recieptDetailH5} >Transaction Status: <span className={classes.recieptDetailSpan}>Success</span></h5>
                            </div>
                            <img src={QrLogo} alt="Qrcode" width="150" height="150" />
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </main>
    )
}
export default Reciept