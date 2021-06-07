import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import NavigationBar from "./NavigationBar";
import cookYourself from "../images/cook-yourself.png";
import movieTheatre from "../images/movie-theatre.png";
import bucharati from "../images/bucharati.png";
import ITViec from "../images/it-viec-clone.png";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    // margin: "3rem",
    margin: "5rem auto",
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <NavigationBar />
      <Grid container justify="center">
        {/* Project Cook Yourself */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project Cook Yourself"
                height="140"
                image={cookYourself}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project: Cook Yourself
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A food recipe sharing app. Discover whatever the taste you
                  love and share whatever the dish you are the most proud of
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://github.com/Bach-Nghia-Nguyen/cook-yourself-client"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" color="primary">
                  Front-end
                </Button>
              </a>
              <a
                href="https://github.com/Bach-Nghia-Nguyen/cook-yourself-server"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" color="primary">
                  Back-end
                </Button>
              </a>
              <a
                href="https://cook-yourself.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        {/* Project Movie Theatre */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project Movie Theatre"
                height="140"
                image={movieTheatre}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project: Movie Theatre
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A small ReactJS project using The Movie Database API to fetch
                  the movie data.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://github.com/Bach-Nghia-Nguyen/movie-theatre"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" color="primary">
                  Source code
                </Button>
              </a>
              <a
                href="https://nghia-movie-theatre.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        {/* Project Bucharati */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project Bucharati"
                height="140"
                image={bucharati}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project: Bucharati
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Photo and video gallery website. Written in HTML, CSS and
                  JavaScript. Using the resources fetched by Pexels API
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://github.com/Bach-Nghia-Nguyen/Pexels-gallery-ver-2"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" color="primary">
                  Source code
                </Button>
              </a>
              <a
                href="https://pexels-gallery.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>

        {/* Project IT Viec clone */}
        <Grid item xs={12} sm={8} md={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="IT Viec Clone"
                height="140"
                image={ITViec}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  IT Viec clone
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  A small React project that clones a famous IT job search
                  website in Vietnam
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href="https://github.com/Bach-Nghia-Nguyen/itviec-clone"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" color="primary">
                  Source code
                </Button>
              </a>

              <a href="https://it-viec-cloned-by-nghia.netlify.app/">
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
