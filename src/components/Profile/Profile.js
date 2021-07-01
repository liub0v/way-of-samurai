import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={styles.content}>
            <div className={styles.item}>
                <label className={styles.header}>{"Dan Abramov"}</label>
                <div className={styles.user}>
                    <div className={styles.avatar}>
                        <img src="/img/avatar.png"/>
                    </div>
                    <div className={styles.description}>
                        <div> B-Day: {"01.01.1989"}</div>
                        <div> City: {"Minsk"}</div>
                        <div> Education: {"BSU'22"}</div>
                        <div> Website: {"www.website.com"}</div>
                    </div>
                </div>
            </div>
            <MyPosts/>
        </div>
    );
}
export default Profile;