import PromptInput from './components/promptInput/promptInput';
import ResultsDisplay from './components/resultsDisplay/resultsDisplay';
import './css/chatDisplay.css'

const ChatDisplay = () => {
    return(
        <div className='chat-display'>
            <ResultsDisplay />
            <PromptInput />
        </div>
    );
};

export default ChatDisplay;