---
layout: post
date: 2020-09-10
title: Deep Graph Networks and embeddings for classification and analysis of functional MRI
inline: false
---

fMRI sequence analysis is an important tool for extraction of reliable biomarkers for detection of various neurological diseases. In order to perform functional connectivity analysis fMRI sequences are preprocessed in SPM toolbox, then the denoising stage is performed through several methods to be consequently compared: the default noise spectral filtering in Nilearn toolbox and manual ICA [1] denoising in FSL Melodic toolbox. 

Further, the functional connectivity matrices for 117 brain regions are calculated in Nilearn using the previously denoised data; the matrices are sparsed under different correlation thresholds to construct the functional brain network graph [2], which charaterises relations between different regions of the brain. 

The common graph characteristics (clustering coefficient, betweenness centrality, etc.) are usually extracted and used as rather reliable features for fMRI classification, resulting in a vector of 587 features for each person. 

Another approach to fMRI classification is to represent the connectivity graph not with local features but as entire object, using so called graphs embedding approaches [3]. Using vectors, representing such embeddings, we can compute similarity between graphs and define graph kernel for measuring the similarity between connectivity networks of different people.  

In this work we propose to use kernel classification based on Anonymous Walk Embedding [3] and compare it with classification based on Weisfeiler-Lehman kernel.

Fig.1 Visualization of fMRI patterns used for the classification task. A correlation matrix, from left to right: raw, binarized (threshold = 0.15), binarized (threshold = 0.4); functionally connected brain areas according to the elements of the correlation matrix in A.
For the depression classification common feature-based methods shows a good baseline, but graph kernel methods improved the score. As considered, graph-based methods have good potential in the diagnostics of depression and epilepsy and further research on this topic is of great interest.

Fig.2 The most by score important features for depression classification from models feature-based methods: Hippocampus Left, Thalamus Left, Putamen Left, Angular gyrus Right, Frontal gyrus Right (Superior), Paracentral lobule Left, Postcentral gyrus Right, Precentral gyrus Left, Supra Marginal Gyrus Left, Temporal Pole Left. (Visualization in Brainstorm)

### Tasks within the project
Compare different methods of functional connectivity matrix composition (research time series retrieval with SVD decomposition, time series spectral analysis);
Compare classification accuracy on matrices retrieved with adaptive clustering (CanICA) or ROI’s defined with brain atlas;
Build graph kernels (Random/Anonymous walks) and compare the classification performance to baseline (SVM linear/rbf kernels);

### References
[1] Zhong Y., Zheng G., Liu Y., Lu G. Independent component analysis of instantaneous power-based fMRI. Computational and Mathematical Methods in Medicine, 2014
[2] Smith S. M., Vidaurre D., Beckmann C. F., et al. Functional connectomics from resting-state fMRI. Trends in Cognitive Sciences, 2013
[3] S. Ivanov, E. Burnaev. Anonymous Walk Embeddings. ICML, 2018