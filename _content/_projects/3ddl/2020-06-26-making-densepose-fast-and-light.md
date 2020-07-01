---
layout: project_page
team: 3ddl
categories: 3ddl
front_id: 8

title: Making DensePose fast and light
authors:
  - name: Ruslan Rakhimov
    affiliation: 1
  - name: Emil Bogomolov
    affiliation: 1
  - name: Alexandr Notchenko
    affiliation: 1
  - name: Fung Mao
    affiliation: 2
  - name: Alexey Artemov
    affiliation: 1
  - name: Denis Zorin
    affiliation: '3, 1'
  - name: Evgeny Burnaev
    affiliation: 1
affiliation:
  - Skolkovo Institute of Science and Technology
  - Huawei Moscow Research Center (Russia)
  - New York University
venue: arXiv 2020

excerpt: Struggle to run DensePose network on a mobile device? Check out our work on how to make that possible
abstract: DensePose estimation task is a significant step forward for enhancing user experience computer vision applications ranging from augmented reality to cloth fitting. Existing neural network models capable of solving this task are heavily parameterized and a long way from being transferred to an embedded or mobile device. To enable Dense Pose inference on the end device with current models, one needs to support an expensive server-side infrastructure and have a stable internet connection. To make things worse, mobile and embedded devices do not always have a powerful GPU inside.
In this work, we target the problem of redesigning the DensePose R-CNN model's architecture so that the final network retains most of its accuracy but becomes more light-weight and fast. To achieve that, we tested and incorporated many deep learning innovations from recent years, specifically performing an ablation study on 23 efficient backbone architectures, multiple two-stage detection pipeline modifications, and custom model quantization methods. 
As a result, we achieved 17 times model size reduction and 2 times latency improvement compared to the baseline model.

thumbnail: /assets/img/projects/making_densepose_fast_and_light/thumbnail.jpg
visual_abstract: /assets/img/projects/making_densepose_fast_and_light/teaser-pic.jpg
visual_abstract_description: 'Qualitative comparison of different models. We depict contours with color-coded U and V coordinates as an output of the model.'
#bibtex: '<span style="background-color: #F00;color: #FFF">Somebody fill this with bibtex when it is published'

materials:
  - name: Paper
    url: https://arxiv.org/abs/2006.15190
    icon: fa fa-file-pdf-o
  - name: Code
    url: https://github.com/zetyquickly/DensePoseFnL
    icon: fa fa-github
---
## Contact
If you have any questions about this work, please contact us under [adase-3ddl@skoltech.ru](mailto:adase-3ddl@skoltech.ru).
