import React from 'react';
import { MuiButtons } from './muibuttons';
import { RbsNavbar } from './rbsnavbar';
import { PRDataTable } from './prdatatable';
import './approot.css';

type oProps = {
  muibuttons: string;
  rbsnavbar: string;
  prdatatable: string;
};
type oState = {
  showMuiButtons: boolean;
  showRbsNavbar: boolean;
  showPRDataTable: boolean;
};

export class AppRoot extends React.Component<oProps, oState> {
  constructor(props: oProps) {
    super(props);
    this.state = {
      showMuiButtons: false,
      showRbsNavbar: false,
      showPRDataTable: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.callbackHandler = this.callbackHandler.bind(this);
  }

  componentDidMount() {
    const { muibuttons, rbsnavbar, prdatatable } = this.props;
    let { showMuiButtons, showRbsNavbar, showPRDataTable } = this.state;
    showMuiButtons = false;
    if (muibuttons === 'visible') {
      showMuiButtons = true;
    }
    showRbsNavbar = false;
    if (rbsnavbar === 'visible') {
      showRbsNavbar = true;
    }
    showPRDataTable = false;
    if (prdatatable === 'visible') {
      showPRDataTable = true;
    }
    this.setState({ showMuiButtons, showRbsNavbar, showPRDataTable });
  }

  componentDidUpdate() {
    /*
    const { muibuttons, rbsnavbar } = this.props;
    console.log('componentDidUpdate', this.props);
    let { showMuiButtons, showRbsNavbar } = this.state;
    showMuiButtons = false;
    if (muibuttons === 'visible') {
      showMuiButtons = true;
    }
    showRbsNavbar = false;
    if (rbsnavbar === 'visible') {
      showRbsNavbar = true;
    }
    this.setState({ showMuiButtons, showRbsNavbar });
    */
  }

  clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const id = event?.currentTarget?.id;

    console.info('clickHandler', id, this.state);

    let { showMuiButtons, showRbsNavbar, showPRDataTable } = this.state;
    switch (id) {
      case 'MuiButtons':
        // toggle display of buttons
        if (showMuiButtons) {
          showMuiButtons = false;
        } else {
          showMuiButtons = true;
        }
        break;
      case 'RbsNavbar':
        // toggle display of navbar
        if (showRbsNavbar) {
          showRbsNavbar = false;
        } else {
          showRbsNavbar = true;
        }
        break;
      case 'PRDataTable':
        // toggle display of navbar
        if (showPRDataTable) {
          showPRDataTable = false;
        } else {
          showPRDataTable = true;
        }
        break;
      default:
        break;
    }
    this.setState({ showMuiButtons, showRbsNavbar, showPRDataTable });
  }

  callbackHandler(data: object): void {
    console.info('callback', JSON.stringify(data));
  }

  renderMuiButtons() {
    const { showMuiButtons } = this.state;
    if (showMuiButtons) {
      return <MuiButtons />;
    } else {
      return;
    }
  }

  renderRbsNavbar() {
    const { showRbsNavbar } = this.state;
    if (showRbsNavbar) {
      return <RbsNavbar />;
    } else {
      return;
    }
  }

  renderPRDataTable() {
    const { showPRDataTable } = this.state;
    if (showPRDataTable) {
      return <PRDataTable />;
    } else {
      return;
    }
  }

  render() {
    const { showMuiButtons, showRbsNavbar } = this.state;
    return (
      <React.Fragment>
        <h3>Welcome to <strong>react-first-app</strong> by team-bounce</h3>
        <p>This is the AppRoot Component</p>
        <button id="MuiButtons" onClick={this.clickHandler}>
          Material-UI Buttons
        </button>
        <button id="RbsNavbar" onClick={this.clickHandler}>
          React-Bootstrap Navbar
        </button>
        <button id="PRDataTable" onClick={this.clickHandler}>
          PrimeReact DataTable
        </button>
        <hr />
        {this.renderMuiButtons()}
        {this.renderRbsNavbar()}
        {this.renderPRDataTable()}
      </React.Fragment>
    );
  }
}
