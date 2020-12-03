import React from 'react';
import classNames from "classnames";
import AppBar from "@material-ui/core/AppBar"; 
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import headerStyles from "../assets/jss/headerStyles";
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import logo from '../assets/img/favicon-32x32.png'
import { useDarkModeState } from '../hooks/useDarkModeState';
import { useDarkModeDispatch } from '../hooks/useDarkModeDispatch';

const useStyles = makeStyles(headerStyles);

const Header = (props) => {
    const classes = useStyles();
    const {darkMode} = useDarkModeState();
    const dispatch = useDarkModeDispatch();

    React.useEffect(() => {
        if (props.changeColorOnScroll) {
            window.addEventListener("scroll", headerColorChange);
        }
        return function cleanup() {
            if (props.changeColorOnScroll) {
            window.removeEventListener("scroll", headerColorChange);
            }
        };
    });


    const headerColorChange = () => {
        const { color, changeColorOnScroll } = props;
        const windowsScrollTop = window.pageYOffset;
        if (windowsScrollTop > changeColorOnScroll.height) {
        document.body
            .getElementsByTagName("header")[0]
            .classList.remove(classes[color]);
        document.body
            .getElementsByTagName("header")[0]
            .classList.add(classes[changeColorOnScroll.color]);
        } else {
        document.body
            .getElementsByTagName("header")[0]
            .classList.add(classes[color]);
        document.body
            .getElementsByTagName("header")[0]
            .classList.remove(classes[changeColorOnScroll.color]);
        }
    }

    const { color } = props;
    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes[color]]: color
    });

    
    
    // TODO: add Logo
    return (
        <div className={classes.root}>
        <AppBar className={appBarClasses}>
            <Toolbar>
                <div className={classes.title}>
                <img src={logo} alt="..." />
                </div>
                {/* <Typography className={classes.title}>Richard Chaidez</Typography> */}
                <FormGroup row>
                    <FormControlLabel
                        control={<Switch checked={darkMode} onChange={() => dispatch({type: darkMode? "OFF": "ON"})} name="darkMode" />}
                        label="Dark Mode"
                    />
                </FormGroup>
                <IconButton
                classes={{
                    root: classes.icons
                }}
                href="https://github.com/rchaidez93"
                >
                    <GitHubIcon color="inherit" fontSize="default" />
                </IconButton>
                <IconButton 
                classes={{
                    root: classes.icons
                }}
                href="https://www.linkedin.com/in/richard-chaidez/"
                >
                    <LinkedInIcon color="inherit" fontSize="default" />
                </IconButton>      
            </Toolbar>
            
        </AppBar>
        </div>
    )
}

export default Header;