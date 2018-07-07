import React from 'react';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

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
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 500,
        height: 450,
    },
    subheader: {
        width: '100%',
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
    return (
        <GridListTile cols={1}>
            
            <Card className={styles.card}>
                <CardMedia
                    className={styles.media}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {hit.name}
        </Typography>
                    <Typography component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
        </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
        </Button>
                    <Button size="small" color="primary">
                        Learn More
        </Button>
                </CardActions>
            </Card>
            </GridListTile>
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

                    <div className={styles.root}>
                        <GridList cellHeight={160} className={styles.gridList} cols={3}>
                            <Hits hitComponent={JovanottiCard} />
                        </GridList>
                    </div>

                </InstantSearch>
            </div>
        );
    }

}

export default JovanottiSongsScreen;