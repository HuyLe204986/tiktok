import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }

    return (
        <div>
            <Tippy offset={[-20,0]} interactive delay={[800, 0]} render={renderPreview} placement='bottom'>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        alt=""
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1610321846996993.jpeg?x-expires=1693299600&amp;x-signature=jqhA6drnsZwOEZQh%2BE5v1h2eWKo%3D"
                    ></img>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <span>phuonglytran</span>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>Phương Ly Trần</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

export default AccountItem;
