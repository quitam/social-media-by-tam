import React from 'react';

import styles from './PostSection.module.scss';
import classNames from 'classnames/bind';
import CreatePost from '../CreatePost';
import ListPost from '../ListPost';

const cx = classNames.bind(styles);

const PostSection = () => {
    return (
        <div className={cx('container')}>
            <CreatePost />
            <ListPost />
        </div>
    );
};

export default PostSection;
