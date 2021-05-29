import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Spinner from "../ui/Spinner";

const useStyles = makeStyles({
  root: {
    maxWidth: 450,
  },
  media: {
    height: 380,
  },
});

const UnitItemCard = ({ unit }) => {
  console.log(unit.image);
  const classes = useStyles();

  return (
    <Link to={`/unit-${unit.serial}`}>
      <Card className={classes.root}>
        <CardActionArea>
          {unit.image ? (
            <CardMedia
              className={classes.media}
              image={unit.image}
              title={unit.company}
            />
          ) : (
            <Spinner />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {unit.serial}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {unit.company}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};
export default UnitItemCard;
