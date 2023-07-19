// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    // const chatProps = useMultiChatLogic(
    //     '902d9a59-2c55-4ad9-8c81-7bb8c5d2e9ab', 
    //     props.user.username, 
    //     props.user.secret
    // );

    return (

        // React Chat Engine Advanced:
        // <div style={{height: '100vh' }}>
        //     <MultiChatSocket {...chatProps} />
        //     <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        // </div>

        // React Chat Engine Pretty:
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow
                projectId="902d9a59-2c55-4ad9-8c81-7bb8c5d2e9ab"
                username= {props.user.username}
                secret= {props.user.secret}
                style={{ height: '100%' }}
            />
        </div>
    )
}

export default ChatsPage;