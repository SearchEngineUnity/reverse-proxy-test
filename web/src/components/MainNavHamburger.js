import React from 'react';
import { navigate } from 'gatsby';
import Box from '@material-ui/core/Box';
import { Menu, Close, ExpandLess, ExpandMore } from '@material-ui/icons';
import { Link, IconButton } from 'gatsby-theme-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import {
  Icon,
  Dialog,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  Divider,
  AppBar,
  Toolbar,
  Slide,
  Collapse,
} from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: theme.palette.common.white,
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  list: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.common.white,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  icon: {
    color: theme.palette.common.white,
  },
}));

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function MainNavHamburger({ menu, brand }) {
  const { menuGroup } = menu;
  const { nav, brandGroup } = brand;
  const url = nav.slug.current;
  const mobileBrand = brandGroup.filter((x) => x.type === 'mobile')[0];
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [collapse, setCollaspe] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickCollapse = () => {
    setCollaspe(!collapse);
  };

  const handleClickSubNavMenu = (menuLink) => {
    navigate(`/${menuLink}`);
    handleClose();
  };

  return (
    <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
      <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleClickOpen}>
        <Menu />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        PaperProps={{ className: classes.list }}
      >
        <AppBar className={classes.appBar}>
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}>
              <Link to={`/${url}`}>
                <img
                  src={mobileBrand.brand.logo.asset.url}
                  alt={mobileBrand.brand.title}
                  height={48}
                  wdith="auto"
                />
              </Link>
            </Box>
            <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
        <List className={classes.list}>
          {menuGroup.map((group, index) => {
            const { _type, title, nav: groupNav, _key } = group;
            switch (_type) {
              case 'navItem':
                return (
                  <React.Fragment key={_key}>
                    {index === 0 ? null : <Divider />}
                    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <ListItem button onClick={() => handleClickSubNavMenu(groupNav.slug.current)}>
                        <ListItemText primary={title} />
                      </ListItem>
                    </Box>
                  </React.Fragment>
                );
              case 'navGroup':
                return (
                  <React.Fragment key={_key}>
                    {index === 0 ? null : <Divider />}
                    <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <ListItem button onClick={() => handleClickSubNavMenu(groupNav.slug.current)}>
                        <ListItemText primary={title} />
                      </ListItem>
                      <IconButton onClick={handleClickCollapse} color="inherit">
                        {collapse ? <ExpandMore /> : <ExpandLess />}
                      </IconButton>
                    </Box>
                    <Collapse in={!collapse} timeout="auto" unmountOnExit>
                      {group.group.map(
                        ({ icon, title: itemTitle, nav: itemNav, _key: itemKey }) => (
                          <List component="div" disablePadding key={itemKey}>
                            <ListItem
                              button
                              className={classes.nested}
                              onClick={() => handleClickSubNavMenu(itemNav.slug.current)}
                            >
                              <ListItemIcon className={classes.icon}>
                                <Icon>{icon}</Icon>
                              </ListItemIcon>
                              <ListItemText primary={itemTitle} />
                            </ListItem>
                          </List>
                        ),
                      )}
                    </Collapse>
                  </React.Fragment>
                );

              default:
                return <div key={_key}>under construction</div>;
            }
          })}
        </List>
      </Dialog>
    </Box>
  );
}

export default MainNavHamburger;
