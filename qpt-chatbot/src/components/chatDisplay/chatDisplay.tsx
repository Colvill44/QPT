import { useState } from 'react';
import PromptInput from './components/promptInput/promptInput';
import ResultsDisplay from './components/resultsDisplay/resultsDisplay';
import './css/chatDisplay.css'

const ChatDisplay = () => {

    // Use states for display
    const [prompt, setPrompt] = useState<any>("");
    const [results, setResults] = useState<any>("");


    return (
        <div className='chat-display'>
            <ResultsDisplay />
            <PromptInput prompt={prompt} results={results} setResults={setResults} setPrompt={setPrompt} />
        </div>
    );
};

export default ChatDisplay;