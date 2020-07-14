import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

export const styles = (themes) => ({
  root: {
    height: 64,
    [themes.breakpoints.up('sm')]: {
      height: 70,
    },
  },
});

export default withStyles(styles)(Toolbar);
