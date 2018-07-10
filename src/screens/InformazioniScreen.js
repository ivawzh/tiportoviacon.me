import React from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import FavoriteIcon from '@material-ui/icons/Favorite';
import EmailIcon from '@material-ui/icons/Email';

const styles = {
    heart: {
        height: 20,
        width: 20,
        color: '#D84315',
        marginBottom: -4
    }
}

class InformazioniScreen extends React.Component {

    render() {
        return (
            <div>
                <Typography>
                    ...altre funzionalità in arrivo!
            </Typography>
                <br />
                <Typography>
                    creato con <FavoriteIcon style={styles.heart} /> da Matteo Manzinello
            </Typography>
                <br />
                <Button variant="fab" color="secondary" aria-label="email">
                    <EmailIcon />
                </Button>
            </div>
        );
    }

}

export default InformazioniScreen;