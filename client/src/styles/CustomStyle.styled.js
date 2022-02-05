// import { withStyles } from "@material-ui/core/styles";
import {withStyles} from '@mui/material/styles'

const customStyles = theme => ({
    root: {
        backgroundColor: "red",
        "&:hover": {
            backgroundColor: "green"
        }
    }
});

const CustomPaper = withStyles(customStyles)(Paper);
