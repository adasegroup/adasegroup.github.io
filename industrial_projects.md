---
layout: page
title: Industrial Projects
permalink: /industrial-projects/
---

<div class="user-projects">
  <div class="images-right">
    <img alt="ADASE: Model based predictive control and recommendations" src="{{ "/assets/img/project1.png" | prepend: site.baseurl }}" />
  </div>
  <div class="contents">
    <h3> Model based predictive control and recommendations </h3>
    <h4>Examples:</h4>
    <h4>Optimize efficiency of sugar extraction (joint with I. Oseledets)</h4>
      <p>
      <strong>Input X:</strong> Beet chips shape, quality, temperature, sugar content and flux; wash water temperature, pH and flux; the temperature inside the diffuser, etc.
      <br/><strong>Output Y:</strong> Costs, losses, efficiency of sugar extraction
      </p>
    <h4>Minimize fuel consumption of a cargo vessel, detect frauds with fuel, optimize expedition route</h4>
      <p><strong>Input X:</strong> Dimensions (length, height, width), load capacity, type (ferry, barge, freighter, etc.), number of engines, etc.; Route data; information about weather and sea currents (historical, predictive and real-time); controls (vessel speed, etc.)
      <br/><strong>Output Y:</strong> Fuel consumption
      </p>
    <p>Some challenges are the presence of heterogeneous data and noise, large volumes of high-dimensional stream data, missing values, outliers/incorrect values, etc.
</p>
  </div>
</div>
<div class="user-projects">
  <div class="images-left">
    <img alt="mountains" src="{{ "/assets/img/project2.png" | prepend: site.baseurl }}" />
  </div>
  <div class="contents-right">
    <h3>Large-Scale Shape Retrieval and Classification via 3D Deep Neural Networks</h3>
    <h4>Examples:</h4>
    <h4>3D data is widespread, e.g.</h4>
      <ul>
        <li>3D CAD models</li>
        <li>Remote sensing data from satellites</li>
        <li>3D medical images, etc.</li>
      </ul>
    <h4>For applications it is necessary to</h4>
      <ul>
        <li>Recognize/categorize 3D shapes (e.g. CAD models)</li>
        <li>Retrieve similar shapes</li>
        <li>Predict characteristics of 3D objects</li>
      </ul>
    <h4>Used methods</h4>
      <ul>
        <li>Voxelization</li>
        <li>Sparse 3D convolutional deep neural networks</li>
        <li>Local features based on differential geometry</li>
      </ul>      
    <p>Some challenges are the presence of heterogeneous data and noise, large volumes of high-dimensional stream data, missing values, outliers/incorrect values, etc.
</p>
  </div>
</div>


### Applications of massive data processing and predictive maintenance technology
1. Prediction of failures in auxiliary power units
2. Aerodynamic design of efficient layouts for passenger aircraft
3. Design of the side panel of F1 car

### Applications of deep learning technology
1. 3D data processing
2. 3D shape recognition

### Development & implementation of software libaries

#### pSeven Core (MACROS Library) 
The library was developed for optimization and modeling of surrogate functions in collaboration with [DATADVANCE](https://www.datadvance.net/ru/) 

Quality assurance:
- Technology Readiness Level 6 (NASA classification)
- According to [Airbus experts](http://www.airbus.com/presscentre/pressreleases/press-release-detail/detail/airbus-to-reduce-lead-times-in-numerical-analysis-activities-for-aircraft-design/) , application of MACROS “provides the reduction of up to 10% of lead time and cost in several areas of the aircraft design process”
- Several joint projects with industry partners have been [successfully completed](http://www.aerospace-technology.com/news/newsairbus-uses-datadvances-macros-software-structural-analysis-a350-xwb-aircraft-4362144)

Use cases:
- Structural analysis of composite stiffened panels on aircrafts
- Aerodynamic design of layouts for passenger aircrafts

#### Library for predictive maintenance (PHM core)

Quality assurance:
- Technology Readiness Level 5 (NASA classification)

Use cases:
- Airplanes leakage detection
- APU failures prediction
- Oil filter clogging detection
- Software-intensive systems: detection of outages of internet user services
