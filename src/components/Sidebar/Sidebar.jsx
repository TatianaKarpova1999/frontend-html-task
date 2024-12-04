import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';
import {SidebarWrapper, LogoContainer, SidebarToggle, SidebarItemContainer, SidebarItem, TextLogo} from './index'

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = (props) => {
    const { color } = props;
    const [isOpened, setIsOpened] = useState(false);
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    return (
        <SidebarWrapper color={color} className={ containerClassnames }>
            <LogoContainer>
                <img src={ logo } width="60" height="60" alt="TensorFlow logo"/>
                <TextLogo color={ color }>TensorFlow</TextLogo>
                <SidebarToggle color={ color } onClick={ toggleSidebar } type='button' className={ isOpened ? 'opened' : 'closed'}>
                    <FontAwesomeIcon icon={ isOpened ? 'angle-left' : 'angle-right'} color={ color }/>
                </SidebarToggle>
            </LogoContainer>
            <SidebarItemContainer>
                {
                    routes.map(route => (
                        <SidebarItem
                            color={color}
                            href='#'
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon icon={ route.icon }/>
                            <span>{ route.title }</span>
                        </SidebarItem>
                    ))
                }
            </SidebarItemContainer>
            <SidebarItemContainer>
                {
                    bottomRoutes.map(route => (
                        <SidebarItem
                            color={color}
                            href='#'
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon icon={ route.icon }/>
                            <span>{ route.title }</span>
                        </SidebarItem>
                    ))
                }
            </SidebarItemContainer>
        </SidebarWrapper>
    );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
