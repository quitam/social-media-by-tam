import React from 'react';

import { PostData } from '../../Data/PostData';
import styles from './ListPost.module.scss';
import classNames from 'classnames/bind';
import PostCard from '../PostCard';

const cx = classNames.bind(styles);

const ListPost = () => {
    return (
        <div className={cx('container')}>
            {PostData.map((post, index) => (
                <PostCard key={index} post={post} />
            ))}
        </div>
    );
};

export default ListPost;
