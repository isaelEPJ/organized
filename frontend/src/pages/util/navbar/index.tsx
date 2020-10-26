import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useStyles } from './style';
import logo from '../../../assets/images/logo_organized_200x200.png';

import {
    EnterInTasksButton,
    ConfigText,
    MyAccountText,
    ProfileText,
    SignOutText,
} from '../../../assets/strings';
import { Link } from 'react-router-dom';

export default function AppBarTask() {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {auth && (
                <div className={classes.rootUI}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Link to="/Dashboard">
                                <img src={logo} alt="logo" />
                            </Link>
                            <Link className={classes.link} to="/tasks">
                                {EnterInTasksButton}
                            </Link>

                            <div className={classes.IconButtons}>
                                <IconButton
                                    aria-label="show 0 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={0} color="secondary">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>
                                        {MyAccountText}
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        {ProfileText}
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        {ConfigText}
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        {SignOutText}
                                    </MenuItem>
                                </Menu>
                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            )}
        </>
    );
}
