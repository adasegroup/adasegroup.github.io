---
layout: post
date: 2020-09-10
title: Bayesian approach to Continual Learning of Generative Models
inline: false
---

### Project Description:
The significant difference between offline and incremental learning lies in the availability of training dataset. The offline setting for both discriminative and generative models assumes that data comes as i.i.d. from the fixed empirical training dataset. In contrast, incremental learning assumes that distribution of the training dataset changes over time, for example data from new class arrive. Notably, the real-world applications of the deep models should be considered as the incremental learning, as distribution of the data could change drastically over time and we could not keep the whole dataset for computational or privacy issues.

Despite the importance of unsupervised learning, the incremental learning setting is mainly considered for discriminative models. Several directions to overcome catastrophic forgetting were suggested such as weight regularization and dynamic architecture. E.g. weight regularization approach such as the Elastic Weight Consolidation (EWC) (Kirkpatrick et al., 2017) add to the objective quadratic regularization which form the trust-region for the weights around the optimum of the previous task, while the model architecture remains the same. In contrast, other approach is based on the incrementally updating architectures of the nets, increasing its capacity and sharing feature extractor across tasks at the same time (Rusu et al., 2016; Li & Hoiem, 2018). 

In our project we consider continual learning of generative models. The notional dissimilarity makes it impossible to directly apply methods for discriminative models to generative ones. Seff et al. (2017) consider EWC- augmented loss to the generator for continual learning with generative adversarial nets (GANs). However, the approach was successfully applied only to the class-conditional GANs. Nguyen et al. (2017) proposed a dynamic architecture for VAEs, where the specific head is used for each task. Another class of works consider using generative models to generate historical data and overcome catastrophic forgetting of classifier learning problem (Wu et al., 2018).

We propose a novel incremental learning approach for the VAE generative model with the static architecture. Suggested model incorporates knowledge from the previous task by prior updating, which connects our work with loss- augmentation approach and learning inducing points for sparse gaussian process (Titsias, 2009). 

**The workplan is**
1. make overview of existing literature, 
2. develop some recent competing approaches, 
3. develop an approach for modeling of VAE based on incremental update of the prior distribution to model a coreset of latent points for storing information about previous batches of data.

### References
1. Kirkpatrick, J., Pascanu, R., Rabinowitz, N., Veness, J., Desjardins, G., Rusu, A. A., Milan, K., Quan, J., Ramalho, T., Grabska-Barwinska, A., et al. Overcoming catastrophic forgetting in neural networks. Proceedings of the national academy of sciences, 114(13):3521–3526, 2017.
2. Rusu, A. A., Rabinowitz, N. C., Desjardins, G., Soyer, H., Kirkpatrick, J., Kavukcuoglu, K., Pascanu, R., and Hadsell, R. Progressive neural networks. arXiv preprint arXiv:1606.04671, 2016.
3. Li, Z. and Hoiem, D. Learning without forgetting. IEEE transactions on pattern analysis and machine intelligence, 40(12):2935–2947, 2018.
4. Seff, A., Beatson, A., Suo, D., and Liu, H. Continual learning in generative adversarial nets. arXiv preprint arXiv:1705.08395, 2017.
5. Nguyen, C. V., Li, Y., Bui, T. D., and Turner, R. E. Variational continual learning. arXiv preprint arXiv:1710.10628, 2017.
6. Wu, Y., Chen, Y., Wang, L., Ye, Y., Liu, Z., Guo, Y., Zhang, Z., and Fu, Y. Incremental classifier learning with generative adversarial networks. arXiv preprint arXiv:1802.00853, 2018.
7. Titsias, M. Variational learning of inducing variables in sparse gaussian processes. In Artificial Intelligence and Statistics, pp. 567–574, 2009.