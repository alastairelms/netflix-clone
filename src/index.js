import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';
import { seedDatabase } from './seed';

const config = {
    apiKey: 'AIzaSyDazqiTUt6tvCt5dW3T8fx-IgwcKD0Fi0w',
    authDomain: 'netflix-clone-963d3.firebaseapp.com',
    projectId: 'netflix-clone-963d3',
    storageBucket: 'netflix-clone-963d3.appspot.com',
    messagingSenderId: '240106285096',
    appID: '1:240106285096:web:375094eb746885435aad1d',
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    
    <FirebaseContext.Provider value={{ firebase }}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

