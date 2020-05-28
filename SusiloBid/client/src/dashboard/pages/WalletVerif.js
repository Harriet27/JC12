import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllUsers } from '../../redux/action';

const WalletVerif = () => {

    const dispatch = useDispatch();

    const fetchUser = useSelector(({ user }) => user.data);

    useEffect(() => {
        dispatch(GetAllUsers());
    });

    const renderTable = () => {
        return fetchUser.map((val, index) => {
            console.log(val)
            return (
                <tr key={index}>
                    <td>{val.user_id}</td>
                    <td>{val.username}</td>
                    <td>{val.email}</td>
                    <td>{val.address}</td>
                    <td>{val.phone}</td>
                    <td>{val.wallet}</td>
                </tr>
            );
        });
    };

    return (
        <div>
            <table class="ui single line table" style={styles.tableStyle}>
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable()}
                </tbody>
            </table>
        </div>
    );
};

const styles = {
    tableStyle: {
        marginTop: '25px',
        marginLeft: '25px',
    },
};

export default WalletVerif;