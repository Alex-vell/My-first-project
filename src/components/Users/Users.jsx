import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    /*let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }*/

    return <div>
        {/* <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>*/}
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount}
                   pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User user={u}
                                     key={u.id}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}
                                     follow={props.follow}

                    />

                    /*<div key={u.id}>
                        <span>
                            <div>
                               <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                               </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress
                                        .some(id => id === u.id)}
                                              onClick={() => { props.unfollow(u.id);}}>
                                        Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                              onClick={() => { props.follow(u.id);/!*usersAPI.follow(u.id)
                                        /!*axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': 'fcfbce9d-b05b-4202-9d0e-954e03742426'
                                            }
                                        })*!/
                                            .then(response => {
                                                if (response.data.resultCode == 0) {
                                                    props.follow(u.id);
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            });*!/ }}>
                                        Follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                    </div>*/
                )
            }
        </div>
    </div>
}

export default Users;