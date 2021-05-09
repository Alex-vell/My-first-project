import React from "react";
import {Field, reduxForm} from "redux-form";
import handleSubmit from "redux-form/lib/handleSubmit";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name='newMessageBody'
                       placeholder='Enter your message'/>
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

export default reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);