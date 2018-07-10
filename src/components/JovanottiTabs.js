import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import InfoIcon from '@material-ui/icons/Info';

// Screens
import JovanottiSongsScreen from '../screens/JovanottiSongsScreen';
import InformazioniScreen from '../screens/InformazioniScreen';

const styles = theme => ({
    root: {
        flexGrow: 1,
        flex: 1,
        backgroundColor: theme.palette.background.paper,
        height: '100%'
    },
    screen: {
        flexGrow: 1,
        flex: 1,
        background: 'white',
        padding: 24,
        height: '100%'
    }
});

class JovanottiTabs extends Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Le canzoni" icon={<QueueMusicIcon />} href="#lecanzoni" />
                        <Tab label="Informazioni" icon={<InfoIcon />} href="#informazioni" />
                    </Tabs>
                </AppBar>
                <div className={classes.screen}>
                    {value === 0 && <JovanottiSongsScreen />}
                    {value === 1 && <InformazioniScreen />}
                </div>
            </div>
        );
    }

}

JovanottiTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JovanottiTabs);