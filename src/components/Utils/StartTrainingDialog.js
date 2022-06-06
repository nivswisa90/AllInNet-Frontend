import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import {FcApproval} from "react-icons/fc";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import React from "react";

const StartTrainingDialog = ({open, handleClose}) => {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle style={{fontFamily: 'Roboto Mono', fontWeight: "600", lineHeight: '5px'}}>
                    Training Started <span>
                            <FcApproval/>
                        </span>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        If you want to end your training press Stop!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Stop</Button>
                    <Button onClick={handleClose}>
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default StartTrainingDialog