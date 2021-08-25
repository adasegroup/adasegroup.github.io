---
layout: post
date: 2020-09-10
title: Deep Convolutional Networks for fMRI-based Depression Classification
inline: false
---

### Project Description
Depression is believed to strongly affect the functional activity of the brain [1]. Thus, the analysis of the neuronal network functioning data, such as fMRI, could provide valuable information for identification of biomarkers of this disease and help to improve the accuracy of diagnosis and the quality of treatment. 

As the resolution and acquisition rates of modern medical scanners rise, the need to automatically capture complex spatiotemporal patterns in large imaging arrays suggests using automated approaches to pattern recognition in volumetric images, such as training classification models using deep learning. However, with typically scarce training data, the choice of a particular neural network architecture remains an unresolved issue. 

The common approach for the fMRI data processing is the functional connectivity analysis; accessing functional connectivity analysis, the BOLD signal correlations between brain regions implies defined clinical meaning. In other hand, this approach is constrained to particular brain atlas and segmentation method. Deep learning approach for fMRI data analysis can be applied directly to the neuroimaging data without the dimensionality reduction and computation of features according to defined brain atlas.

In the study, we evaluate off-the-shelf building blocks of deep voxelwise neural architectures Recurrent-Convolutional Neural Network [2,3] with the goal of learning robust decision rules in computational psychiatry. To this end, we carry out a series of computational experiments, aiming at the recognition of depression on functional MRI data.

### Tasks within the project
- Test different batch size of fMRI sequence for LSTM input (play with the architecture to improve the depression classification accuracy);
- Interpretation of the model results (retrieve heat map from CNN’s);
- Compare the model performance to LSTM networks on 2D time series for each brain region;

### References
1. X. Wang, Y. Ren, and W. Zhang, “Depression disorder classification of fmri data using sparse low-rank functional brain network and graph-based features,” Computational and mathematical methods in medicine, vol. 2017, 2017
2. P. Bashivan, I. Rish, M. Yeasin, and N. Codella, “Learning representations from eeg with deep recurrent-convolutional neural networks,” arXiv preprint arXiv:1511.06448, 2015.
3. M. Pominova, A. Artemov, M. Sharaev, E. Kondrateva, A. Cichocki, E. Burnaev, A. Bernstein. Voxelwise 3D Convolutional and Recurrent Neural Networks for Epilepsy and Depression Diagnostics from Structural and Functional MRI Data. Proc. of IEEE International Conference on Data Mining Workshops (ICDMW), p. 299-307, 2018