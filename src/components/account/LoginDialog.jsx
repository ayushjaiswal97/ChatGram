import { Box, Dialog } from "@mui/material";

const DialogStyle = {
    height: "95%",
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden",
    
}

const LoginDialog = () => {
    return(
        <Dialog
            open={true}
            PaperProps={{ sx: DialogStyle}}
            
        >
             <Box>
                <Box>

                </Box>
                
                <Box>

                </Box>
             </Box>
        </Dialog>
    )
};

export default LoginDialog;