import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Lottie from "react-lottie";

import vision from "../../assets/vision.svg";
import technology from "../../animations/technologyAnimation/data.json";
import constultation from "../../assets/consultationIcon.svg";
import mockup from "../../assets/mockupIcon.svg";
import review from "../../assets/reviewIcon.svg";
import design from "../../assets/designIcon.svg";
import build from "../../assets/buildIcon.svg";
import launch from "../../assets/launchIcon.svg";
import maintain from "../../assets/maintainIcon.svg";
import iterate from "../../assets/iterateIcon.svg";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
}));

const Revolution = () => {
  const classes = useStyles();
  const theme = useTheme();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: technology,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography
          variant="h2"
          style={{ fontFamily: "Pacifico" }}
          align={matchesMD ? "center" : undefined}
        >
          The Revolution
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}
      >
        <Grid item lg>
          <img
            src={vision}
            alt="mouuntain throuch binoculars"
            style={{
              maxWidth: matchesSM ? 300 : "40em",
              marginRight: matchesMD ? "0" : "5em",
              marginBottom: matchesMD ? "5em" : "0",
              width: "100%",
            }}
          />
        </Grid>
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : "right"}
            >
              Vision
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              We want to help businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : "right"}
            >
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culture, and interests,
              helping them overcome life’s obstacles. Each project is a step
              towards that goal.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em", marginBottom: "10em" }}
      >
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              align={matchesMD ? "center" : undefined}
            >
              Technology
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              In 2013, Facebook invented a new way of building websites. This
              new system, React.js, completely revolutionizes the process and
              practice of website development.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Instead of chaining together long individual pages, like
              traditional websites, React websites are built with little chunks
              of code called components. These components are faster, easier to
              maintain, and are easily reused and customized, each serving a
              singular purpose.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Two years later they shocked the world by releasing a similar
              system, React Native, for producing iOS and Android apps. Instead
              of having to master two completely separate development platforms,
              you can leverage the knowledge you already possessed from building
              websites and reapply it directly! This was a huge leap forward.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              This technology is now being used by companies like AirBnB,
              Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
              Facebook purchased Instagram large portions of it were even
              rebuilt using React.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              Developers have since built on top of these systems by automating
              project setup and deployment, allowing creators to focus as much
              as possible on their work itself.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              These technical advancements translate into savings by
              significantly reducing the workload and streamlining the workflow
              for developing new pieces of software, while also lowering the
              barrier to entry for mobile app development.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align={matchesMD ? "center" : undefined}
            >
              This puts personalization in your pocket — faster, better, and
              more affordable than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container lg justify={matchesMD ? "center" : "flex-end"}>
          <Lottie
            options={defaultOptions}
            style={{ maxWidth: "40em", margin: 0 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ backgroundColor: "#B3B3B3", height: "80em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Cunsultation
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Our process begins the moment you realize you need a piece of
              technology for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things up, our initial consultation will help you examine
              your business holistically to find the best solutions.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Detailed notes will be taken on your requirements and constraints,
              while taking care to identify other potential areas for
              consideration.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers to do
              things previously unimaginable, and our expertise and intuition
              will help usher you into this new future of possibilities.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: matchesMD ? undefined : "center" }}>
          <img
            src={constultation}
            alt="consultation icon"
            style={{ width: "100%", maxWidth: 700 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#FF7373", height: "75em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Mockup
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Then it’s time for us to start on your minimum viable product.
              That’s just a fancy term for a mockup, which doesn’t include
              colors, images, or any other polished design elements, but
              captures the essential layout structure and functionality.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              This helps us understand and refine the solution itself before
              getting distracted by specifics and looks.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={mockup}
            alt="basic website design"
            style={{ width: "100%", maxWidth: 1000 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39B54A", height: "70em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Review
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Before moving any farther we come back to you with our progress.
              This gives you the freedom to discuss any changes you may want or
              any ideas you may have come up with before any heavy lifting has
              been done.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Once you’re completely satisfied with the vision for our solution
              we get down to the nitty gritty, fine-details of design.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              This helps us understand and refine the solution itself before
              getting distracted by specifics and looks.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={review}
            alt="basic website design"
            style={{ width: "100%", maxWidth: 300 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#A67C52", height: "60em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Design
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Using the mockups and notes taken during the consultation as
              guides, we will start ironing out what the final product will look
              like. This also involves using any brand material like fonts,
              colors, and logos to extend the experience you’re already familiar
              with.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              No aspect is superfluous, and care will be taken with every
              decision.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={design}
            alt="design"
            style={{ width: "100%", maxWidth: 800 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#39B54A", height: "70em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Launch
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              A second round of review is essential to our goal of creating
              exactly what you want, exactly how you want it.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              This time we’ll be going over the finalized designs in another
              fully interactive demonstration. Again this gives you an
              opportunity to tweak things and make sure we get everything right
              the first time.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={launch}
            alt="design"
            style={{ width: "100%", maxWidth: 300, maxHeight: 500 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#FBB03B", height: "80em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Build
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Here’s where we get down to business.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
            >
              {" "}
              Engineering begins after your approval on the final designs. We
              start by scaffolding out the project on a high level, prioritizing
              some areas over others.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Each area is then developed in order of importance until ready to
              be connected to the next piece.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Typically the backend, behind the scenes operations are completed
              first. Once all the services are in place we can then create the
              front end, user side of things.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              Only after our rigorous examinations will we accept a product as
              finished, then pushing it through the production pipeline. This
              produces an optimized, compressed, consumer version of the code
              and assets ready for deployment.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={build}
            alt="construction"
            style={{ width: "100%", maxWidth: matchesMD ? 500 : 700 }}
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#B3B3B3", height: "80em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Maintain
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Here’s where we get down to business.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Engineering begins after your approval on the final designs. We
              start by scaffolding out the project on a high level, prioritizing
              some areas over others.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Our work doesn’t end there.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              After a successful launch we keep in close contact to listen to
              feedback and hear how the project is being received.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              From there on out we make sure your application is kept up to date
              and taking advantage of the best features and practices available.
              When new developments arise or new techniques are discovered in
              future projects, we will implement those advancements in your
              project as part of our routine maintenance.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={maintain}
            alt="maintain"
            style={{ width: "100%", maxWidth: 100 }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.rowContainer}
        style={{ backgroundColor: "#29ABE2", height: "70em" }}
      >
        <Grid
          item
          container
          direction="column"
          lg
          align={matchesMD ? "center" : undefined}
        >
          <Grid item>
            <Typography
              variant="h4"
              gutterBottom
              style={{ color: "#000", marginTop: "5em" }}
              align={matchesMD ? "center" : undefined}
            >
              Iterate
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Here’s where we get down to business.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Engineering begins after your approval on the final designs. We
              start by scaffolding out the project on a high level, prioritizing
              some areas over others.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              Our work doesn’t end there.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              {" "}
              After a successful launch we keep in close contact to listen to
              feedback and hear how the project is being received.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ color: "#fff", maxWidth: "20em" }}
              align={matchesMD ? "center" : undefined}
            >
              From there on out we make sure your application is kept up to date
              and taking advantage of the best features and practices available.
              When new developments arise or new techniques are discovered in
              future projects, we will implement those advancements in your
              project as part of our routine maintenance.
            </Typography>
          </Grid>
        </Grid>
        <Grid item lg style={{ alignSelf: "center" }}>
          <img
            src={iterate}
            alt="maintain"
            style={{ width: "100%", maxWidth: 500 }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Revolution;
