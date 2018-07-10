import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import VideocamIcon from '@material-ui/icons/Videocam';
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

class JovanottiSong extends React.Component {

    state = {
        song: this.props.song.hit
    }

    render() {
        return (
            <Card style={styles.card}>
                <div className="jovanotti-card-media">
                    <CardMedia
                        style={styles.cover}
                        image="http://www.gossipitaliano.net/wp-content/uploads/2018/02/jovanotti.jpg"
                        title="Live from space album cover"
                    />
                </div>
                <div style={styles.details}>
                    <CardContent style={styles.content}>
                        <Typography variant="headline">{this.state.song.name}</Typography>
                        <Typography variant="subheading" color="textSecondary">
                            Lorenzo Jovanotti
            </Typography>
                    </CardContent>
                    <div style={styles.controls}>
                        <IconButton aria-label="Text">
                            <SubjectIcon />
                        </IconButton>
                        <IconButton aria-label="Spotify">
                            <MusicNoteIcon style={styles.playIcon} />
                        </IconButton>
                        <IconButton aria-label="Video">
                            <VideocamIcon />
                        </IconButton>
                    </div>
                </div>
            </Card>
        );
    }

}

export default JovanottiSong;