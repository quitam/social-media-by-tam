import React from 'react';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Logo from '../../assets/logo/logo.png';
import { FiHome, FiSettings, FiBell, FiUser } from 'react-icons/fi';

import { FiSearch } from 'react-icons/fi';

const cx = classNames.bind(styles);
const Header = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('wrap-logo')}>
                <div className={cx('logo')}>
                    <img src={Logo} alt="Logo" className={cx('logo-img')} />
                </div>
            </div>
            <div className={cx('wrap-search')}>
                <div className={cx('search')}>
                    <input type="text" placeholder="Search in TamMedia" className={cx('input-search')} />
                    <div className={cx('btn-search')}>
                        <FiSearch />
                    </div>
                </div>
            </div>
            <div className={cx('wrap-nav')}>
                <div className={cx('nav-icons')}>
                    <dv className={cx('wrap-icon')}>
                        <FiHome fill="var(--primary)" />
                    </dv>
                    <dv className={cx('wrap-icon')}>
                        <FiSettings />
                    </dv>
                    <dv className={cx('wrap-icon')}>
                        <FiBell style={{ transform: 'rotate(22.5deg)' }} />
                    </dv>
                    <dv className={cx('wrap-icon')}>
                        <FiUser />
                    </dv>
                </div>
            </div>
        </div>
    );
};

export default Header;
