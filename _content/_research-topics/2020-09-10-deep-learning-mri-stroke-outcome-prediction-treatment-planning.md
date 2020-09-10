---
layout: post
date: 2020-09-10
title: Deep Learning for MRI-based stroke outcome prediction and treatment planning
inline: false
---

### Project Description
The stagnation or complication of post-stroke aphasia could be associated with an unfavorable prognosis of the disease. Cognitive rehabilitation including intensive speech therapy is used in order to increase the effectiveness of restorative treatment. However, the question of the therapeutic effectiveness of cognitive rehabilitation courses in patients with different clinical forms and the severity of aphasia remains controversial. Then the right aphasia diagnostics/ prognosis became crucial for effective treatment planning.

The MRI imagery-based prediction of the stroke outcome could be done by the analysis of the lesion fingerprint, changes in structural connectivity and the analysis of compensatory changes in the neural networks of fMRI study.

The goal of the presented study is the structural MRI (T1/T2/Flair) analysis for the purpose of assessment of the severity of the current state, prediction of stroke outcome and of therapeutic effectiveness of complex restorative treatment.


Fig.1 VoxCNN architecture
In the preliminary research the Vox Convolutional neural network [1] was used to solve both classification and regression tasks. The network exploits 3D convolutional layers, followed by ReLU activations and max pooling layers for gradual dimensionality reduction. All T1 MRI were skull stripped in Brainsuite toolbox, centered and aligned. The calculations were performed in python with extensive use of PyTorch framework.

Fig.2 Post-stroke lesion mapping
We observe, that results are rather high, which supports the hypothesis that the sMRI-based deep learning models can be considered as relevant predictive tools for the diagnosis support and stroke outcome prognosis.  The plan of the further research includes the use of other modalities (T2/FLAIR) for prediction as well as their ensembles. 

### Tasks within the project:
1. Compare the CNN’s performance across different MRI imagery modalities (T1/T2/FLAIR);
2. Build classifier ensemble accounting MRI data with different modalities (fusion model);
3. Add layers with clinical data to improve the model performance;

### References:
[1] M. Pominova, A. Artemov, M. Sharaev, E. Kondrateva, A. Cichocki, E. Burnaev, A. Bernstein. Voxelwise 3D Convolutional and Recurrent Neural Networks for Epilepsy and Depression Diagnostics from Structural and Functional MRI Data. Proc. of IEEE International Conference on Data Mining Workshops (ICDMW), p. 299-307, 2018
