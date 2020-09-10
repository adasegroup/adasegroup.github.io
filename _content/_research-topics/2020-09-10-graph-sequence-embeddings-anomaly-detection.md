---
layout: post
date: 2020-09-10
title: Graph and Sequence Embeddings for Anomaly Detection
inline: false
---

### Project Description
In recommendation systems and decision support systems it is of vital importance to detect anomalies and outliers as they have a high relevance. For example, in case of fraudulent claims, which usually differ considerably from default claims, shall be detected. In clinical / medical decision support systems unusual cases which need special treatment should be filtered out.

Anomaly detection is concerned with identifying observations in new incoming test data, which diverge in a certain sense from the previously seen “normal” data. During recent years, practical importance and difficulty of this task spurred a vast volume of research which resulted in a large number of heterogeneous approaches and methods to its solution. For example:
Probabilistic approaches that rely on approximating the generative distribution of the observed data [2,3]
Metric-based anomaly detection [4]
Anomaly detection with predictive models is based on regression and classification methods which model the observed dataset [5]
Domain-based anomaly detection model the boundary of the relevant “normal” region [6]

The aim of this topic is to approach problems of detecting anomalous nodes in large-scale networks and detecting anomalous graphs, as well as sequences.
 
Tasks for first 2-4 months:
Literature review (related works, state-of-the-art, evaluation approaches)
Implement node2vec algorithm [8] and apply a density-based anomaly detection method (e.g. [7]) on a set of toy graphs
Compare with one-class-SVM [6] for graph laplacian kernel.
Propose a design of the method for detecting anomalies on graphs.
Implement any algorithm from seq2vec family (see [9] as an example) and construct anomaly detection rule on basis of the obtained embeddings.
 
### References:
Ivanov, S. and Burnaev, E., 2018. Anonymous Walk Embeddings. arXiv preprint arXiv:1805.11921.
V. Barnett and T. Lewis. Outliers in Statistical Data, volume 286. Wiley and Sons, 1994
D.W. Scott. Multivariate density estimation: theory, practice, and visualization. John Wiley & Sons, 2008.
A. Srivastava and B. Zane-Ulman. Discovering recurring anomalies in text reports regarding complex space systems. In Proceedings of the IEEE Aerospace Conference, pages 3853– 3862, 2005.
G. Williams, R. Baxter, H. He, S. Hawkins, and L. Gu. A comparative study of RNN for outlier detection in data mining. In the International Conference on Data Mining, pages 709–712, 2002.
B. Scholkopf, R. Williamson, A. Smola, J. Shawe-Taylor, J. Platt, et al. Support vector method for novelty detection. In NIPS, volume 12, pages 582–588. Citeseer, 1999.
M. Breunig, H. Kriegel, R. Ng, and J. Sander. LOF: identifying density-based local outliers. In ACM SIGMOD, volume 29, pages 93–104. ACM, 2000.
Grover, Aditya, and Jure Leskovec. "node2vec: Scalable feature learning for networks." In ACM SIGKDD, 2016.
Piotr Bojanowski, Edouard Grave, Armand Joulin, and Tomas Mikolov. Enriching word vectors with subword information. arXiv preprint arXiv:1607.04606, 2016.