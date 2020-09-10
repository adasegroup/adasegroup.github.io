---
layout: post
date: 2020-09-10
title: Data Reduction for Deep Networks
inline: false
---

### Project Description
AutoML is widely developed nowadays and shows impressive results on Compute Vision tasks. However, AutoML approaches usually require massive computation resources regarding the search space definition and the size of datasets. The most recent published papers focus on reducing the search space, e.g. one-shot based approaches, single-path based approaches and distribution-based approaches. However, there is rare research on legitimately reducing the datasets for the architecture search. For image classification tasks, a universal trick is searching the architecture on Cifar-10 dataset and then transferring the result to ImageNet dataset. The hypothesis of this trick is based on the similarity of the data distributions between the small and the large datasets. However, it is very difficult to make the distribution of the business dataset close to the open datasets. Using such Cifar-10 dataset for architecture search can cause the generalization problems. It is difficult to guarantee that the best architecture searched on Cifar-10 is also the best one on the target business dataset. Thus, the major task of this project is to design a novel data reduction approach, which can significantly reduce the size of the give datasets to simplify the searching complexity of architecture search approaches. In this task, it is not necessary to keep the performance of the given models trained on the reduced and the original datasets, but the performance ranks of the models both trained on the reduced and the original datasets should be the same.


A possible line of research, related to various probabilistic criteria for optimal design of experiments (Burnaev, et al. 2015), quantifies uncertainty both using probabilistic Bayesian approaches and geometrical considerations. In particular, for classification tasks we should use points which are the closest to the decision boundary. Usually these are the points which have the highest uncertainty. Uncertainty can be measured in different ways, e.g. based on the distance from the hyperplane, or using the label probability, provided by a classifier, constructed on the previous iteration of the algorithm. There are many things to do in this direction:

Consider different uncertainty sampling strategies (based on least confidence principle, margin sampling principle, maximum entropy principle, maximum of an average KL-divergence principle, expected model change and error reduction principles, etc.). Perform comparison of these sampling strategies and develop an optimal combination that can account for different types of effects
When doing sampling we should maintain unbiased sampling so that the labeled points are representative of the underlying distribution. For this we are going to exploit cluster structure in data via computationally efficient decision tree approach and Bayesian coresets selection approaches.
Evaluating classification accuracy on a subset of the initial dataset provides noisy estimates. Therefore, we can apply our developed framework for variable-fidelity and noisy classification (Klyuchnikov, Burnaev, 2019) to assess for that additional uncertainty when doing classification predictions.
Integrate subsampling criteria based on model prediction accuracy (see point 1 above) with criteria, maintaining accurate representation of the underlying distribution in a unified design evaluation protocols for dataset subsampling.
Compare developed methods with some existing strategies, e.g. which uses bandits and confidence prediction to allocate the best possible data subset and predictive model, see (Silu Huang, et al., 2019; Ashish Sabharwal, et al., 2016; Cenk Baykal, et al. 2019; Cody Coleman, 2018).

### References
E. Burnaev, et al. Adaptive design of experiments based on gaussian processes, 2015
Nikita Klyuchnikov, Evgeny Burnaev. Gaussian Process Classification for Variable Fidelity Data, 2019
Silu Huang, et al. Efficient Identification of Approximate Best Configuration of Training in Large Datasets, 2019
Ashish Sabharwal, et al. Selecting Near-Optimal Learners via Incremental Data Allocation, 2016
Data-Dependent Coresets for Compressing Neural Networks with Applications to Generalization Bounds. Cenk Baykal, Lucas Liebenwein, Igor Gilitschenski, Dan Feldman, Daniela Rus. https://arxiv.org/abs/1804.05345
Selection Via Proxy: Efficient Data Selection For Deep Learning. Cody Coleman, 2018 https://arxiv.org/abs/1906.11829