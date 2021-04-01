import React, { useState } from "react";
import { useStyles } from "./style";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { matchUpFormatCode } from "tods-matchup-format-code";
import MatchUpFormatForm from "./matchUpFormat/MatchUpFormatForm";

const Configurator = () => {
  const classes = useStyles();
  const [matchUpFormatParsed, setMatchUpFormatParsed] = useState(
    matchUpFormatCode.parse("SET3-S:6")
  );

  const handleOnChange = (value) => setMatchUpFormatParsed(value);

  return (
    <>
      <Paper className={classes.paper} elevation={2}>
        <Typography variant="h5" component="h3" style={{ marginBottom: "1em" }}>
          {"TODS MatchUp Format Code Generator"}
          <a href="https://itftennis.atlassian.net/wiki/spaces/TODS/pages/1272840309/MatchUp+Format+Code"></a>
        </Typography>
        <Typography variant="h5" component="h3" style={{ color: "blue" }}>
          {matchUpFormatCode.stringify(matchUpFormatParsed)}
        </Typography>
        <MatchUpFormatForm
          matchUpFormatParsed={matchUpFormatParsed}
          onChange={handleOnChange}
        />
      </Paper>
    </>
  );
};

export default Configurator;
