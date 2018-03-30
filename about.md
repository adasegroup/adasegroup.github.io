---
layout: page
title: About us
permalink: /about/
---

<div class="research-details">
  <h1> {{site.research_title}} </h1>
  <p>ADASE is a group of research enthusiasts pushing the state of the art at the intersection of kernel methods, prediction methods for 3D data, 
  deep learning, online data, and machine learning. Our research mission is to construct data-driven (surrogate) models capable of predicting behavior, 
  performing model-based control and recommend future actions, optimizing design and performance and detecting anomalies and predict failures. 
  Aside from traditional convex and non-convex optimization techniques, we see great potential in modern artificial intelligence, mainly deep learning, 
  in order to achieve these goals.<br/> <br/>
  <strong>Keywords:</strong> Machine Learning, Engineering Problems, Online Data, Kernel Methods, Gaussian Process, Deep Learning.</p>
<a class="project-link" href="/academic-projects/">More...</a>
</div>

<div class="staff-details">
  <h1> {{site.staff_title}} </h1>
  
  <div class = "user">
  <div class="staff-profile">
     <h3>Associate Professor</h3>
      {% if site.resume_avatar == 'true' %}
      <img src="{{ "/assets/img/staff/pb.png" | prepend: site.baseurl }}" alt="Evgeny Burnaev" class="no-print" itemprop="image">
      {% endif %}
      <h4>Evgeny Burnaev</h4>
    </div>
    
     <div class="staff-profile">
      <h3>Principal Research Scientist</h3>
      {% if site.resume_avatar == 'true' %}
      <img src="{{ "/assets/img/staff/ab.jpg" | prepend: site.baseurl }}" alt="Alexander Bernstein" class="no-print" itemprop="image">
      {% endif %}
      <h4>Alexander Bernstein</h4>
    </div>
    
    </div>
      
  <div class="user">
    <div class="staff-profile">
      <h3>Research Scientist</h3>
      {% if site.resume_avatar == 'true' %}
      <img src="{{ "/assets/img/staff/vi.png" | prepend: site.baseurl }}" alt="Vladimir Ignatiev" class="no-print" itemprop="image">
      {% endif %}
      <h4>Vladimir Ignatiev</h4>
    </div>
    <div class="staff-profile">
      <h3>Research Scientist</h3>
      {% if site.resume_avatar == 'true' %}
      <img src="{{ "/assets/img/staff/aa.png" | prepend: site.baseurl }}" alt="Alexey Artemov" class="no-print" itemprop="image">
      {% endif %}
      <h4>Alexey Artemov</h4>
    </div>
    <div class="staff-profile">
      <h3>Junior Research Scientist</h3>
      {% if site.resume_avatar == 'true' %}
      <img src="{{ "/assets/img/staff/rr.png" | prepend: site.baseurl }}" alt="Rodrigo Rivera" class="no-print" itemprop="image">
      {% endif %}
      <h4>Rodrigo Rivera</h4>
    </div>
</div>
<a class="project-link" href="{{ "/staff/" | prepend: site.baseurl }}">More...</a>  


</div>

