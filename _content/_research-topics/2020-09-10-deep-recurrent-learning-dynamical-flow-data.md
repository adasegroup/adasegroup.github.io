---
layout: post
date: 2020-09-10
title: Deep recurrent learning for dynamical flow data
inline: false
---

### Project Description
Analysis of Dynamical systems helps in speeding up calculations in physical modelling and extends the domain of calculations. Combining machine learning method with this kind of analysis opens new ways for research and has applications in industrial problems such as oil flow modeling, heat transfer in complex structures, electromagnetic flux modelling, etc. We want to study the behavior of observables on the state space thorough analysis of such systems.

As the source of ground truth information for our methods we rely on a physical simulator of given physical equations. The simulator produces accurate high-fidelity results, but requires significant computations time to achieve them. There are two principal tasks. The first task is preparing data for learning deep generative models. The second task is developing an independent meta-model on this data (a helper model), that is less time-intensive, yet accurate enough to help complex physics-based model make faster computations.

**Several key research directions can be highlighted**
- Identification of low-order dynamics using reduction techniques (Fluid flows often exhibit low-dimensional behavior, despite being governed by infinite-dimensional PDEs)
- DOI interpolation in the space of low-order dynamics with deep learning techniques (Low-order space enables time compression from the initial to the final state, by giving up recoverability of all intermediate states)
- Construction and analysis of the dual space dynamics. Fluid flows often exhibit low-dimensional behavior, despite the fact that they are governed by infinite-dimensional partial differential equations

Every task has its own limits of performance, critical to industry, so each direction implies the opportunity to apply fast deep-learning methods to reduce expensive pats of computations into efficient direction, using GPU (in comparison with classical numerical CPU-based methods in physics). 

###References
1. Scalable Variational Inference for Dynamical Systems. Nico S Gorbach · Stefan Bauer · Joachim M Buhmann
2. Deep convolutional recurrent autoencoders for learning low-dimensional feature dynamics of fluid systems. Francisco J. Gonzalez, Maciej Balajewicz
3. Deep learning for universal linear embeddings of nonlinear dynamics. Bethany Lusch , J. Nathan Kutz, and Steven L. Brunton
4. Embed to Control: A Locally Linear Latent Dynamics Model for Control from Raw Images. Manuel Watter, Jost Tobias Springenberg, Joschka Boedecker, Martin Riedmiller
5. ON DYNAMIC MODE DECOMPOSITION: THEORY AND APPLICATIONS Jonathan H. Tu, Clarence W. Rowley, Dirk M. Luchtenburg