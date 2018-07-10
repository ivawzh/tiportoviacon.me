import React from 'react';

import TextField from '@material-ui/core/TextField';

// Algolia
import { InstantSearch, InfiniteHits, connectSearchBox, PoweredBy } from 'react-instantsearch-dom';

import JovanottiSong from '../components/JovanottiSong';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        width: '100%'
    },
};

const JovanottiSearchBox = ({ currentRefinement, refine }) =>
    <TextField
        id="jovanotti-songs"
        label="...in questa notte fantastica!"
        type="search"
        fullWidth
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
    />;

const ConnectedJovanottiSearchBox = connectSearchBox(JovanottiSearchBox);

class JovanottiSongsScreen extends React.Component {

    render() {
        return (
            <div>
                <InstantSearch
                    appId="latency"
                    apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
                    indexName="bestbuy">

                    <ConnectedJovanottiSearchBox />

                    <div style={styles.root}>
                        <InfiniteHits hitComponent={h => <JovanottiSong song={h} />} />
                    </div>

                    <PoweredBy />

                </InstantSearch>
            </div>
        );
    }

}

export default JovanottiSongsScreen;