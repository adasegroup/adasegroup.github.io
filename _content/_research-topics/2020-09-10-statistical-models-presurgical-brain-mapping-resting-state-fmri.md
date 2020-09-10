---
layout: post
date: 2020-09-10
title: Statistical Models for Presurgical brain mapping based on resting-state fMRI
inline: false
---

### Project Description
In neurosurgery, the precise localization of brain functional (visual, motor, language and etc.) areas contributes to both maximum resection and minimum functional injury, as well as prolonging survival time and improving quality of life. Functional imaging-based pre-surgical mapping provides essential information for intra-operative localization of eloquent regions [1]. Although task-based functional magnetic resonance imaging (fMRI) has been widely applied for preoperative language mapping, there still remain concerns of instability and variability. Both sensitivity and specificity were unsatisfactory according to a systematic review suggesting that task-based fMRI is not yet ready for prime-time guidance of neurosurgical operations. 

Moreover, it is inconvenient for both doctors (difficult-to-implement and complicated experimental design) and patients (time-consuming and highly demanding) [2]. For patients with language deficits, such as aphasia and alexia, or cognitive deficits, who need extensive preoperative planning, poor task performance may cause failure in language or motor mapping.

Significant evidence has suggested that spontaneous brain activity observed in resting-state fMRI (rs-fMRI) without any explicit task performance can reveal various primary and high-level cognitive systems. Brain areas belonging to the same functional system or network share similar spontaneous blood oxygenation level-dependent fluctuations (that is, functional connectivity, or FC), which differ from those of other systems [3]. 

The purpose of current research project (performed with medical partner - N.N. Burdenko National Scientific and Practical Center for Neurosurgery) is to build a highly automated and precise system for preoperative functional brain areas localization based on rs-fMRI. Moreover, during the operation, new data is obtained: “gold-standard” in surgical mapping – intracranial EcoG data as well as brain anatomy is changed due to tissue resection. This means that the preoperative model (or localization prediction) is not accurate anymore. The final goal of the project is to incorporate surgical information into the model and perform online model tuning.


### Tasks
Explore how different data preprocessing pipelines influence mapping accuracy
Study methods of blind source separation (ICA, NMF, SCA etc) to separate fMRI data into functional brain networks
Study different versions of spatial-constrained ICA with masks for both tumor and mean healthy controls functional brain areas
Explore the possibility of transfer learning from big amount (thousands) of healthy people fMRI data with known functional areas to patients with brain lesions
Incorporate true functional areas locations (found during the operation) into the predictive model

### References
1. Qiu T. et al. Localizing hand motor area using resting-state fMRI: validated with direct cortical stimulation // Acta Neurochir. (Wien). 2014. Vol. 156, № 12. P. 2295–2302.
2. Hart M.G., Price S.J., Suckling J. Functional connectivity networks for preoperative brainmapping in neurosurgery // J. Neurosurg. 2017. Vol. 126, № 6. P. 1941–1950.
3. Shehzad Z. et al. The resting brain: Unconstrained yet reliable // Cereb. Cortex. 2009. Vol. 19, № 10. P. 2209–2229