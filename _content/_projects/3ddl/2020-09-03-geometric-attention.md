---
layout: project_page
team: 3ddl
categories: 3ddl
front_id: 9

title: Geometric Attention for Prediction of Differential Properties in 3D Point Clouds
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
venue: The 9th IAPR TC3 Workshop on Artificial Neural Networks in Pattern Recognition 2020

excerpt: A learnable attention-based point neighborhood selection for prediction of the differential geometric properties. 

abstract: Estimation of differential geometric quantities in discrete 3D data representations is one of the crucial steps in the geometry processing pipeline. Specifically, estimating normals and sharp feature lines from raw point cloud helps improve meshing quality and allows us to use more precise surface reconstruction techniques. When designing a learnable approach to such problems, the main difficulty is selecting neighborhoods in a point cloud and incorporating geometric relations between the points. In this study, we present a geometric attention mechanism that can provide such properties in a learnable fashion. We establish the usefulness of the proposed technique with several experiments on the prediction of normal vectors and the extraction of feature lines. 

thumbnail: /assets/img/projects/geometric_attention/thumbnail.jpg
visual_abstract: /assets/img/projects/geometric_attention/teaser-pic.jpg
visual_abstract_description: We demonstrate the learned point neighborhood for the case of feature detection. The color-coding on the right image indicates the relative distances of all points from the query point. Note that the bright region border does not extend to the set of points marked as sharp, meaning that the kNN would only select points from the top plane.
bibtex: "\
@article{matveev2020geometric,
  title={Geometric Attention for Prediction of Differential Properties in 3D Point Clouds},
  author={Matveev, Albert and Artemov, Alexey and Zorin, Denis and Burnaev, Evgeny},
  journal={arXiv preprint arXiv:2007.02571},
  year={2020}
}"

materials:
    - name: Paper
      url: https://arxiv.org/pdf/2007.02571.pdf
      icon: fa fa-file-pdf-o
---
## Contact
If you have any questions about this work, please contact us under [adase-3ddl@skoltech.ru](mailto:adase-3ddl@skoltech.ru).
