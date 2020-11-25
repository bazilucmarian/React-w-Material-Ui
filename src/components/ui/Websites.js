import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/hidden";

import backArrow from "../../assets/backArrow.svg";
import forwardArrow from "../../assets/forwardArrow.svg";
import analytics from "../../assets/analytics.svg";
import seo from "../../assets/seo.svg";
import outreach from "../../assets/outreach.svg";
import eccomerce from "../../assets/ecommerce.svg";

import CallToAction from "../ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  paragraphContainer: {
    maxWidth: "30em",
  },
}));

const Websites = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: matchesXS ? "3em" : "2em" }}
      >
        <Hidden mdDown>
          <Grid
            item
            className={classes.arrowContainer}
            style={{ marginRight: "1em", marginLeft: "-3.5em" }}
          >
            <IconButton
              component={Link}
              to="/mobileapps"
              style={{ backgroundColor: "transparent" }}
              onClick={() => setSelectedIndex(2)}
            >
              <img src={backArrow} alt="Back to ios/app page" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid item container direction="column" className={classes.heading}>
          <Grid item>
            <Typography variant="h2" align="center">
              Website Development
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="center" paragraph>
              Whether we' re replacing old software or inventig new solutions,
              Arc Development is here to help your business tackle technology
            </Typography>
            <Typography variant="body1" align="center" paragraph>
              Using regulat commercial software leaves you with a lot of stuff
              you do not need, without some of the tuff you do need, and
              ultimately controls that way to work.Without using any software at
              all you risk falling behind competitors and missing out on huge
              savings from increased efficiency
            </Typography>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.arrowContainer}>
            <IconButton
              component={Link}
              to="/services"
              style={{ backgroundColor: "transparent" }}
              onClick={() => setSelectedIndex(0)}
            >
              <img src={forwardArrow} alt="forward to services page" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        className={classes.rowContainer}
        alignItems="center"
        style={{ marginTop: "5em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                Analitycs
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                alt="analytics image"
                style={{ marginLeft: matchesSM ? "0" : "-2.5em" }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Knowledge is power, and data is 21st Century gold.Analyzing this
            data can reveal hidden patterns and trends in tour business,
            enpowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        alignItems="center"
        direction={matchesSM ? "column" : "row"}
        justify="flex-end"
        style={{ marginTop: "5em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                E-commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={eccomerce} alt="eccomerce image" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            It's no secret that people to shop online
          </Typography>
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            In 2017 overt $2.3 trillion was spent in e-commerce, and it's time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        style={{ marginTop: "5em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt="outreach image" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography variant="body1" align={matchesSM ? "center" : undefined}>
            Knowledge is power, and data is 21st Century gold.Analyzing this
            data can reveal hidden patterns and trends in tour business,
            enpowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="row"
        className={classes.rowContainer}
        direction={matchesSM ? "column" : "row"}
        alignItems="center"
        justify="flex-end"
        style={{ marginTop: "5em", marginBottom: "3em" }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align={matchesSM ? "center" : undefined}
              >
                Search Engine <br />
                Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="seo image" />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: "1em" }}
          className={classes.paragraphContainer}
        >
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            How often heve you ever benn to the second page of Google results?
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            If you're like us, probably never
          </Typography>
          <Typography
            variant="body1"
            paragraph
            align={matchesSM ? "center" : undefined}
          >
            Customers don't go there either, se we make sure you're website is
            designed to end up on top
          </Typography>
        </Grid>
      </Grid>
      <CallToAction setValue={setValue} />
    </Grid>
  );
};

export default Websites;
