import SubmitButton from './components/submitButton/submitButton';
import TextInput from './components/textInput/textInput';
import './css/promptInput.css'

const PromptInput = () => {
    return (
        <div className='prompt-input-container'>
            <TextInput />
            <SubmitButton />
        </div>
    )
}

export default PromptInput;