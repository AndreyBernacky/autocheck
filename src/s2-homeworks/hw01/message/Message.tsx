import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: meaasgeProps
}
type meaasgeProps = {
    id: number,
    user: userPropsType,
    message: messagePropsType
}
type userPropsType = {
    avatar: string,
    name: string
}
type messagePropsType = {
    text: string,
    time: string
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <div className={s.avatar}>
                    <img
                        id={'hw1-avatar-' + props.message.id}
                        // создаёт студент
                        src={props.message.user.avatar}
                        //
                        alt='avatar'
                    />
                    <div id={'hw1-time-' + props.message.id} className={s.time}>
                        {/*создаёт студент*/}
                        {props.message.message.time}
                        {/**/}
                    </div>
                </div>
                <div className={s.text}>
                    <div className={s.Message_arrow}>
                        <div className={s.Message_arrowin}></div>
                    </div>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {props.message.user.name}
                        {/**/}
                    </div>
                    <p id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Message
