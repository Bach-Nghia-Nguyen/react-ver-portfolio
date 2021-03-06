import React from "react";
import { makeStyles } from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Facebook from "@material-ui/icons/Facebook";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <BottomNavigation width="auto" style={{ background: "#222" }}>
      <BottomNavigationAction
        style={{ padding: 0 }}
        icon={<Facebook />}
        className={classes.root}
      />

      <BottomNavigationAction
        style={{ padding: 0 }}
        icon={<GitHub />}
        className={classes.root}
      />

      <BottomNavigationAction
        style={{ padding: 0 }}
        icon={<LinkedIn />}
        className={classes.root}
      />
    </BottomNavigation>
  );
};

export default Footer;
