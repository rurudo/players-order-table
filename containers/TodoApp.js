import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';
import {Tabs, Tab} from 'material-ui/Tabs';
import Order from '../components/Order';

const muiTheme = getMuiTheme({
  palette: {
    //accent1Color: deepOrange500,
  },
});

class TodoApp extends Component {
  render() {
    const { todos, actions } = this.props;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
    	  <Tabs>
    	    <Tab label="オーダー">
    	      <Order names={todos} />
    	    </Tab>
    	    <Tab label="メモ">
            <Header addTodo={actions.addTodo} />
            <MainSection todos={todos} actions={actions} />
    	    </Tab>
    	  </Tabs>

      </div>
      </MuiThemeProvider>
    );
  }
}

function mapState(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch),
  };
}

export default connect(mapState, mapDispatch)(TodoApp);
