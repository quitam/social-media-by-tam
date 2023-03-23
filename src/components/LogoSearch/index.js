import React from 'react';

import styles from './LogoSearch.module.scss';
import classNames from 'classnames/bind';
import Logo from '../../assets/images/logo.png';
import { FiSearch } from 'react-icons/fi';
const cx = classNames.bind(styles);

const LogoSearch = () => {
    return (
        <div className={cx('logo-search')}>
            <img src={Logo} alt="Logo" />
            <div className={cx('search')}>
                <input type="text" placeholder="#Explore" />
                <div className={cx('s-icon')}>
                    <FiSearch />
                </div>
            </div>
        </div>
    );
};

export default LogoSearch;
