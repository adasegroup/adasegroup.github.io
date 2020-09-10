---
layout: post
date: 2020-09-10
title: One-Class Classification for Anomaly Detection
inline: false
---

### Project Description
A number of important applied problems in engi- neering, finance and medicine can be formulated as a problem of anomaly detection based on a one-class classification. A classical approach to this problem is to describe a normal state using a one-class support vector machine. Then to detect anomalies we quantify a distance from a new observation to the constructed description of the normal class.

Support Vector Data Description is a classical algorithm for one-class classification, which has nice theoretical properties and a straightforward extension for a nonlinear case thanks to the kernel trick. However, still there are a lot of open questions:

How to perform model selection, e.g. to select the kernel width? Is it possible to perform efficient multiple kernel learning and use it for model selection?
How to incorporate partial information labels of anomalous/normal data, if it exists (semi-supervised learning scenario)?
Whether we can efficiently introduce privileged information about object features during the learning phase?
How to perform efficient incremental learning?

In the framework of this project we can consider different problems, addressing these questions, as well as solve applied problems about anomaly detection and failures prediction.

Students, who want to participate in a mathematical research, will be able to find a vast field of activities, theoretically studying properties of the proposed procedures and proving strict mathematical statements.

### Key References
Pechyony, D., Vapnik, V.: On the theory of learnining with privileged information. In Lafferty, J.D., Williams, C.K.I., Shawe-Taylor, J., Zemel, R.S., Culotta, A., eds.: Advances in Neural Information Processing Systems 23. Curran Associates, Inc. (2010) 1894–1902
Tax, D.M.J., Duin, R.P.W.: Support vector data description. Mach. Learn. 54(1) (January 2004) 45–66
Scho ̈lkopf, B., Williamson, R.C., Smola, A.J., Shawe-Taylor, J., Platt, J.C.: Support vector method for novelty detection. In Solla, S.A., Leen, T.K., Mu ̈ller, K., eds.: Advances in Neural Information Processing Systems 12. MIT Press (2000) 582–588
E. Burnaev, P. Erofeev, D. Smolyakov. Model Selection for Anomaly Detection // Proc. SPIE 9875, Eighth International Conference on Machine Vision, 987525 (December 8, 2015); 5 P. doi:10.1117/12.2228794; http://dx.doi.org/10.1117/12.2228794
Alexey Artemov, Evgeny Burnaev and Andrey Lokot. Nonparametric Decomposition of Quasi-periodic Time Series for Change-point Detection // Proc. SPIE 9875, Eighth International Conference on Machine Vision, 987520 (December 8, 2015); 5 P. doi:10.1117/12.2228370;http://dx.doi.org/10.1117/12.2228370
Artemov A., Burnaev E. Ensembles of Detectors for Online Detection of Transient Changes // Proc. SPIE 9875, Eighth International Conference on Machine Vision, 98751Z (December 8, 2015); 5 P. doi:10.1117/12.2228369; http://dx.doi.org/10.1117/12.2228369
E. Burnaev, P. Erofeev, A. Papanov. Influence of Resampling on Accuracy of Imbalanced Classification // Proc. SPIE9875, Eighth International Conference on Machine Vision, 987521 (December 8, 2015); 5 P. doi:10.1117/12.2228523; http://dx.doi.org/10.1117/12.2228523
S. Alestra, C. Bordry, C. Brand, E. Burnaev, P. Erofeev, A. Papanov and C. Silveira-Freixo. Application of Rare Event Anticipation Techniques to Aircraft Health Management // Advanced Materials Research, Vol. 1016 (2014), pp. 413-417.
Artemov A., Burnaev E. “Detecting Performance Degradation of Software-Intensive Systems in the Presence of Trends and Long-Range Dependence,” Proceedings of the IEEE International Conference on Data Mining 2016 Workshops Proceedings volume, IEEE Computer Society, USA, 29-36 pp., 2016.
Burnaev E., Smolyakov D. “One-Class SVM with Privileged Information and its Application to Malware Detection,” Proceedings of the IEEE International Conference on Data Mining 2016 Workshops Proceedings volume, IEEE Computer Society, USA, 273-280 pp., 2016
 
### Ratio of effort
Theoretical:        30%
Computational:   35%
Programming:     35%
