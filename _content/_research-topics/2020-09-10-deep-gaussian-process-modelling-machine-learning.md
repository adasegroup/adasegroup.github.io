---
layout: post
date: 2020-09-10
title: Deep Gaussian Process modelling for Machine Learning applications
inline: false
---

### Project Description
One of the most active directions in machine learning has been the development of practical Bayesian methods for challenging learning problems. One of the most important Bayesian machine learning approaches based on a particularly effective method for placing a prior distribution over the space of functions, uses Gaussian Processes. GPs have received increased attention in the machine-learning community over the past decade.

Unlike classical learning algorithm, this Bayesian algorithm does not attempt to identify "best-fit" models of the data (or similarly, makes "best guess" predictions for new test inputs). Instead, it computes a posterior distribution over models (or similarly, compute posterior predictive distributions for new test inputs). These distributions provide a useful way to quantify our uncertainty in model estimates, and to exploit our knowledge of this uncertainty in order to make more robust predictions on new test points.

Gaussian processes (GPs) provide a principled, practical, probabilistic approach to learning in kernel machines. However, the main disadvantage of kernel techniques is high computational complexity, which grows cubically with the size of the data. Kernel methods are efficient for problems with small and medium sample sizes (sample sizes up to several thousands). Modern technologies allow collecting enormous amount of data that should be processed and analysed, an example of such database is a set of images ImageNet. Thus, the challenge is to scale GPs-based models and elaborate efficient methods for learning of their deep counterparts (so-called Deep GPs).

In the framework of this project we can consider different problems, addressing issues about how to select inducing points for efficient kernel matrix approximation, which basis can provide the most efficient approximation of the kernel function, how to scale learning of Deep GPs based on variational bound, etc.

Another important direction of the research is to generalize existing models to non-standard situations to perform transfer learning, variable fidelity modelling, learning with privileged information, incorporate inside the kernel information about symmetries in data, etc.
Students, who want to participate in a mathematical research, will be able to find a vast field of activities, theoretically studying properties of the proposed procedures and proving strict mathematical statements.



### Key References
C.E. Rasmussen, C. Williams. Gaussian Processes for Machine Learning. The MIT Press, 2006.
E. Burnaev, M. Panov, A. Zaytsev. Regression on the Basis of Nonstationary Gaussian Processes with Bayesian Regularization, Journal of Communications Technology and Electronics, 2016, Vol. 61, No. 6, pp. 661–671.
A. Zaytsev, E. Burnaev, V. Spokoiny. Properties of the Bayesian Parameter Estimation of a Regression Based on Gaussian Processes // Journal of Mathematical Sciences, Volume 203, Issue 6, pp. 789-798, 15 Nov 2014.
E. Burnaev, A. Zaytsev, V. Spokoiny. The Bernstein-von Mises theorem for regression based on Gaussian processes // Russ. Math. Surv. 68, No. 5, 954-956 (2013)
A. Zaitsev, E. Burnaev, V. Spokoiny.  Properties of the posterior distribution of a regression model based on Gaussian random fields // Automation and Remote Control, Volume 74, Issue 10, pp. 1645-1655, 12 Oct 2013.
E. Burnaev, V. Vovk. Efficiency of conformalized ridge regression. JMLR W&CP 35:605-622, 2014
Burnaev E., Nazarov I. “Conformalized Kernel Ridge Regression,” Proceedings of the IEEE International Conference on Machine Learning and Applications, IEEE Computer Society, USA, 45-52 pp., 2016
E. Burnaev, M. Belyaev, E. Kapushev. Computationally efficient algorithm for Gaussian Processes based regression in case of structured samples // Computational Mathematics and Mathematical Physics, 2016, Vol. 56, No. 4, pp. 499–513, 2016.
M. Belyaev, E. Burnaev, and Y. Kapushev. Gaussian process regression for structured data sets. In Lecture Notes in Artificial Intelligence. A. Gammerman et al. (Eds.), volume 9047, pages 106–115, London, UK, 2015. Springer.
E. Burnaev and M. Panov. Adaptive design of experiments based on gaussian processes. In Lecture Notes in Artificial Intelligence. A. Gammerman et al. (Eds.), volume 9047, pages 116–126, London, UK, 2015. Springer.
E. Burnaev, A. Zaytsev. Surrogate modeling of mutlifidelity data for large samples. Journal of Communications Technology and Electronics, 2015, Vol. 60, No. 12, pp. 1348–1355.