import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                    {
                        id: 1,
                        photoUrl: 'https://sun2.cosmostv-by-minsk.userapi.com/s/v1/if1/KC4UU3G9gN0NDID6opY4dkvHJXiF7y9sJVXKALg4DWCknqHfSMTwwFLSoPLjvCp4fOUND0iC.jpg?size=200x0&quality=96&crop=313,81,1661,1661&ava=1',
                        followed: false,
                        fullName: 'Alexander',
                        status: 'I am a boss',
                        location: {city: 'Minsk', country: 'Belarus'}
                    },
                    {
                        id: 2,
                        photoUrl: 'https://sun1.cosmostv-by-minsk.userapi.com/s/v1/if1/gWzaZajp0xaCSVny2gBHthAkg3x3sRDbAQYORhkYBdAv2p84v_6dcFliULVp39px1L20PueM.jpg?size=200x0&quality=96&crop=0,6,839,901&ava=1',
                        followed: true,
                        fullName: 'Natalia',
                        status: 'I am a wife',
                        location: {city: 'Minsk', country: 'Belarus'}
                    },
                    {
                        id: 3,
                        photoUrl: 'data:image/jpeg;base64,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',
                        followed: false,
                        fullName: 'Dmitry',
                        status: 'I am a titcher',
                        location: {city: 'Minsk', country: 'Belarus'}
                    },
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;