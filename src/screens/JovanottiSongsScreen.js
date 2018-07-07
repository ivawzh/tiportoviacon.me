import React from 'react';

import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});

class JovanottiSongsScreen extends React.Component {

    render() {
        return (
            <div>
                <form className={styles.container} noValidate autoComplete="off">
                    <TextField
                        id="jovanotti-songs"
                        label="Search field"
                        type="search"
                        fullWidth
                        style={styles.textField}
                    />
                </form>
            </div>
        );
    }

}

export default JovanottiSongsScreen;