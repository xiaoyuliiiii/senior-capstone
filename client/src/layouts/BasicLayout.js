import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import BadgeMenu from '../components/BadgeMenu';
import Welcome from '../components/Welcome';

class BasicLayout extends Component {
  state = { drawerOpen: false };

  handleSidebarClose = () => {
    this.setState({ drawerOpen: false });
  };

  handleSidebarToggle = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <Header onClickMenu={this.handleSidebarToggle} />
        <div className={classes.imageBG} />
        <div className={classes.imageWrapper} />
        <Sidebar open={this.state.drawerOpen} onRequestClose={this.handleSidebarClose} />
        <BadgeMenu />
        <Welcome />
      </div>
    );
  }
}

const styles = () => ({
  '@global': {
    html: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      boxSizing: 'border-box',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      margin: 0,
    },
  },
  root: {
    display: 'flex',
    alignItems: 'stretch',
    minHeight: '100vh',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.54)',
  },
  wrapper: {
    position: 'relative',
    height: '100vh',
  },
  imageWrapper: {
    position: 'fixed',
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0)',
    backgroundImage: 'linear-gradient(rgba(0,0,0,0.4) 0%,rgba(0,0,0,.6) 75%,rgba(0,0,0,.8) 100%)',
    opacity: '.7',
    minHeight: '100vh',
    bottom: 0,
    left: 0,
    right: 0,
  },
  imageBG: {
    background:
      'url(https://lh3.googleusercontent.com/-VRJNLuIZyCTgfmY08_dUY-tbgkVTMS95ic6w35AnsmpDNVjesQv-uMnvg1Xk85bXK133Kye4jWPd2SwTtJbg50=w1920-h1080-p-k-nd-no) left top no-repeat',
    backgroundSize: 'cover',
    minHeight: '100vh',
    width: '100vw',
    position: 'relative',
  },
});

export default withStyles(styles)(BasicLayout);
