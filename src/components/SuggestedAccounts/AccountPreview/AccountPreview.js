import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/Button/Button';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1610321846996993.jpeg?x-expires=1693299600&amp;x-signature=jqhA6drnsZwOEZQh%2BE5v1h2eWKo%3D"
                    alt=""
                />
                <Button primary className={cx('follow-btn')}>Follow</Button>
            </header>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <span>phuonglytran</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Phương Ly Trần</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
