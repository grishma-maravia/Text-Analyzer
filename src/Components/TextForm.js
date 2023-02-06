import React, {useState} from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props){

    const [text, setText] = useState('');

    const convertToUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase!', 'success');
    }

    const convertToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase!', 'success');
    }

    const copyText = () => {
        let newText = document.getElementById('textId');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert('Copied to clipboard!', 'success');
    }

    const removeSpace = () => {
        let newText = text.replace(/  +/g, ' ');
        // let newText = text.replace(/\s+/g, ' ').trim(); ...regular expression (regex)
        setText(newText);
        props.showAlert('Extra spaces removed!', 'success');
    }

    const clearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text cleared!', 'success');
    }

    const textChange = (event) => {
        setText(event.target.value);
    }

    let letter;
    if (text.length > 1) {
        letter = 'letters';
    } else {
        letter = 'letter';
    }

    let word;
    if (text.split(" ").length > 1) {
        word = 'words';
    } else {
        word = 'word';
    }

    let read = Math.ceil(0.008 * text.split(" ").length);

    return(
        <>
            <div className='container my-5'>
                <h1>{props.heading}</h1>
                <div className="mb-2">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'?'dark':'light'}`} id="textId" value={text} onChange={textChange} rows="10"></textarea>
                </div>
                <div className='d-flex justify-content-between mb-4'>
                    <span>{read} minutes read</span>
                    <span>{text.split(" ").length} {word} and {text.length} {letter}</span>
                </div>
                <button className="btn btn-primary mx-1" onClick={convertToUpperCase}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={convertToLowerCase}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={copyText}>Copy to clipboard</button>
                <button className="btn btn-primary mx-1" onClick={removeSpace}>Remove extra space</button>
                <button className="btn btn-primary mx-1" onClick={clearText}>Reset</button>
                <div className='mt-5'>
                    <h2>Preview text here</h2>
                    <p>{text===''?'Please write above to preview it here':text}</p>
                </div>
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string
};

TextForm.defaultProps = {
    heading: 'Enter text here...'
};