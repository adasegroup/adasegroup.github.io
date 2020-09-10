---
layout: post
date: 2020-09-10
title: Model selection for deep kernel density estimation
inline: false
---

### Project Description
Density estimation is one of the most important problems in machine learning and statistics. What most of the machine learning methods do (both supervised and unsupervised) is trying to learn data distribution. Accurate and reliable estimate of the density of the data set will benefit all the predictive models and allow to achieve superior accuracy. The goal of the project is to develop density estimation technique which is able to capture complex structured distributions.

Classical approaches to kernel density estimation can require extremely large sample sizes to provide reasonable results especially in case of complex structured data sets. The problem is that standard kernels are not to flexible enough to learn complex multi-modal distributions. One promising approach to overcome such difficulties is kernel exponential family. Using sufficiently powerful kernel we can approximate rich class of densities. Obvious choice for kernel function is to parameterize it with deep neural network [1, 4].

The normalizing constant for kernel exponential family is intractable, so instead of maximizing likelihood w.r.t. model parameters it is proposed to use score matching [1]. This introduces model selection challenge – how to choose regularization parameters in this case? 

### Steps in this research direction
Improve scalability by applying RFF, QBF [2] or SKI [3] like approach instead of Nystroem approximation.
Check whether maximization of likelihood results in better models than maximization of score matching. Use some straightforward approximation to likelihood (e.g. MCMC)
Develop computationally efficient approximation to likelihood.

### References 
[1] Wenliang, L., Sutherland, D., Strathmann, H. and Gretton, A., 2018. Learning deep kernels for exponential family densities. arXiv preprint arXiv:1811.08357.
[2] Munkhoeva, M., Kapushev, Y., Burnaev, E. and Oseledets, I., 2018. Quadrature-based features for kernel approximation. arXiv preprint arXiv:1802.03832.
[3] Wilson, A. and Nickisch, H., 2015, June. Kernel interpolation for scalable structured Gaussian processes (KISS-GP). In International Conference on Machine Learning (pp. 1775-1784).
[4] Wilson, A.G., Hu, Z., Salakhutdinov, R.R. and Xing, E.P., 2016. Stochastic variational deep kernel learning. In Advances in Neural Information Processing Systems (pp. 2586-2594)
