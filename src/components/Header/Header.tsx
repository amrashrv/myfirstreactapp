import { Button, Col, Layout, Menu, Row } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react';
import { Link} from 'react-router-dom';
import {
    UserOutlined
} from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentLogin, selectIsAuth } from '../../redux/authSelectors';
import { logout } from '../../redux/authReducer';

export type MapPropsType = {
}

export const AppHeader: React.FC<MapPropsType> = (props) => {
    const {Header} = Layout;
    const isAuth = useSelector(selectIsAuth)
    const login = useSelector(selectCurrentLogin)


    const dispatch = useDispatch();

    const logoutCallback = () => {
        dispatch(logout())
    }
    return (
        <Header className="header">
            <Row>
                <Col span={18}>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1"><Link to="/users">Developers</Link></Menu.Item>
                    </Menu>
                </Col>
                
                    {isAuth
                        ? <><Col span={1}><Avatar alt={login || ""} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /></Col>
                         <Col span={5}>
                         <Button onClick={logoutCallback}>Logout</Button></Col>
                         </>
                        : <Col span={6}><Button><Link to={'/login'}>Login</Link></Button></Col>}
                
            </Row>
        </Header>
            );
}
