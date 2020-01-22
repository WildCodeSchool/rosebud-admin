// in src/Menu.js
import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import List from "@material-ui/core/List";
import { MenuItemLink } from 'react-admin';
import { withRouter } from 'react-router-dom';
import BookIcon from '@material-ui/icons/Book';
import ImportExportIcon from '@material-ui/icons/ImportExport';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AssignmentReturnedIcon from '@material-ui/icons/AssignmentReturned';
import DashboardIcon from '@material-ui/icons/Dashboard';

const Menu = ({ onMenuClick, logout }) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    return (
        <List>
            <MenuItemLink
                exact
                to="/"
                primaryText="Dashboard"
                leftIcon={<DashboardIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            <MenuItemLink
                to="/questionnaires"
                primaryText="Questionnaires"
                leftIcon={<BookIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            <MenuItemLink
                to="/users"
                primaryText="Utilisateurs"
                leftIcon={<SupervisorAccountIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            <MenuItemLink
                to="/participants"
                primaryText="Export"
                leftIcon={<ImportExportIcon/>}
                onClick={onMenuClick}
                sidebarIsOpen={open}
            />
            {isXSmall && logout}
        </List>
    );
};

export default withRouter(Menu);