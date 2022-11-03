import React from 'react';
import {Outlet, useModel} from '@umijs/max'
export interface UserProps {

}
const User: React.FC<UserProps> = (props) => {
    const { name } = useModel('global');
    console.log('name', name)
    return (
        <div>
            user
            <Outlet />
        </div>
    )
};

export default User;
