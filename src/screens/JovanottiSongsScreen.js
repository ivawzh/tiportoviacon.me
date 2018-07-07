import React from 'react';

import TextField from '@material-ui/core/TextField';

// Algolia
import { InstantSearch, Hits } from 'react-instantsearch-dom';
import { connectSearchBox } from 'react-instantsearch-dom';

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

const JovanottiSearchBox = ({ currentRefinement, refine }) =>
    <TextField
        id="jovanotti-songs"
        label="qualfiafi parola di una canzone..."
        type="search"
        fullWidth
        style={styles.textField}
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
    />;

const ConnectedJovanottiSearchBox = connectSearchBox(JovanottiSearchBox);

function JovanottiCard({ hit }) {
    return <div>{hit.name} ciao</div>;
}

class JovanottiSongsScreen extends React.Component {

    render() {
        return (
            <div>
                <InstantSearch
                    appId="latency"
                    apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
                    indexName="bestbuy">

                    <ConnectedJovanottiSearchBox />

                    <Hits hitComponent={JovanottiCard} />

                </InstantSearch>
            </div>
        );
    }

}

export default JovanottiSongsScreen;