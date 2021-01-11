import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { youtubeLibraryLoaded } from './store/actions/api';
import Home from './containers/Home/Home';
import Watch from './containers/Watch/Watch';
import AppLayout from './components/AppLayout/AppLayout';
import { environment } from './enviroment';
import './styles/main.scss';

class App extends Component {

    componentDidMount() {
        this.loadYoutubeApi();
    }

    loadYoutubeApi() {
        const scriptElement = document.createElement('script');
        scriptElement.src = "https://apis.google.com/js/client.js";

        scriptElement.onload = () => {
            window.gapi.load('client', () => {
                window.gapi.client.setApiKey(environment.youtubeApiKey);
                window.gapi.client.load('youtube', 'v3', () => {
                    this.props.youtubeLibraryLoaded();
                });
            });
        }

        document.body.appendChild(scriptElement);
    }

    render() {
        return (
            <AppLayout>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/watch' component={Watch} />
                </Switch>
            </AppLayout>
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ youtubeLibraryLoaded }, dispatch);

export default connect(null, mapDispatchToProps)(App);
