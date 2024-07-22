import React from 'react';

const ImageSelection = () => {
    return (
        <form className="form">
            <style jsx>{`
                .form {
                    background-color: #fff;
                    box-shadow: 0 10px 60px rgb(218, 229, 255);
                    border: 1px solid rgb(159, 159, 160);
                    border-radius: 20px;
                    padding: 2rem .7rem .7rem .7rem;
                    text-align: center;
                    font-size: 1.125rem;
                    max-width: 320px;
                }
                .form-title {
                    color: #000000;
                    font-size: 1.8rem;
                    font-weight: 500;
                }
                .form-paragraph {
                    margin-top: 10px;
                    font-size: 0.9375rem;
                    color: rgb(105, 105, 105);
                }
                .drop-container {
                    background-color: #fff;
                    position: relative;
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;
                    margin-top: 2.1875rem;
                    border-radius: 10px;
                    border: 2px dashed rgb(171, 202, 255);
                    color: #444;
                    cursor: pointer;
                    transition: background .2s ease-in-out, border .2s ease-in-out;
                }
                .drop-container:hover {
                    background: rgba(0, 140, 255, 0.164);
                    border-color: rgba(17, 17, 17, 0.616);
                }
                .drop-container:hover .drop-title {
                    color: #222;
                }
                .drop-title {
                    color: #444;
                    font-size: 20px;
                    font-weight: bold;
                    text-align: center;
                    transition: color .2s ease-in-out;
                }
                #file-input {
                    width: 350px;
                    max-width: 100%;
                    color: #444;
                    padding: 2px;
                    background: #fff;
                    border-radius: 10px;
                    border: 1px solid rgba(8, 8, 8, 0.288);
                }
                #file-input::file-selector-button {
                    margin-right: 20px;
                    border: none;
                    background: #084cdf;
                    padding: 10px 20px;
                    border-radius: 10px;
                    color: #fff;
                    cursor: pointer;
                    transition: background .2s ease-in-out;
                }
                #file-input::file-selector-button:hover {
                    background: #0d45a5;
                }
            `}</style>
            <span className="form-title">Upload your file</span>
            <p className="form-paragraph">
                File should be an image
            </p>
            <label htmlFor="file-input" className="drop-container">
                <span className="drop-title">Drop files here</span>
                or
                <input type="file" accept="image/*" required id="file-input" />
            </label>
        </form>
    )
}

export default ImageSelection;
