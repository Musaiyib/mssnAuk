import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, Paper} from "@material-ui/core";
// import { Redirect } from 'react-router-dom';
import { } from "react-icons/ri";
import ReactImageProcess from 'react-image-process';
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
        recieptContent:{
            // marginTop:
            position: 'relative',
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
            position: 'absolute',
            zIndex: 1,
        },
        recieptDetailH5: {
            color: "#1b5e20",
        },
        recieptDetailSpan: {
            color: "black",
            marginLeft: 8,
            fontWeight: 400,
            letterSpacing: 0.5,
            fontFamily: 'Oxygen',
        },
        waterMarkLogo: {
            position: 'absolute',
            top: 90,
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            opacity: 0.25,
        },
        Qr: {
            // position: 'absolute',
            // textAlign: 'center',
            marginTop: 220,
        },
        titleLogo: {
            marginTop: 20,
        }
    }));

const Reciept = () => {
    // const [name, setName] = useState('')

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
        
        // console.log(name)
    }

    return (
        <main>
            <Grid style={{ justifyContent: "center" }} container >
                <Grid item x1={2} lg={4} md={6} sm={8} xs={12} className={classes.gridContainer} style={{}} >
                    <Paper elevation={6} className={classes.paper}>
                        {/* <div> */}
                            {/* <div className={classes.logoContainer}>
                                <img src={mssnLogo} className={classes.logoImg} alt="mssnLogo" width="65" height="65" />
                            </div> */}
                            <img src={mssnLogo} className={classes.titleLogo} alt="mssnLogo" width="70" height="70" />
                            <div className={classes.recieptContent}>
                                <Typography variant="h6" className={classes.recieptTitle} >Transaction Reciept</Typography>
                                <hr className={classes.line} />
                                <div className={classes.recieptDetails}>
                                <h5 className={classes.recieptDetailH5} >Transaction Date: <span className={classes.recieptDetailSpan}>12:32 18/8/2020</span></h5>
                                <h5 className={classes.recieptDetailH5} >Reference Number: <span className={classes.recieptDetailSpan}>3382844544312345</span></h5>
                                <h5 className={classes.recieptDetailH5} >Amount: <span className={classes.recieptDetailSpan}>₦ 500.00</span></h5>
                                <h5 className={classes.recieptDetailH5} >Amount In Words: <span className={classes.recieptDetailSpan}>Five Hundred Naira Only</span></h5>
                                <h5 className={classes.recieptDetailH5} >Transaction Status: <span className={classes.recieptDetailSpan}>Success</span></h5>
                                </div>
                                <img src={mssnLogo} className={classes.waterMarkLogo} alt="mssnLogo" width="150" height="150" />
                                <img src={QrLogo} alt="Qrcode" className={classes.Qr} width="130" height="130" />
                            </div>
                        {/* </div> */}
                    </Paper>
                </Grid>
            </Grid>
        </main>
    )
}
export default Reciept