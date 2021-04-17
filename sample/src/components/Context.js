import React from 'react';

const Context = React.createContext();

//const Context = React.createContext('Yogesh Thiru');

const UserProvider = Context.Provider;
const UserConsumer = Context.Consumer;

export { UserProvider, UserConsumer }

