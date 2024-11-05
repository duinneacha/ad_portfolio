---
layout: default
title: "MSc OCR Research Project"
permalink: /projects/msc-ocr/
---

<div class="project-detail">
    <h1>Enhancing Accuracy in Optical Character Recognition of Sensor Readings</h1>
    
    <div class="project-images">
        <img src="{{ '/assets/imgs/msc_proj_1.jpg' | relative_url }}" alt="MSc Progress Image 1">
    </div>

    <div class="project-section">
        <h2>Overview</h2>
        <p>A comparative study of Tesseract and CRNN Models with emphasis on image pre-processing, achieving significant improvements in OCR accuracy through novel techniques.</p>
    </div>

    <div class="project-section">
        <h2>Key Findings</h2>
        <ul>
            <li>Tesseract OCR outperformed CRNN models, reaching 100% accuracy in specific scenarios</li>
            <li>Novel color masking technique introduced for enhanced digit clarity</li>
            <li>Significant accuracy improvements from 1% to over 47% through optimized pre-processing</li>
        </ul>
    </div>

    <div class="project-section">
        <h2>Methodology</h2>
        <p>The research focused on comparing Tesseract OCR and CRNN models, introducing specialized pre-processing techniques:</p>
        <ul>
            <li>Color masking for different display types</li>
            <li>Thresholding and morphological operations</li>
            <li>Denoising and deblurring techniques</li>
        </ul>
    </div>

    <div class="project-gallery">
        <img src="{{ '/assets/imgs/msc_proj_2.jpg' | relative_url }}" alt="MSc Progress Image 2">
        <img src="{{ '/assets/imgs/msc_proj_3.jpg' | relative_url }}" alt="MSc Progress Image 3">
    </div>

    <div class="project-section">
        <h2>Documentation</h2>
        <a href="{{ '/assets/pdfs/AD_Msc.pdf' | relative_url }}" target="_blank" class="doc-link">View Full Thesis</a>
    </div>

</div>

<style>
.project-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
}

.project-section {
    margin: 2rem 0;
}

.project-images img,
.project-gallery img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1rem 0;
}

.project-gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
}

.project-section h2 {
    color: #333;
    margin-bottom: 1rem;
}

.project-section ul {
    list-style-type: none;
    padding: 0;
}

.project-section li {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
}

.project-section li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #007bff;
}

.doc-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.2s ease;
}

.doc-link:hover {
    background: #0056b3;
}

@media (max-width: 768px) {
    .project-detail {
        padding: 1rem;
    }
    
    .project-gallery {
        grid-template-columns: 1fr;
    }
}
</style>
