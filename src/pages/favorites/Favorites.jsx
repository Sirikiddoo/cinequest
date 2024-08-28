import React from 'react';
import UserList from '../../components/userList/UserList.jsx';

function Favorites() {
    return (
        <UserList
            title="Favorites"
            localStorageKey="favorites"
            buttonClassName="remove-button-favorites"
        />
    );
}

export default Favorites;
