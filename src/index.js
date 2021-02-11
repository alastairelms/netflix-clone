import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: 'AIzaSyDazqiTUt6tvCt5dW3T8fx-IgwcKD0Fi0w',
    authDomain: 'netflix-clone-963d3.firebaseapp.com',
    databaseURL: 'https://netflix-clone-963d3.firebaseio.com',
    projectId: 'netflix-clone-963d3',
    storageBucket: 'netflix-clone-963d3.appspot.com',
    messagingSenderId: '240106285096',
    appID: '1:240106285096:web:375094eb746885435aad1d',
};

// import { seedDatabase } from './seed';

ReactDOM.render(
    
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

