import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import handleSubmit from "redux-form/lib/handleSubmit";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newPostText' placeholder={'Post message'}
                       validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'ProfileAddPostForm'})(AddNewPostForm);

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
