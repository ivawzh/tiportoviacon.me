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
                <InstantSearch
                    appId="latency"
                    apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
                    indexName="bestbuy">
                    <form className={styles.container} noValidate autoComplete="off">
                        <TextField
                            id="jovanotti-songs"
                            label="qualfiafi parola di una canzone..."
                            type="search"
                            fullWidth
                            style={styles.textField}
                        />
                    </form>
                </InstantSearch>
            </div>
        );
    }

}

export default JovanottiSongsScreen;