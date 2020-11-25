import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ButtonArrow from "./ButtonArrow";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import phoneIcon from "../../assets/phone.svg";
import emailIcon from "../../assets/email.svg";
import airplane from "../../assets/send.svg";
import cancel from "../../assets/cancel.svg";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "3em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "0",
      marginRight: "0",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    height: 35,
    fontSize: "0.7rem",
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "5em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 250,
    },
  },
}));

const Contact = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = useState("");
  // const [nameHelper, setNameHelper] = useState("");
  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [message, setMessage] = useState("");
  // const [messageHelper, setMessageHelper] = useState("");

  const [open, setOpen] = useState(false);

  const onChange = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );

        if (!validEmail) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;

      case "phone":
        setPhone(e.target.value);
        const validPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );

        if (!validPhone) {
          setPhoneHelper("Invalid Phone");
        } else {
          setPhoneHelper("");
        }
        break;
      default:
        break;
    }
  };

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        justify="center"
        lg={4}
        xl={3}
        style={{
          margin: matchesSM
            ? "1em 0 3em 0"
            : matchesMD
            ? "3em 0 3em 0 "
            : undefined,
        }}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.blue }}
              >
                We'are waiting
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="tel:(555) 555-555"
                  >
                    (555) 555-555
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <img
                  src={emailIcon}
                  alt="email"
                  style={{ marginRight: "0.5em", verticalAlign: "bottom" }}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    style={{ textDecoration: "none", color: "inherit" }}
                    href="mailto:bazilucmarian98@yahoo.com"
                  >
                    {" "}
                    bazilucmarian98@yahoo.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container direction="column">
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  fullWidth
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid
                item
                container
                style={{ maxWidth: "20em", marginBottom: "0.5em" }}
              >
                <TextField
                  fullWidth
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  label="Email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  label="Phone"
                  id="phone"
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em" }}>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                value={message}
                id="message"
                name="message"
                multiline
                rows={10}
                onChange={(e) => setMessage(e.target.value)}
                className={classes.message}
              />
            </Grid>
            <Grid item container justify="center" style={{ marginTop: "2em" }}>
              <Button
                variant="container"
                onClick={() => setOpen(true)}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phone.length === 0 ||
                  email.length === 0
                }
                className={classes.sendButton}
              >
                Send Message
                {name.length === 0 ||
                message.length === 0 ||
                phone.length === 0 ||
                email.length === 0 ? (
                  <img
                    src={cancel}
                    alt="cancel message"
                    width="25"
                    height="25"
                    style={{
                      marginLeft: "1em",
                    }}
                  />
                ) : (
                  <img
                    src={airplane}
                    alt="send message"
                    style={{ marginLeft: "1em" }}
                  />
                )}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        style={{ zIndex: "1306" }}
        open={open}
        fullScreen={matchesXS}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "3em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "8em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "7em"
              : "8em",
          },
        }}
      >
        <DialogContent>
          <Grid container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                gutterBottom
                align="center"
                style={{ marginBottom: "1em" }}
              >
                Confirm Message
              </Typography>
            </Grid>
            <Grid item container direction="column">
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  fullWidth
                  label="Name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid
                item
                container
                style={{ maxWidth: "20em", marginBottom: "0.5em" }}
              >
                <TextField
                  fullWidth
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  label="Email"
                  id="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  label="Phone"
                  id="phone"
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: matchesXS ? "100%" : "20em" }}>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                value={message}
                id="message"
                name="message"
                multiline
                rows={10}
                onChange={(e) => setMessage(e.target.value)}
                className={classes.message}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Button color="primary" onClick={() => setOpen(false)}>
                Cancel
              </Button>
            </Grid>
            <Grid item>
              {" "}
              <Button
                variant="container"
                onClick={() => setOpen(true)}
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phone.length === 0 ||
                  email.length === 0
                }
                className={classes.sendButton}
              >
                Send Message
                {name.length === 0 ||
                message.length === 0 ||
                phone.length === 0 ||
                email.length === 0 ? (
                  <img
                    src={cancel}
                    alt="cancel message"
                    width="25"
                    height="25"
                    style={{
                      marginLeft: "1em",
                    }}
                  />
                ) : (
                  <img
                    src={airplane}
                    alt="send message"
                    style={{ marginLeft: "1em" }}
                  />
                )}
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? "0" : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2" align={matchesMD ? "center" : undefined}>
                Simple Software. <br /> Revolutionary Results
              </Typography>
              <Typography
                variant="subtitle2"
                align={matchesMD ? "center" : undefined}
                style={{ fontSize: "1.5rem" }}
              >
                Take advantage of the 21st Century
              </Typography>
              <Grid item container justify={matchesMD ? "center" : undefined}>
                <Button
                  variant="outlined"
                  className={classes.learnButton}
                  component={Link}
                  to="/revoluion"
                  onClick={() => setValue(2)}
                >
                  {" "}
                  <span style={{ marginRight: "5px" }}> Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            component={Link}
            to="/estimate"
            className={classes.estimateButton}
            onClick={() => setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
