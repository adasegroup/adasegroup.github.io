---
layout: post
date: 2020-09-10
title: Geometric View On Deep Generative Networks
inline: false
---

### Project Description
Modern generative learning is mainly associated with Generative Adversarial Networks (GANs). Training such networks is always hard due to the minimax nature of the optimization objective. Besides tons of open questions related to training (optimization) of such networks, a lot of questions about the approximation and geometrical properties of generative networks are still unanswered. Which distributions can GANs approximate? How can GANs approximate discontinuous mappings? How close is the generated distribution to real? All these questions among others are possessed on the edge of modern machine learning research and require answers.

Current research aims at introducing new methods from generative learning, which comes from related fields such as computational optimal transport theory or topological data analysis. In this project, students will be asked to get into these modern methods and conduct research & computational experiments in order to completely/partially solve existing problems/answers related to:

Optimal Transport-Based generative models. Many such models exist, they are efficiently applied to latent space mass transport, domain adaptation, etc. Can such models be applied to other problems, such as image-to-image style transfer, denoising, superresolution, etc.?
Topological studies of distributions. According to (usual in machine learning) manifold hypothesis, data (especially images) is located at some manifold, the dimension of which is lower than the dimension of the data space. For which datasets this manifold is connected/disjoint? What is the topological structure of the data support manifold?
Generative Optimal Transport for modeling discontinuous mappings. Recently developed ideas show that optimal transport can be used to model discontinuous mapping. This phenomena requires proper experimental & theoretical studies.

The project requires students to have a basic understanding of generative methods, in particular, Generative Adversarial Networks (GANs).

### References
[1] Korotin, A., Egiazarian, V., Asadulaev, A., & Burnaev, E. (2019). Wasserstein-2 Generative Networks. arXiv preprint arXiv:1909.13082.
[2] Lei, N., Su, K., Cui, L., Yau, S. T., & Gu, D. X. (2017). A geometric view of optimal transportation and generative model. arXiv preprint arXiv:1710.05488.
[3] Courty, N., Flamary, R., Tuia, D., & Rakotomamonjy, A. (2016). Optimal transport for domain adaptation. IEEE transactions on pattern analysis and machine intelligence, 39(9), 1853-1865.
[4] Wasserman, L. (2018). Topological data analysis. Annual Review of Statistics and Its Application, 5, 501-532.