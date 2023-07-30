/* eslint-disable react/display-name */
/* eslint-disable react/jsx-props-no-spreading */
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const Transition = React.forwardRef((props, ref) => <Slide direction="down" ref={ref} {...props} />);

const AlertDialogMessage = function ({ handleAlertClose, alertOpen }) {
    const { alertMessageContent } = useSelector((state) => state.cart);
    return (
        <div>
            <Dialog
                open={alertOpen}
                onClose={handleAlertClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                TransitionComponent={Transition}
                keepMounted
                maxWidth="xs"
                sx={{ zIndex: (theme) => theme.zIndex.modal + 1 }}
            >
                <DialogTitle id="alert-dialog-title" color="primary">
                    eSchool Journey
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{ textTransform: 'capitalize' }}>
                        {alertMessageContent}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAlertClose} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
export default AlertDialogMessage;
