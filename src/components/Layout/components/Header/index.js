import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import routesConfig from '~/config/routes'
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/img';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon,InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';


const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                }
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {

    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    const currentUser = true;
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/@hoaahanasii',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/Settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}><img src={images.logo} alt="tiktok" /></Link> 
                
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video"  placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon ></UploadIcon>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message"  placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon ></MessageIcon>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox"  placement="bottom">
                                <button  className={cx('action-btn')}>
                                    <InboxIcon></InboxIcon>
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://files.fullstack.edu.vn/f8-tiktok/users/2/627394cb56d66.jpg"
                                alt="Đào Lê Phương Hoa"
                                // fallback="https://th.bing.com/th/id/OIP.Jw6t7hJ_xxsrqOS5y3Y1nwEsDI?w=292&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}
export default Header;
