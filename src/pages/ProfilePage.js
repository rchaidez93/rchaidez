import React from 'react';
import classNames from "classnames";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Parallax from '../components/Parallax';
import mainBg from '../assets/img/sitemainbackground.jpg'
import profile from "../assets/img/me.jpg";
import styles from "../assets/jss/mainStyle";
import { data } from '../staticData';
import LinearProgressBar from '../components/LinearProgressBar';

const useStyles = makeStyles(styles);

const ProfilePage = (props) => {
    const classes = useStyles();
    const {...rest} = props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    const {projects} = data;
    return (
        <div>
            <Header
            color="transparent"
            brand="Richard Chaidez"
            fixed
            changeColorOnScroll={{
                height:200,
                color:"white"
            }}
            {...rest}
            />
            <Parallax small filter image={mainBg}/>
            <Container maxWidth="xl">
                <Paper elevation={20}>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={12} md={6}>
                            <div className={classes.profile}>
                                <div style={{textAlign:'center'}}>
                                    <img src={profile} alt="..." className={imageClasses} />
                                </div>
                                <div>
                                    <Typography align="center" variant="h3">
                                        Richard Chaidez    
                                    </Typography>
                                    <Typography align="center" variant="h6">
                                        Senior Software Developer
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12} sm={12} md={6}>
                            <Typography variant="caption">
                                Software Developer from St. Louis, Missouri with four years of professional experience in coding, testing, and establishing quick responsive web applications.
                                Self-motivated, determined, and passionate about learning and increasing my skills everyday by constantly coding and studying different programming languages.
                            </Typography>
                        </Grid>
                    </Grid>
                    <div style={{paddingTop:'60px'}}/>
                    <Container maxWidth="lg">
                        <Grid container direcion="row" spacing={6}>
                        <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="h6">Projects</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={10}>
                                        {projects.map(proj => (
                                            <div>
                                                <ul>
                                                    <li>
                                                    <Typography>
                                                        <Link href={proj.link} color="inherit">
                                                            {proj.name}
                                                        </Link>
                                                    </Typography>
                                                    </li>
                                                </ul>
                                            </div>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="h6">Experience</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={10}>
                                        <Typography>Junior Software Developer at LB Networks, Chesterfield, MO</Typography>
                                        <Typography variant="caption">Febuary 2017 - Present</Typography>
                                        <div>
                                            <ul>
                                                <li><Typography>Developed and maintained code using Php, MySql, Javascript, Html, and CSS for LB Networks.</Typography></li>
                                                <li><Typography>Contributed software development expertise in the development of version releases through the software cycle, from requirements definition through successful deployment.</Typography></li>
                                                <li><Typography>Migrated legacy procedural code to Codeigniter’s framework.</Typography></li>
                                                <li><Typography>Developed a new user interface using React and Material UI design.</Typography></li>
                                                <li><Typography>Implemented Amazon S3 cloud storage to store images.</Typography></li>
                                            </ul>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="h6">Education</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={10}>
                                        <Typography>University of Missouri - St. Louis</Typography>
                                        <Typography variant="caption">January 2014 - May 2017</Typography>
                                        <div>
                                            <ul>
                                                <li>Bachelor's - Computer Science</li>
                                                <li>Minor's - Mathematics</li>
                                            </ul>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Typography variant="h6">Skills</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={10}>
                                        {data.skills.map((progress, index) => (
                                            <LinearProgressBar key={index} label={progress.label} value={progress.value}/>
                                        ))}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </Container>
            <Footer />
        </div>
    );
}

export default ProfilePage;