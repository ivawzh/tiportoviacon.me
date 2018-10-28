import React, { Component } from "react";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";

// Algolia
import {
  InstantSearch,
  InfiniteHits,
  connectSearchBox,
  PoweredBy
} from "react-instantsearch-dom";

import JovanottiSong from "../components/JovanottiSong";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    width: "100%"
  }
};

const JovanottiSearchBox = ({ currentRefinement, refine }) => (
  <TextField
    id="jovanotti-songs"
    label="...in questa notte fantastica!"
    type="search"
    fullWidth
    value={currentRefinement}
    margin="normal"
    variant="outlined"
    onChange={e => refine(e.target.value)}
  />
);

const JovanottiInfiniteHits = ({ hits, hasMore, refine }) => (
  <div>
    {hits.forEach(song => (
      <JovanottiSong song={song} />
    ))}
  </div>
);

const ConnectedJovanottiSearchBox = connectSearchBox(JovanottiSearchBox);

class JovanottiSongsScreen extends Component {
  render() {
    return (
      <div>
        <InstantSearch
          appId="32XDPON7V4"
          apiKey="f5fe4c3a7838a8e27fba1965eb71fe76"
          indexName="songs"
        >
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
