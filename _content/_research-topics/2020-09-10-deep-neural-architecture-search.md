---
layout: post
date: 2020-09-10
title: Deep Neural Architecture Search
inline: false
---

### Project Description
Deep Neural Networks (DNN) are one of the most powerful tools in modern machine learning. Deep learning-based models have large number of hyperparameters: there are many architectures, activation functions, we can vary sizes of filters and number of neurons in each layer. The selection of hyper-parameters still takes most of their time nowadays. Thus there is a big need for research in the new field of Automated Machine Learning, which covers Automated Hyper-parameter Optimization (HPO) and Neural Architecture Search (NAS) in particular, to reduce the amount of technical work in Machine Learning, and even improve current state of the art results if applied in a right way. Еhere have emerged quite a lot of different NAS methods and models, however, their performance also heavily depends on the task and the dataset. Thus, in order to develop a solid and efficient approach to HPO we should:
make a state-of-the-art review of best practices and compare them under different conditions in order to identify the most promising frameworks and conditions under which they provide the best results,
combine best practices in order to cover the main applied conditions,
develop in-house approaches to address insufficiencies of the existing approaches.

E.g. preliminary analysis of SOTA results indicates that
in case we have capabilities to estimate objectives with multiple fidelities, BOHB [1] could be an appropriate HPO framework
in a single fidelity case which method to select depends on a type of configuration space, namely if all hyper-parameters are real-valued and budget for objective evaluation is very limited (a few dozen evaluations), then Gaussian process-based Bayesian optimization framework, such as as Spearmint [2], is a good choice if we have large and conditional configuration spaces then it is better to use the random forest-based framework SMAC [3] or TPE [4], due to their proven strong performance on such tasks [5]

Another idea of a promising approach could be to make embeddings of DNN configuration spaces, defined in the form of graphs, on small datasets for classification, and use these embeddings as an input to the so-called sequential model-based optimization [6] or use Gaussian process-based model with sting kernel and without embeddings for such HPO [7].

As a result, we need to develop a new capability for HPO, based on this best practices, capable to work with neural architecture search (NAS) under different conditions.

### Key References
[1] Falkner, S., Klein, A., Hutter, F.: BOHB: Robust and Efficient Hyper-parameter Optimization at Scale. In: Dyand Krause [27], pp. 1437-1446
[2] Snoek, J., Larochelle, H., Adams, R.: Practical Bayesian optimization of machine learning algorithms. In: Bartlett et al. [9], pp. 2960-2968
[3] Hutter, F., Hoos, H., Leyton-Brown, K.: Sequential model-based optimization for general algorithm configuration. In: Coello, C. (ed.) Proceedings of the Fifth International Conference on Learning and IntelligentOptimization (LION’11). Lecture Notes in Computer Science, vol. 6683, pp. 507-523. Springer (2011)
[4] Bergstra, J., Yamins, D., Cox, D.: Making a science of model search: Hyperparameter optimization in hundreds of dimensions for vision architectures. In: Dasgupta and McAllester [23], pp. 115-123
[5] Eggensperger, K., Feurer, M., Hutter, F., Bergstra, J., Snoek, J., Hoos, H., Leyton-Brown, K.: Towards an empirical foundation for assessing Bayesian optimization of hyperparameters. In: NIPS Workshop on BayesianOptimization in Theory and Practice (BayesOpt’13) (2013)
[6] Frank HutterHolger H. HoosKevin Leyton-Brown. Sequential Model-Based Optimization for GeneralAlgorithm Configuration. LION 2011: Learning and Intelligent Optimization pp 507-523
[7] String Gaussian Process Kernels by Yves-Laurent Kom Samo, Stephen Roberts, https://arxiv.org/abs/1506.02239