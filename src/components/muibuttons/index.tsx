import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import './index.css';

type oProps = {
};
type oState = {
};

export class MuiButtons extends React.Component<oProps, oState> {
  // Material UI v5.10.8 Buttons

  constructor(props: oProps) {
    super(props);
    this.state = { };
    this.clickHandler = this.clickHandler.bind(this);
    this.callbackHandler = this.callbackHandler.bind(this);
  }

  componentDidMount() {
  }

  clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    // const button: HTMLButtonElement = event.currentTarget;
    // console.info('App.click', button.name);
  }

  callbackHandler(data: object): void {
    // console.info('callback', JSON.stringify(data));
  }

  render() {

    return (
      <React.Fragment>
        <p>This is the <strong>MuiButtons</strong> Component</p>
        <a href="https://mui.com/material-ui/getting-started/supported-components/" target="new">More Info...</a>
        <br />

        <Box
          sx={{
            border: '1px solid lightgrey',
            borderRadius: '4px',
            margin: '4px',
            padding: '16px',
          }}
        >
          <h3>Basic Buttons</h3>
          <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
          </Stack>
        </Box>
        <Box
          sx={{
            border: '1px solid lightgrey',
            borderRadius: '4px',
            margin: '4px',
            padding: '16px',
          }}
        >
          <h3>Text Buttons</h3>
          <Stack spacing={2} direction="row">
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>
          </Stack>
        </Box>
        <Box
          sx={{
            border: '1px solid lightgrey',
            borderRadius: '4px',
            margin: '4px',
            padding: '16px',
          }}
        >
          <h3>Contained Buttons</h3>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons">
              Link
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            border: '1px solid lightgrey',
            borderRadius: '4px',
            margin: '4px',
            padding: '16px',
          }}
        >
          <h3>Outlined Buttons</h3>
          <Stack spacing={2} direction="row">
            <Button variant="outlined">Primary</Button>
            <Button variant="outlined" disabled>
              Disabled
            </Button>
            <Button variant="outlined" href="#outlined-buttons">
              Link
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            border: '1px solid lightgrey',
            borderRadius: '4px',
            margin: '4px',
            padding: '16px',
          }}
        >
          <h3>Color Buttons</h3>
          <Stack spacing={2} direction="row">
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
              Success
            </Button>
            <Button variant="outlined" color="error">
              Error
            </Button>
          </Stack>
        </Box>
        <Box
          sx={{
            border: '1px solid lightgrey',
            borderRadius: '4px',
            margin: '4px',
            padding: '16px',
          }}
        >
          <h3>Sized Buttons</h3>
          <Stack spacing={2} direction="row">
            <Button size="small">Small</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </Stack>
          <Stack spacing={2} direction="row">
            <Button variant="outlined" size="small">
              Small
            </Button>
            <Button variant="outlined" size="medium">
              Medium
            </Button>
            <Button variant="outlined" size="large">
              Large
            </Button>
          </Stack>
          <Stack spacing={2} direction="row">
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="medium">
              Medium
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
          </Stack>
        </Box>
      </React.Fragment>
    );
  }
}
