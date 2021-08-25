---
layout: project_page
team: neuro
categories: neuro

data: 2020

title: "Interpretation of 3D CNNs for Brain MRI Data Classification"
authors:
  - name: Maxim Kan
    affiliation: 1
  - name: Ruslan Aliev
    affiliation: 1
  - name: Anna Rudenko
    affiliation: 1
  - name: Nikita Drobyshev
    affiliation: 1
  - name: Nikita Petrashen
    affiliation: 1
  - name: Ekaterina Kondrateva
    affiliation: 1
  - name: Maxim Sharaev
    affiliation: 1
  - name: Alexander Bernstein
    affiliation: 1
  - name: Evgeny Burnaev
    affiliation: 1
affiliation:
  - Skolkovo Institute of Science and Technology

venue:  The 9th International Conference on Analysis of Images, Social Networks and Texts (AIST2020)
to_front: True

abstract: "Deep learning shows high potential for many medical image analysis tasks. Neural networks can work with full-size data without extensive preprocessing and feature generation and, thus, information loss.
Recent work has shown that the morphological difference in specific brain regions can be found on MRI with the means of Convolution Neural Networks (CNN). However,  interpretation of the existing models is based on a region of interest and can not be extended to voxel-wise image interpretation on a whole image. In the current work, we consider the classification task on a large-scale open-source dataset of young healthy subjects — an exploration of brain differences between men and women.
In this paper, we extend the previous findings in gender differences from diffusion-tensor imaging on T1 brain MRI scans. We provide the voxel-wise 3D CNN interpretation comparing the results of three interpretation methods: Meaningful Perturbations, Grad CAM and Guided Backpropagation, and contribute with the open-source library."
excerpt: ''

thumbnail: /assets/img/neuro/research/interpret.png

visual_abstract: /assets/img/neuro/research/interpret.png

bibtex: "\
@article{pominova2020fader,
  title={Fader Networks for domain adaptation on fMRI: ABIDE-II study},
  author={Pominova, Marina and Kondrateva, Ekaterina and Sharaev, Maxim and Bernstein, Alexander and Burnaev, Evgeny},
  journal={arXiv preprint arXiv:2010.07233},
  year={2020}
}"

materials:
    - name: Paper
      url: https://arxiv.org/abs/2006.15969
      icon: fa fa-file-pdf-o
    - name: Code
      url: https://github.com/maxs-kan/InterpretableNeuroDL
      icon: fa fa-github-alt
---
## Contact
If you have any questions about this work, please contact us under [ekaterina.kondrateva@skoltech.ru](mailto:ekaterina.kondrateva@skoltech.ru).
