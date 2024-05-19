import PromptInput from './components/promptInput/promptInput';
import './css/chatDisplay.css'

const ChatDisplay = () => {
    return(
        <div className='chat-display'>
            <PromptInput />
        </div>
    );
};

export default ChatDisplay;