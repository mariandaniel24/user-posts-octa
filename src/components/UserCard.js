import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "auto",
    marginTop: "30px",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const getInitials = (fullName) => {
  const names = fullName.split(" ");
  let initials = "";
  names.forEach((name) => (initials += name[0]));
  return initials;
};

const UserCard = ({ userData, userPosts }) => {
  const classes = useStyles();
  let history = useHistory();

  const handleRedirectPosts = () => {
    history.push(`/user/${userData.id}/posts`);
  };

  const posts = userPosts.filter((post) => post.userId === userData.id);
  const postCount = posts.length;

  const list = [
    {
      label: "Id",
      value: userData.id,
    },
    {
      label: "Name",
      value: userData.name,
    },
    {
      label: "Email",
      value: userData.email,
    },
    {
      label: "Username",
      value: userData.username,
    },
    {
      label: "Street",
      value: userData.address.street,
    },
    {
      label: "Suite",
      value: userData.address.suite,
    },
    {
      label: "City",
      value: userData.address.city,
    },
    {
      label: "Zipcode",
      value: userData.address.zipcode,
    },
    {
      label: "Latitude",
      value: userData.address.geo.lat,
    },
    {
      label: "Longitude",
      value: userData.address.geo.lng,
    },
    {
      label: "Posts",
      value: postCount,
    },
  ];

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {getInitials(userData.name)}
          </Avatar>
        }
        title={userData.name}
        subheader={userData.email}
      />
      <CardContent>
        {list.map((element, i) => (
          <Typography key={i} variant="body2" color="textPrimary" component="p">
            {element.label} : {element.value}
          </Typography>
        ))}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={handleRedirectPosts}>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default UserCard;
