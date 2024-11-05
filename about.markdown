---
layout: default
title: "About"
permalink: /about/
---

<div id="timeline">
  <details>
    <summary>2024</summary>
    <!-- <div class="circle"></div> -->
    <p>Being useful</p>
  </details>
  
  <details>
    <summary>2021 - 2023</summary>
    <p>MTU Data Science and Analytics MSc.</p>
  </details>

  <details>
    <summary>2017 - 2021</summary>
    <p>MTU Computer Science and Web Development BSc.</p>
  </details>

  <details>
    <summary>2016 - 2017</summary>
    <p>Networks and Web Design, St. Johns Cork</p>
  </details>

  <details>
    <summary>2014 - 2016</summary>
    <p>Focus Program National Learning Network</p>
  </details>
  <details>
    <summary>2011 - 2014</summary>
    <p>Artesium Associates Ltd.</p>
  </details>
  <details>
    <summary>2001 - 2011</summary>
    <p>B&Q, UK,  C.C.A.S. Ltd.</p>
  </details>
  <details>
    <summary>1996 - 2001</summary>
    <p>Howard Schultz & Associates, UK</p>
  </details>
  <details>
    <summary>1995 - 1996</summary>
    <p>Proven Alternatives Inc, Kent Tech</p>
  </details>
  <details>
    <summary>1992 - 1995</summary>
    <p>Singrauli Coal Felds, Amlohri, India</p>
  </details>
  <details>
    <summary>1989 - 1992</summary>
    <p>Seabrook Research Ltd., Cork</p>
  </details>
</div>

<style>
  /* Timeline container styling */
#timeline {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Timeline vertical line */
#timeline::before {
  content: '';
  position: absolute;
  left: calc(50% - 2px);
  width: 4px;
  height: calc(100% - 4rem);
  background: linear-gradient(to bottom, #2563eb, #3b82f6, #60a5fa);
  border-radius: 2px;
}

/* Details element styling */
#timeline details {
  position: relative;
  width: calc(50% - 3rem);
  margin: 2rem 0;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
              0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
}

/* Alternate left-right positioning */
#timeline details:nth-child(odd) {
  margin-left: calc(50% + 3rem);
}

/* Timeline dots */
#timeline details::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  background: white;
  border: 4px solid #3b82f6;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}

/* Position dots */
#timeline details:nth-child(odd)::before {
  left: -4rem;
}

#timeline details:nth-child(even)::before {
  right: -4rem;
}

/* Summary styling */
#timeline details summary {
  font-weight: 600;
  font-size: 1.25rem;
  color: #1e40af;
  cursor: pointer;
  outline: none;
  padding: 0.5rem 0;
}

/* Remove default arrow */
#timeline details summary::-webkit-details-marker {
  display: none;
}

/* Content styling */
#timeline details p {
  margin: 1rem 0 0;
  color: #4b5563;
  line-height: 1.6;
}

/* Hover effects */
#timeline details:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
              0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* Animation for opening details */
#timeline details[open] summary ~ * {
  animation: reveal 0.3s ease-in-out;
}

@keyframes reveal {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive design */
@media (max-width: 768px) {
  #timeline::before {
    left: 0;
  }
  
  #timeline details {
    width: calc(100% - 2rem);
    margin: 1rem 0 1rem 2rem !important;
  }
  
  #timeline details::before {
    left: -2.5rem !important;
  }
}
</style>
