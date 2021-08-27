---
layout: project_page
team: 3ddl
categories: 3ddl
front_id: 10

title: 3D Parametric Wireframe Extraction Based on Distance Fields
authors:
  - name: Albert Matveev
    affiliation: 1
  - name: Alexey Artemov
    affiliation: 1
  - name: Denis Zorin
    affiliation: '2, 1'
  - name: Evgeny Burnaev
    affiliation: 1
affiliation:
  - Skolkovo Institute of Science and Technology
  - New York University
venue: The 4th International Conference on Artificial Intelligence and Pattern Recognition 2021

excerpt: A pipeline for parametric sharp features wireframe extraction from densely sampled point clouds. 

abstract: We present a pipeline for parametric wireframe extraction from densely sampled point clouds. Our approach processes a scalar distance field that represents proximity to the nearest sharp feature curve. In intermediate stages, it detects corners, constructs curve segmentation, and builds a topological graph fitted to the wireframe. As an output, we produce parametric spline curves that can be edited and sampled arbitrarily. We evaluate our method on 50 complex 3D shapes and compare it to the novel deep learning-based technique, demonstrating superior quality. 

thumbnail: /assets/img/projects/wireframe_extraction/thumbnail.jpg
visual_abstract: /assets/img/projects/wireframe_extraction/teaser-pic.jpg
visual_abstract_description: Parametric wireframe extraction pipeline. (a) -- dense point cloud with estimated distance field, (b) -- sharp point skeleton with color-coded segmentation into individual curves (note the black clusters corresponding to the detected corner neighborhoods), (c) -- optimized topological graph with final corner points (red), (d) -- extracted parametric wireframe, (e) -- ground-truth parametric wireframe.
bibtex: "\
@article{matveev20213d,
  title={3D Parametric Wireframe Extraction Based on Distance Fields},
  author={Matveev, Albert and Artemov, Alexey and Zorin, Denis and Burnaev, Evgeny},
  journal={arXiv preprint arXiv:2107.06165},
  year={2021}
}"

materials:
    - name: Paper
      url: https://arxiv.org/pdf/2007.02571.pdf
      icon: fa fa-file-pdf-o
---
## Contact
If you have any questions about this work, please contact us under [adase-3ddl@skoltech.ru](mailto:adase-3ddl@skoltech.ru).
