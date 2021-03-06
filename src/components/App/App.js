import React from 'react'
import Authentication from '../../util/Authentication/Authentication'
import NavBar from '../NavBar';
import Inventory from '../Inventory';
import Profile from '../Profile';
import './App.css'
import { Container, Col, Row, CardGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.Authentication = new Authentication()

    //if the extension is running on twitch or dev rig, set the shorthand here. otherwise, set to null.
    this.twitch = window.Twitch ? window.Twitch.ext : null
    this.state = {
      finishedLoading: false,
      theme: 'light',
      isVisible: true,
      activeTab: 'inventory'
    }
    this.selectTab = this.selectTab.bind(this)
  }

  renderBody() {
    switch (this.state.activeTab) {
      case 'inventory':
        return <Inventory />
      default:
        return <Profile authentication={this.Authentication} />
    }
  }

  selectTab(tab) {
    this.setState({ activeTab: tab })
  }

  contextUpdate(context, delta) {
    if (delta.includes('theme')) {
      this.setState(() => {
        return { theme: context.theme }
      })
    }
  }

  visibilityChanged(isVisible) {
    this.setState(() => {
      return {
        isVisible
      }
    })
  }

  componentDidMount() {
    this.Authentication.setToken('asd', 'myLongId')

    this.setState(() => {
      return { finishedLoading: true }
    })
    if (this.twitch) {
      this.twitch.onAuthorized((auth) => {
        this.Authentication.setToken(auth.token, auth.userId)
        if (!this.state.finishedLoading) {
          // if the component hasn't finished loading (as in we've not set up after getting a token), let's set it up now.

          // now we've done the setup for the component, let's set the state to true to force a rerender with the correct data.
          this.setState(() => {
            return { finishedLoading: true }
          })
        }
      })

      this.twitch.listen('broadcast', (target, contentType, body) => {
        this.twitch.rig.log(`New PubSub message!\n${target}\n${contentType}\n${body}`)
        // now that you've got a listener, do something with the result...

        // do something...

      })

      this.twitch.onVisibilityChanged((isVisible, _c) => {
        this.visibilityChanged(isVisible)
      })

      this.twitch.onContext((context, delta) => {
        this.contextUpdate(context, delta)
      })
    }
  }

  componentWillUnmount() {
    if (this.twitch) {
      this.twitch.unlisten('broadcast', () => console.log('successfully unlistened'))
    }
  }

  render() {
    if (this.state.finishedLoading && this.state.isVisible) {
      return (
        <Container fluid>
          <NavBar onSelect={this.selectTab} />

          <Row>
            <Col md="auto">
              {this.renderBody()}
            </Col>
          </Row>
        </Container>
      )
    } else {
      return (
        <Container fluid>
          <NavBar onSelect={this.selectTab} />
          <Row>
            {this.renderBody()}
          </Row>
        </Container>
      )
    }

  }
}
