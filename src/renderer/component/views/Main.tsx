import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import Typography from '@mui/material/Typography';
import Navbar from '../common/Navbar';

const Main = () => {
  const handleFolderOpen = (): void => {
    window.electron
      .openDirectoryDialog()
      .then(console.log)
      .catch(() => {});
  };

  return (
    <div>
      <Navbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Turrium
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleFolderOpen}
        >
          <FolderOpenIcon />
        </IconButton>
      </Navbar>
    </div>
  );
};

export default Main;
