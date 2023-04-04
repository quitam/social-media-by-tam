import React from 'react';

import styles from './MainSection.module.scss';
import classNames from 'classnames/bind';
import CreatePostCard from '../CreatePostCard';
import ListPost from '../ListPost';

const cx = classNames.bind(styles);

const MainSection = () => {
    return (
        <div className={cx('container')}>
            <CreatePostCard />
            <ListPost />
        </div>
    );
};

export default MainSection;
