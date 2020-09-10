---
layout: post
date: 2020-09-10
title: Deep Graph Neural Networks
inline: false
---

A number of studies have proposed to use GNN for a range of problem domains such as supervised, semi-supervised, and unsupervised classification of nodes, edges, and graphs and have now become de-facto state-of-the-art tool-of-choice for ones dealing with graphs. In a nutshell, starting from some pre-determined attributes, GNN is a series of updates and aggregations over nodes, edges, and global structure, where attributes on the previous step are aggregated in a nonlinear manner to output the desired target (e.g. labels of the nodes, edges, or graphs). Experimental success and general formalism led to ubiquitous usage of GNN in various domains, from physical systems to machine translation to computer vision. 
 
Driven by the large empirical evidence, in this work we propose to use deep graph neural networks in the domain of insurance records. Our proposal can be divided into several parts. Firstly, we propose to develop a novel architecture of GNN for the health insurance data, which both pose some constrains (e.g. class imbalance, privacy, and interpretability) and offer extra functionalities (e.g. rich meta-data information). To the best of our knowledge, there has not been other graph neural networks that deal with these constraints, therefore the consequences of these developments will spread to other industries with similar settings (e.g. manufacturing, text comprehension, bank transactions). 
 
Our second goal is to prepare theoretical ground for the designed GNN architecture and to answer current outstanding questions. In particular, previous work developed provable guarantees that certain graph algorithms possess reconstruction properties, i.e. ability to discriminate between all non-isomorphic graphs – fundamental question of graph isomorphism (for which no known efficient algorithm exists). Current GNN architectures do not accommodate for this property and therefore are not sufficiently powerful in hard cases where graphs are non-isomorphic yet share certain structural properties. We suggest continuing to work on this direction and generalize it to GNN so that to address this issue. We propose also to answer several statistical and group-theoretical questions related to the complete graph invariant associated with our GNN – fundamental question that spans far beyond current working setup and therefore contributing to several fields (e.g. graph theory and statistical inference).
 
### References
[1] SEMI-SUPERVISED CLASSIFICATION WITH GRAPH CONVOLUTIONAL NETWORKS, ICLR 2017 https://arxiv.org/pdf/1609.02907.pdf
[2] Relational inductive biases, deep learning, and graph networks, DeepMind 2017 https://arxiv.org/pdf/1806.01261.pdf
[3] Neural Message Passing for Quantum Chemistry, ICML 2017 http://proceedings.mlr.press/v70/gilmer17a/gilmer17a.pdf