import React from 'react';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

// Algolia
import { InstantSearch, Hits } from 'react-instantsearch-dom';
import { connectSearchBox } from 'react-instantsearch-dom';

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
    },
    card: {
        display: 'flex',
        width: '100%',
        marginTop: 24
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 180,
        height: 180,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 24,
        paddingBottom: 24,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
};

const JovanottiSearchBox = ({ currentRefinement, refine }) =>
    <TextField
        id="jovanotti-songs"
        label="qualfiafi parola di una canzone..."
        type="search"
        fullWidth
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
    />;

const ConnectedJovanottiSearchBox = connectSearchBox(JovanottiSearchBox);

function JovanottiCard({ hit }) {
    return (
        <Card style={styles.card}>
            <CardMedia
                style={styles.cover}
                image="http://www.gossipitaliano.net/wp-content/uploads/2018/02/jovanotti.jpg"
                title="Live from space album cover"
            />
            <div style={styles.details}>
                <CardContent style={styles.content}>
                    <Typography variant="headline">{hit.name}</Typography>
                    <Typography variant="subheading" color="textSecondary">
                        Mac Miller
            </Typography>
                </CardContent>
                <div style={styles.controls}>
                    <IconButton aria-label="Previous">
                        <SkipPreviousIcon />
                    </IconButton>
                    <IconButton aria-label="Play/pause">
                        <PlayArrowIcon style={styles.playIcon} />
                    </IconButton>
                    <IconButton aria-label="Next">
                        <SkipNextIcon />
                    </IconButton>
                </div>
            </div>
        </Card>
    );
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

                    <div style={styles.root}>
                        <Hits hitComponent={JovanottiCard} />
                    </div>

                </InstantSearch>
            </div>
        );
    }

}

export default JovanottiSongsScreen;