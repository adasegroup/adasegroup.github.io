---
layout: post
date: 2020-09-10
title: Probabilistic Inference for MRI analysis
inline: false
---

### Project Description
Automatic analysis of 3D magnetic resonance images (MRI) is very helpful for the diagnosis and treatment planning of the disease. Incorporating prior knowledge about organ shape and location can be very useful in such high dimensional and noisy data. However, there is a lack of using modern bayesian methods in this field:  one can observe either pure optimization approaches or not scalable (and not deep) MCMC methods. Our goal to investigates problems, where the combination of deep learning and scalable Bayesian approaches could be fruitful for MRI analysis.

### 3D-conv-nets for segmentation learning with Deep Prior
Automatic segmentation of 3D MRI images can save physicians time and provide an accurate reproducible solution for further tumour analysis and monitoring. Recently, deep learning based segmentation techniques with convolutional neural networks (CNN) are able to learn from examples and demonstrate state-of-the-art segmentation accuracy. However, training of such networks is challenging task, due too both: high dimensionality  and relatively small size of datasets. Moreover, in practice one should fine-tune net to the dataset from particular tomograph. Inspiring with the several works om implicit priors, our goal to learn priors over the manifold (probably) of 3D-filters. 

Particularly, we should investigate:
- Does learning such implicit prior from different organs helpful? Is there any graph structure in such “transfer learning”?
- Does learning such implicit prior from different modalities of the one organ is helpful?

### Shape-Prior Restriction for 3D segmentation learning 
We can note that most successful approaches for MRI segmentation using not only 3D-Unet but also complex handcrafted regularization with autoencoder on the shape of masks. Hence, we can incorporate such regularization in probabilistic form and obtain end-to-end training with automatic regularization. Potential, it should lead to better performance. 

### References 
1. Oktay, O., Ferrante, E., Kamnitsas, K., Heinrich, M., Bai, W., Caballero, J., ... & Kainz, B. (2018). Anatomically constrained neural networks (ACNNs): application to cardiac image enhancement and segmentation. IEEE transactions on medical imaging, 37(2), 384-395.
2. Kohl, S. A., Romera-Paredes, B., Meyer, C., De Fauw, J., Ledsam, J. R., Maier-Hein, K. H., ... & Ronneberger, O. (2018). A Probabilistic U-Net for Segmentation of Ambiguous Images. arXiv preprint arXiv:1806.05034.
3. Atanov, A., Ashukha, A., Struminsky, K., Vetrov, D., & Welling, M. (2018). The Deep Weight Prior. Modeling a prior distribution for CNNs using generative models. arXiv preprint arXiv:1810.06943.
4. Yin, M., & Zhou, M. (2018). Semi-Implicit Variational Inference. arXiv preprint arXiv:1805.11183.