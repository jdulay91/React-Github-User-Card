import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginBottom: 10,
  },
  gridList: {
    width: 1000,
    height: 1000,
  },

}));


export default function TitlebarGridList(props) {
  const classes = useStyles();
  const {followers} = props;
  
  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <h1>Followers</h1>
        </GridListTile>
        {followers.map((follower) => (
          <GridListTile key={follower.id}>
            <img src={follower.avatar_url} alt={follower.url} />
            <GridListTileBar
              title={`I am ${follower.login}`}              
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}