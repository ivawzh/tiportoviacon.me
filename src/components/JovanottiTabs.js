import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

// Screens
import JovanottiSongsScreen from '../screens/JovanottiSongsScreen';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        flex: 1,
        backgroundColor: theme.palette.background.paper,
        height:'100%'
    },
    screen: {
        flexGrow: 1,
        flex: 1,
        background: 'white',
        padding: 24,
        height:'100%'
    }
});

class JovanottiTabs extends React.Component {

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
                        <Tab label="James Joyce" href="#joyce" />
                        <Tab label="Oriana Fallaci" href="#fallaci" />
                        <Tab label="Filippo Tommaso Marinetti" href="#marinetti" />
                    </Tabs>
                </AppBar>
                <div className={classes.screen}>
                    {value === 0 && <JovanottiSongsScreen />}
                    {value === 1 && <TabContainer>Item Two</TabContainer>}
                    {value === 2 && <TabContainer>Item Three</TabContainer>}
                </div>
            </div>
        );
    }

}

JovanottiTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JovanottiTabs);