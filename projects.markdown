---
layout: default
title: "Projects"
permalink: /projects/
---

<div class="projects-container">
    <h1>Projects</h1>
    
    <div class="projects-grid">
        <!-- MSc Project Card -->
        <div class="project-card">
            <h2>MSc Research Project</h2>
            <div class="project-preview">
                <img src="{{ '/assets/imgs/msc_proj_1.jpg' | relative_url }}" alt="MSc Project Preview">
            </div>
            <div class="project-summary">
                <h3>Enhancing Accuracy in Optical Character Recognition of Sensor Readings</h3>
                <p>Comparative Study of Tesseract and CRNN Models with Emphasis on Image Pre-processing</p>
                <a href="{{ '/projects/msc-ocr' | relative_url }}" class="project-link">View Project</a>
            </div>
        </div>

        <!-- Portfolio Project Card -->
        <div class="project-card">
            <h2>Portfolio Website</h2>
            <div class="project-preview">
                <div class="placeholder-image">P</div>
            </div>
            <div class="project-summary">
                <h3>Personal Portfolio Website</h3>
                <p>A Jekyll-based portfolio showcasing projects and professional journey</p>
                <a href="{{ '/projects/portfolio' | relative_url }}" class="project-link">View Project</a>
            </div>
        </div>
    </div>

</div>

<style>
/* Your existing styles remain unchanged */
.projects-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
}

.projects-container h1 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.project-card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.2s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.project-preview {
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: #f5f5f5;
}

.project-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.placeholder-image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-weight: bold;
    color: #666;
    background: #f0f0f0;
}

.project-summary {
    padding: 1.5rem;
}

.project-summary h2 {
    margin: 0 0 1rem 0;
    color: #333;
}

.project-summary h3 {
    margin: 0 0 0.5rem 0;
    color: #444;
    font-size: 1.2rem;
}

.project-summary p {
    margin: 0 0 1rem 0;
    color: #666;
    line-height: 1.5;
}

.project-link {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.2s ease;
}

.project-link:hover {
    background: #0056b3;
}

@media (max-width: 768px) {
    .projects-container {
        padding: 1rem;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>
