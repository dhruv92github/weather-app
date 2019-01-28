import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,combineReducer} from 'redux';
import {Provider} from 'react-redux';


var rootReducer=combineReducer({});
var store=createStore(rootReducer);

ReactDOM.render(

	<Provider store={store}>

	</Provider>, document.getElementById('app')
	)