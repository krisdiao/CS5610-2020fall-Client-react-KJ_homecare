import React from "react";
import jobApplicationService from "../../services/JobApplicationService";


//https://www.educative.io/edpresso/file-upload-in-react
/**
 * Component to handle file upload. Works for image
 * uploads, but can be edited to work for any file.
 */
export default function FileUploadComponent() {
    // State to store uploaded file
    const [resume, setFile] = React.useState("");

    // Handles file upload event and updates state
    function handleUpload(event) {
        setFile(event.target.files[0]);

    }

    return (
        <div id="upload-box">
            <input type="file" onChange={handleUpload} />
            <p>Filename: {resume.name}</p>
            <p>File type: {resume.type}</p>
            <p>File size: {resume.size} bytes</p>
            {resume && <ImageThumb image={resume} />}
        </div>
    );
}

/**
 * Component to display thumbnail of image.
 */
const ImageThumb = ({ image }) => {
    return <img src={URL.createObjectURL(image)} alt={image.name} />;
};
