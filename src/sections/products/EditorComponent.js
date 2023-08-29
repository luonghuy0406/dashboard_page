import React from 'react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { CKEditor } from '@ckeditor/ckeditor5-react';



export default function EditorComponent() {
    const handleReady = (editor) => {
        console.log('Editor is ready to use!', editor);
    };

    const handleChange = (event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
    };

    const handleBlur = (event, editor) => {
        console.log('Blur.', editor);
    };

    const handleFocus = (event, editor) => {
        console.log('Focus.', editor);
    };

    return (
        <div className="App">
            <h2>Using CKEditor 5 from online builder in React</h2>
            <CKEditor
                editor={Editor}
                data="<p>Hello from CKEditor 5!</p>"
                onReady={handleReady}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
            />
        </div>
    );
}
