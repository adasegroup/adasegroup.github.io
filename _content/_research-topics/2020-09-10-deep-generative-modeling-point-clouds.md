---
layout: post
date: 2020-09-10
title: Deep Generative Modeling of Point Clouds
inline: false
---

### Project Description
Existing approaches for 3D point cloud processing [1-3] suffer from excessive complexity, while still they don’t allow performing shape completion: generating points in order to complete holes in an image. The motivation for shape completion is given by the application of LIDAR sensors, which are widely used in robotics applications such as self-driving cars. An output of a LIDAR sensor contains holes and shadows, when some objects overlap background.

The main approach, that is supposed to be used in the project, is the so-called attention mechanism [4]. Originally this mechanism has been demonstrated to be a powerful tool for machine translation and image captioning tasks. As our experiments show, it can be also used for point cloud processing and generation. As a result of this project, a novel model for 3D point cloud will be developed.

The main disadvantage of the attention approach is high GPU memory consumption. Making things worse, modern point clouds have large numbers (thousands to millions) of points. These facts lay the ground for our requirement of computational resources.

### References
1. C. R. Qi, L. Yi, H. Su, and L. J. Guibas.  Pointnet++:  Deephierarchical feature learning on point sets in a metric space.arXiv preprint arXiv:1706.02413, 2017
2. Guerrero,  Y.  Kleiman,  M.  Ovsjanikov,  and  N.  J.  Mitra.PCPNet:   Learning  local  shape  properties  from  raw  pointclouds.Computer Graphics Forum, 37(2):75–85, 2018
3. L. Yu, X. Li, C.-W. Fu, D. Cohen-Or, and P.-A. Heng.  Pu-net: Point cloud upsampling network.  InProceedings of theIEEE Conference on Computer Vision and Pattern Recogni-tion, pages 2790–2799, 2018
4. Saining Xie, Sainan Liu, Zeyu Chen, Zhuowen Tu; The IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2018, pp. 4606-4615