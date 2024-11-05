import './css/textInput.css'

interface InputProps {
    setPrompt: any;
}

const TextInput = (props: InputProps) => {

    const { setPrompt } = props;

    const handleInputChange = (event: any) => {
        setPrompt(event.target.value);
      };


    return(
        <div className='text-input'>
           <textarea placeholder='Enter your question here...' onChange={handleInputChange}/>
        </div>
    )
}

export default TextInput;