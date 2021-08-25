---
layout: post
date: 2020-09-10
title: 'Deep Learning for Raster in the Wild: Vectorization Pipelines (with an application to floor plan vectorization)'
inline: false
---

### Project Description
In this project, our ultimate goal is to build a robust pipeline to vectorize scanned images of floor plans and/or other drawings for the processing tasks (editing, etc.). We approach this problem by dividing it to simpler tasks such as:

- Construction of a training sample;
- Clean real-world scanned images;
- Correction of Images: add missing parts to images, i.e. we model the causes of human error when they draw lines and also imperfect scanner that impose noise and artefacts
- Vectorize the image obtained from step 2 with meaningful paths via predicting exact equation of simple part, approximating the image

**Here are some comments on each step of the pipeline**

- To train the deep learning network we use both real data as well as synthetically generated data: we generated vector graphics with geometrical primitives such as curves, lines, circles etc. After generation, to make input looking as real drawings, we add small corruptions: noises, holes, real backgrounds, etc.
- To clean scanned images, we develop approaches based on deep neural networks with architectures similar to U-net architecture with BCE Loss. In the image below you can see one of examples obtained using the current NN: input is on the left and output is on the right
- To solve this task we develop a generative adversarial network . Training this kind of network is very challenging, because we need to choose good architecture for both Generator and Discriminator and also very carefully choose hyperparameters. Results of the current network are below: on the left there is an image with holes and on the right there is an output.

For vectorization we tried to use many algorithmic methods for example portrace, fidelity vs simplicity etc. There results are not satisfactory. Therefore we are developing an architecture based on Attention network with differentiable rendering loss

### References
1. Potrace: https://en.wikipedia.org/wiki/Potrace
2. Favreau, Jean-Dominique and Lafarge, Florent and Bousseau, Adrien. Fidelity vs. Simplicity: a Global Approach to Line Drawing Vectorization. ACM Transactions on Graphics (SIGGRAPH Conference Proceedings), 2016, http://www-sop.inria.fr/reves/Basilic/2016/FLB16
3. Chen, Wengling and Hays, James. SketchyGAN: Towards Diverse and Realistic Sketch to Image Synthesis. The IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2018
4. Kim, Byungsoo and Wang, Oliver and Oztireli, A. Cengiz and Gross, Markus. Semantic Segmentation for Line Drawing Vectorization Using Neural Networks. Computer Graphics Forum (Proc. Eurographics),  2018, volume 37, number 2, pages 329-338