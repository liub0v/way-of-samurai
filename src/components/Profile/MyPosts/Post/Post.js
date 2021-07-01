import React from 'react';
import styles from './Post.module.css'

const Post = ({message}) => {
    return (

        <div className={styles.post}>
            <img src="img/avatar.png"/>
            <text>{message}</text>
        </div>

    );
}
export default Post;