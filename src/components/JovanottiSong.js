import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SubjectIcon from '@material-ui/icons/Subject';

const styles = {
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
        height: 44,
        width: 44,
    },
};

class JovanottiSong extends Component {

    state = {
        coverBaseUrl: "https://manzinello.github.io/tiportoviacon.me/images/album/",
        song: this.props.song.hit
    }

    render() {
        return (
            <Card style={styles.card}>
                <div className="jovanotti-card-media">
                    <CardMedia
                        style={styles.cover}
                        image={this.state.coverBaseUrl + this.state.song.image}
                        title="Live from space album cover"
                    />
                </div>
                <div style={styles.details}>
                    <CardContent style={styles.content}>
                        <Typography variant="headline">{this.state.song.title}</Typography>
                        <Typography variant="subheading" color="textSecondary">
                            {this.state.song["album-name"]}
                        </Typography>
                    </CardContent>
                    <div style={styles.controls}>
                        <IconButton aria-label="Text">
                            <SubjectIcon />
                        </IconButton>
                        <IconButton href={this.state.song.spotify} aria-label="Spotify">
                            <MusicNoteIcon style={styles.playIcon} />
                        </IconButton>
                        <IconButton href={this.state.song.youtube} aria-label="Video">
                            <OndemandVideoIcon />
                        </IconButton>
                    </div>
                </div>
            </Card>
        );
    }

}

export default JovanottiSong;