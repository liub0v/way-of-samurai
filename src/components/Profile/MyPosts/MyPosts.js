import React from 'react';
import styles from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={styles.item}>
            <label className={styles.header}> My posts </label>
            <div>
                <div className={styles.new_post}>
                    <input type="text" placeholder="What is new?"></input>
                    <button>Send</button>
                </div>
                <div className={styles.posts}>
                    <Post message="My friends are the best"/>
                    <Post message="It's my first post"/>
                </div>
            </div>
        </div>
    );
}
export default MyPosts;