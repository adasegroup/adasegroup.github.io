---
layout: post
date: 2020-09-10
title: Global Registration of 3D Data in Robotics for Objects Localization Using Deep Learning
inline: false
---

### Project Description
Most of existing local alignment method of 3D objects (represented as point clouds) use all points and are computationally expensive. In addition, a performance of local alignment is heavily influenced by initialization, however, for a global registration on a large scene it is hard to provide a good initialization. In this project, we consider learnable search for object’s initial alignment (global registration) based on a number of possibly promising approaches and various data modalities:

- Segmentation of RGB-D images;
- Multi-view approach;
- Feature engineering approach.

As a starting point, for our segmentation task in context of robotics, we will experiment (e.g., using deep neural networks) on the LabelFusion dataset [1]. Initially, we’ll use about 500Gb (zip) data collection. Multi-view approach implies working with 2D images, but in this task we have several images of one scene (from different view angles). Hence, appropriate NN architectures will also be fine-tuned using LabelFusion dataset. Finally, feature engineering approaches imply operating with point clouds (added meshes and RGB-D images).

### References
1. Marion, Pat, et al. "A pipeline for generating ground truth labels for real rgbd data of cluttered scenes." arXiv preprint arXiv:1707.04796(2017).
