---
layout: post
date: 2020-09-10
title: Deep Learning Representations of Unstructured Variable-Length Sequences
inline: false
---

### Project Description
During the last five years, learning deep embeddings for representing complex relationships in data has become the mainstream idea in the machine learning community. As a result, embedding learning has proliferated throughout a vast number of application domains. For example, recurrent encoder-decoder sentence models such as skip-thought vectors [1] have achieved remarkable performance on sentence interpretation tasks and can yield highly generic sentence representations. However, such models do not compute the embedding of the container document, like it is done with non-recurrent models [2]. One can fill this gap by considering a subnetwork employed to embed the document as a vector representation. One can further investigate approaches to learn document embeddings in hyperbolic space [3] as an alternative to the standard high-dimensional Euclidean space.
 
One downside of using deep recurrent neural models is that they typically require long training samples to generalize. This drastically limits their applicability to real-world data such as sequences of codes common to insurance claims or medical records. Aim of this work is to address this shortcoming by developing new recurrent models allowing learning tasks requiring generalization from few observed sequences [4] while comprehensively modeling sequence variability. Alongside these efforts you will develop approaches allowing to incorporate prior knowledge on sequence distribution [5].
 
### Tasks for first 2-4 months
Literature review (related works, state-of-the-art, evaluation approaches)
Reproduce results of [1] (see e.g. https://github.com/sanyam5/skip-thoughts)
Implement a memory-augmented neural network (MANN) [4] and apply it on toy tasks
Prose an architecture for building sequences’ embeddings with MANNs
 
### References
Kiros, Ryan, et al. "Skip-thought vectors." Advances in neural information processing systems. 2015.
Le, Quoc, and Tomas Mikolov. "Distributed representations of sentences and documents." International Conference on Machine Learning. 2014.
Chamberlain, Benjamin Paul, James Clough, and Marc Peter Deisenroth. "Neural Embeddings of Graphs in Hyperbolic Space." arXiv preprint arXiv:1705.10359 (2017).
Santoro, Adam, et al. "One-shot learning with memory-augmented neural networks." arXiv preprint arXiv:1605.06065(2016).
Korshunova, Iryna, et al. "A Generative Deep Recurrent Model for Exchangeable Data." arXiv preprint arXiv:1802.07535(2018).