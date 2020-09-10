---
layout: post
date: 2020-09-10
title: Deep Learning for Range-Image Super-Resolution
inline: false
---

### Project Description
Depth information of the scene plays an essential role in many applications from autonomous driving and robotics to augmented reality. However, active depth sensors cannot capture fine details of the scene. For instance, LIDAR sensors only provide sparse range-map, limiting the performance of perception algorithms; RGB-D cameras deliver low-resolution range-map, disabling precise geometry reconstruction. 

To overcome these limitations the problem of super-resolution is considered. Most of the existing works on super-resolution of range-images evaluate the results as regular 2d images disregarding their 3d nature. Non-smoothness of the recovered surfaces and fuzziness of contours are serious overlooked weaknesses of the existing methods. In applications like augmented reality, accurate reconstruction of 3d surface is explicitly required. In case of autonomous driving, range data representing a surface of low quality may implicitly limit the performance on a downstream task, e.g. confusing geometric feature detector. 

The existing methods that explicitly consider surface quality are based on time-consuming optimization techniques [1-3], and therefore are unsuitable for online setup. Recently, deep-learning models demonstrated their ability to convert expensive large-scale prior computations into efficient yet powerful representations. The goal of this work is to leverage the power of deep-learning to develop fast methods for range-image super-resolution, explicitly considering surface quality.

### Tasks
Review of SOTA deep architectures (DDRNet, MSG net, etc.) for one-short depth super-resolution and comparison of them
Experiments with SOTA deep architectures trained with perception losses
Realization of differentiable rendering losses
SOTA architectures enhanced with differentiable rendering losses

### References
Haefner et al. (2018) Fight ill-posedness with ill-posedness: Single-shot variational depth super-resolution from shading. In Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (pp. 164-174)
Maier et al. (2017) Intrinsic3d: High-quality 3D reconstruction by joint appearance and geometry optimization with spatially-varying lighting. In Proceedings of the IEEE International Conference on Computer Vision (Vol. 3)
Peng et al. (2017) Depth Super-Resolution Meets Uncalibrated Photometric Stereo. arXiv preprint arXiv:1708.00411
Menze et al. (2015) Joint 3d estimation of vehicles and scene flow. In ISPRS Workshop on Image Sequence Analysis (ISA) (Vol. 8)
Song et al. (2015) Sun rgb-d: A rgb-d scene understanding benchmark suite. In Proceedings of the IEEE conference on computer vision and pattern recognition (pp. 567-576)