---
layout: project_page
team: 3ddl
categories: 3ddl

title: Latent Video Transformer
authors:
  - name: Ruslan Rakhimov
    affiliation: 1
  - name: Denis Volkhonskiy
    affiliation: 1
  - name: Alexey Artemov
    affiliation: 1
  - name: Denis Zorin
    affiliation: '2, 1'
  - name: Evgeny Burnaev
    affiliation: 1
affiliation:
  - Skolkovo Institute of Science and Technology
  - New York University
venue: arXiv 2020

excerpt: In this work we tackle the video generation problem. Given several first frames, we predict the continuation of a video.
abstract: The video generation task can be formulated as a prediction of future video frames given some past frames. Recent generative models for videos face the problem of high computational requirements. Some models require up to $512$ Tensor Processing Units for parallel training. In this work, we address this problem via modeling the dynamics in a latent space. After the transformation of frames into the latent space, our model predicts latent representation for the next frames in an autoregressive manner. We demonstrate the performance of our approach on BAIR Robot Pushing and Kinetics-600 datasets. The approach tends to reduce requirements to 8 Graphical Processing Units for training the models while maintaining comparable generation quality.

thumbnail: /assets/img/projects/latent_video_transformer/thumbnail.jpg
visual_abstract: /assets/img/projects/latent_video_transformer/teaser-pic.jpg
visual_abstract_description: 'Generated Kinetics-600 videos with 5 priming frames.'
#bibtex: '<span style="background-color: #F00;color: #FFF">Somebody fill this with bibtex when it is published'
---
## Contact
If you have any questions about this work, please contact us under [adase-3ddl@skoltech.ru](mailto:adase-3ddl@skoltech.ru).
