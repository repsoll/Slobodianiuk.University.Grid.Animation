import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Tooltip,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Constants from '../../constants/constants';

export default function CustomAppBar() {
  const handleGithubClick = () => {
    window.open(Constants.GithibLink, '_blank');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Tooltip title="Visit project's Github page" arrow>
            <IconButton
              size='small'
              onClick={handleGithubClick}
              color='inherit'
              sx={{ mr: 2 }}
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Typography variant='subtitle1' component='div' sx={{ flexGrow: 1 }}>
            Slobodianiuk.University.Grid.Animation
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
