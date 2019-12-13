---
layout: project_page
team: 3ddl
categories: 3ddl

title: Monocular 3D Object Detection via Geometric Reasoning on Keypoints
authors:
  - name: Ivan Barabanau
    affiliation: 1
  - name: Alexey Artemov
    affiliation: 1
  - name: Evgeny Burnaev
    affiliation: 1
  - name: Vyacheslav Murashkin
    affiliation: 2
affiliation:
  - Skolkovo Institute of Science and Technology
  - Yandex
venue: arXiv 2019

excerpt: We augment a conventional object detection framework with a keypoint detection module and a multi-view consistency loss to make it a robust 3D keypoint estimator, that we use for predicting 3D objects in KITTI road scenes.
abstract: Monocular 3D object detection is well-known to be a challenging vision task due to the loss of depth information; attempts to recover depth using separate image-only approaches lead to unstable and noisy depth estimates, harming 3D detections. In this paper, we propose a novel keypoint-based approach for 3D object detection and localization from a single RGB image. We build our multi-branch model around 2D keypoint detection in images and complement it with a conceptually simple geometric reasoning method. Our network performs in an end-to-end manner, simultaneously and interdependently estimating 2D characteristics, such as 2D bounding boxes, keypoints, and orientation, along with full 3D pose in the scene. We fuse the outputs of distinct branches, applying a reprojection consistency loss during training. The experimental evaluation on the challenging KITTI dataset benchmark demonstrates that our network achieves state-of-the-art results among other monocular 3D detectors.

visual_abstract: /assets/img/projects/od_via_geom_reasoning/teaser-pic.jpg
visual_abstract_description: '<span style="background-color: #F00;color: #FFF">Somebody fill this with description of the figure above</span>'
#bibtex: '<span style="background-color: #F00;color: #FFF">Somebody fill this with bibtex when it is published'

materials:
    - name: Paper
      url: https://arxiv.org/pdf/1905.05618.pdf
      icon: fa fa-file-pdf-o
---
## Contact
If you have any questions about this work, please contact us under [adase-3ddl@skoltech.ru](mailto:adase-3ddl@skoltech.ru).
