import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import EmailIcon from '@material-ui/icons/Email';

/*
const styles = {
    heart: {
        height: 20,
        width: 20,
        color: '#D84315',
        marginBottom: -4
    }
}
*/

class InformazioniScreen extends Component {

    render() {
        return (
            <div>
                <Typography>
                    ...altre funzionalità in arrivo!
            </Typography>
                <br />
                <Typography>
                    un altro progetto strampalato (ed Open Source, <a rel="noopener noreferrer" target="_blank" href="https://github.com/manzinello/tiportoviacon.me">eccolo su GitHub</a>) di <a href="https://matteomanzinello.com">Matteo Manzinello</a>
                </Typography>
                <br />
                <Button href="mailto:ciao@matteomanzinello.com" variant="fab" color="secondary" aria-label="email">
                    <EmailIcon />
                </Button>
            </div>
        );
    }

}

export default InformazioniScreen;