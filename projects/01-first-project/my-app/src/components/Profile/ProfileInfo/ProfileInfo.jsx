import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            {/*<div>
                <img src='https://footballwhispers.com/wp-content/uploads/2020/12/emirates-stadium.jpg'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={"Hello my friends"} />
            </div>
        </div>
    )
}

export default ProfileInfo;