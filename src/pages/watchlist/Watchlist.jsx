import React from 'react';
import UserList from '../../components/userList/UserList.jsx';

function Watchlist() {
    return (
        <UserList
            title="Watchlist"
            localStorageKey="watchlist"
            buttonClassName="remove-button-watchlist"
        />
    );
}

export default Watchlist;
