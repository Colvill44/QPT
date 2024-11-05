import SubmitButton from './components/submitButton/submitButton';
import TextInput from './components/textInput/textInput';
import './css/promptInput.css'

interface InputProps {
    prompt: any;
    setPrompt: any;
    setResults: any;
    results: any;
}

const PromptInput = (props: InputProps) => {
    const { setPrompt, setResults, results, prompt } = props;
    return (
        <div className='prompt-input-container'>
            <TextInput setPrompt={setPrompt} />
            <SubmitButton setResults={setResults} results={results} prompt={prompt} setPrompt={setPrompt} />
        </div>
    )
}

export default PromptInput;