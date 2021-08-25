---
layout: post
date: 2020-09-10
title: In search for an optimal deep network for MRI processing
inline: false
---

### Project Description
Neuroimaging datasets, which consist of structural and functional MRI data, are increasingly being treated as generic 3D/4D voxel-based data collections and processed by means of deep neural networks. A natural question when working with deep learning models is how to design the most suitable neural architecture. In this direction, neural architecture search (or NAS for short) has been extensively studied to find optimal convolutional architectures for solving computer vision-related problems. However, little has been done regarding NAS for deep learning-based MRI/fMRI analysis. In the meantime, this search seems promising as conventional convolutional models are widely believed to be not fully suitable for processing MRI data.

For large-scale deep models, the space of possible architectures is extremely high in volume and complexity. This means that the process of choosing promising architectures has to be designed in such a way as to minimize the total computational budget. Adaptive design of experiments (DoE) methods (such as bayesian optimization and gaussian process-based DoE) offer a great deal of flexibility for performing this search. Thus, an optimal NAS procedure should be considered within the bayesian optimization framework.

Another challenge is that, even when the NAS is conducted according the optimal search procedure, the cost of training a single deep model still remains extremely high. Thus, NAS requires effective optimization and parallelization procedures that would effectively utilize a multi-machine cluster.

The goal of this project is to implement an efficient and scalable deep architecture search methodology with an application to the analysis of MRI and fMRI data. The project is organized in two branches of research into efficient deep architectures for neuroimaging analysis using large-scale experimental investigations:

- Massively parallel data processing on large clusters, including construction of efficient algorithms and their implementation in high-performance software, with the goal of building efficient large-scale optimization procedures for multi-machine clusters with heterogenous hardware, e.g., CPU/GPU. 
- Neural architecture search, which requires students to implement a bayesian optimization-based neural architecture search over the space of architectures. In this project, students are required to study the bayesian optimization framework, design the search space of possible architectures, and implement a bayesian optimization-based NAS framework. 
- Verification of the created deep architectures against a variety of MRI processing benchmarks, where students will design and implement scalable deep learning algorithms for real-world 3D/4D volumetric data and benchmark them against a variety of datasets on MRI processing. 

### References:
1. Mikami, Hiroaki, et al. "ImageNet/ResNet-50 Training in 224 Seconds." arXiv preprint arXiv:1811.05233 (2018).
2. Jia, Xianyan, et al. "Highly scalable deep learning training system with mixed-precision: Training imagenet in four minutes." arXiv preprint arXiv:1807.11205 (2018).
3. Liu, Hanxiao, et al. "Hierarchical representations for efficient architecture search." arXiv preprint arXiv:1711.00436 (2017).
4. Tan, Mingxing, et al. "Mnasnet: Platform-aware neural architecture search for mobile." arXiv preprint arXiv:1807.11626 (2018).
5. Liu, Chenxi, et al. "Progressive neural architecture search." arXiv preprint arXiv:1712.00559 (2017).