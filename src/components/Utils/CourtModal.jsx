import React, {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import court from '../../media/courtPositions.jpeg'
import {makeStyles} from "@material-ui/core/styles";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const useStyles = makeStyles(() => ({
    courtPositions: {
        backgroundImage: `url(${court})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center',
        height: '400px',
    },
    desc:{
        fontFamily: 'Roboto Mono',
        fontSize: '20px',
    },
    modalLocation:{
        margin: '0 auto',
        width: '40%',
        marginBottom: '2vh',
        marginTop: '2vh',
        display: 'inline-block',
    }
}))

const CourtModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles()

    return (
        <div className={classes.modalLocation}>
            <Button onClick={handleOpen} variant="outlined">Positions Descriptions</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography className={classes.desc} id="modal-modal-title" variant="h6" component="h2">
                       Each colored circle represents the position you should throw from!
                    </Typography>
                    <div className={classes.courtPositions}/>
                </Box>
            </Modal>
        </div>
    )
}
export default CourtModal