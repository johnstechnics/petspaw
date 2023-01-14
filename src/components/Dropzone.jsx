import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { ReactComponent as PlaceholderImg } from '../assets/img/img_placeholder.svg';
import { ReactComponent as SuccessImg } from '../assets/img/success.svg';
import { ReactComponent as ErrorImg } from '../assets/img/error.svg';

export const Dropzone = () => {

    const [file, setFile] = useState([]);
    const [uploadStatus, setUploadStatus] = useState(null);
    const [allowedFile, setSllowedFile] = useState('');

    const apiUrl = process.env.REACT_APP_API_URL;
    const xApiKey = process.env.REACT_APP_X_API_KEY;

    const onDrop = useCallback(files => {
        const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
        if (!allowedExtensions.exec(files[0].path)) {
            setSllowedFile(false);
            setFile([]);
        } else {
            setSllowedFile(true);
            setUploadStatus('unset');
            const f = files.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            }));
            setFile(f[0]);
        };
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const imgUpload = () => {
        setUploadStatus('loading');
        const data = new FormData();
        data.append('file', file);
        const imgUploadUrl = apiUrl + 'images/upload';
        fetch(imgUploadUrl, {
            method: "POST",
            headers: {
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "x-api-key": xApiKey
            },
            body: data
        })
            .then(respons => {
                if (respons.status === 400) {
                    setUploadStatus('noAnimal');
                } else if (respons.status === 201) {
                    setUploadStatus('success');
                    setFile([]);
                }
            })
            .catch(error => console.log(error))
    };

    return (
        <>
            <div
                className={`upload__img${uploadStatus === 'noAnimal' ? (
                    ' error'
                ) : (
                    ''
                )}`}
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                {file.length === 0 && allowedFile === false ? (
                    <span>not allowed file</span>
                ) : file.length === 0 ? (
                    <>
                        <PlaceholderImg className="upload__img_placeholder" />
                        <p className="upload__img_text">
                            {isDragActive ? (
                                <span>Drop the files here</span>
                            ) : (
                                <><span>Drag here</span> your file or <span>Click here</span> to upload</>
                            )}
                        </p>
                    </>
                ) : (
                    allowedFile ? (
                        <div className="upload__img_wrap">
                            <img src={file.preview} alt={file.name} />
                        </div>
                    ) : (
                        <span>not allowed file</span>
                    )
                )}
            </div>
            <div className="upload__file">
                {file.length === 0 ? 'No file selected' : `Image File Name: ${file.name}`}
            </div>
            {file.length === 0 ? (
                null
            ) : (
                <button
                    style={uploadStatus === 'noAnimal' || uploadStatus === 'success' ? (
                        { display: 'none' }
                    ) : (
                        { display: 'flex' }
                    )}
                    onClick={imgUpload}
                    className="upload__btn"
                >
                    {uploadStatus === 'loading' ? (
                        'loading'
                    ) : uploadStatus === 'success' ? (
                        'success'
                    ) : (
                        'upload photo'
                    )}
                </button>
            )}
            {uploadStatus === 'noAnimal' ? (
                <div className="upload__result">
                    <ErrorImg />
                    <p>No Dog found - try a different one</p>
                </div>
            ) : uploadStatus === 'success' ? (
                <div className="upload__result">
                    <SuccessImg />
                    <p>Thanks for the Upload - Dog found!</p>
                </div>
            ) : (
                null
            )}
        </>
    )
};
