import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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
        label="...in questa notte fantastica! Ti porto via con me! Ribalteremo il mooooooooondo!"
        type="search"
        fullWidth
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
    />;

const JovanottiInfiniteHits = ({ hits, hasMore, refine }) =>
    <div>
        {hits.forEach(song => <JovanottiSong song={song} />)}
    </div>
    ;

const ConnectedJovanottiSearchBox = connectSearchBox(JovanottiSearchBox);

class JovanottiSongsScreen extends Component {

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

                    <div className="powered-by">
                        <Typography>
                            <PoweredBy />
                        </Typography>
                    </div>

                </InstantSearch>
            </div>
        );
    }

}

export default JovanottiSongsScreen;