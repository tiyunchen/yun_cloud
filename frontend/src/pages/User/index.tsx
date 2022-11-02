import React from 'react';
import {Outlet} from '@umijs/max'
export interface UserProps {

}
const User: React.FC<UserProps> = (props) => {
    console.log('props', props)
    return (
        <div>
            user
            <Outlet />
        </div>
    )
};

export default User;
