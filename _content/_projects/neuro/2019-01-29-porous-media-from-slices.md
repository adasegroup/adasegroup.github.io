---
layout: project_page
team: neuro
categories: neuro

title: Reconstruction of 3D Porous Media From 2D Slices
authors:
  - name: Denis Volkhonskiy
    affiliation: 1
  - name: Ekaterina Muravleva
    affiliation: 1
  - name: Oleg Sudakov
    affiliation: 1
  - name: Denis Orlov
    affiliation: 1
  - name: Boris Belozerov
    affiliation: 2
  - name: Vladislav Krutko
    affiliation: 2
  - name: Evgeny Burnaev
    affiliation: 1
  - name: Dmitry Koroteev
    affiliation: 2
affiliation:
  - Skolkovo Institute of Science and Technology
  - Gazprom Neft Science & Technology Center
venue: arXiv 2019

excerpt: We propose a novel deep learning architecture for three-dimensional porous media reconstruction from two-dimensional slices. Given central slices, we recover the three-dimensional structure around such slices as the most probable one.
abstract: We propose a novel deep learning architecture for three-dimensional porous media structure reconstruction from two-dimensional slices. A high-level idea is that we fit a distribution on all possible three-dimensional structures of a specific type based on the given dataset of samples. Then, given partial information (central slices) we recover the three-dimensional structure that is built around such slices. Technically, it is implemented as a deep neural network with encoder, generator and discriminator modules. Numerical experiments show that this method gives a good reconstruction in terms of Minkowski functionals.

thumbnail: /assets/img/projects/porous_media_from_slices/thumbnail.jpg
visual_abstract: /assets/img/projects/porous_media_from_slices/teaser-pic.jpg
visual_abstract_description: 'Generated 3D samples of three different types: Berea, Ketton, South-Russian sandstone'
#bibtex: '<span style="background-color: #F00;color: #FFF">Somebody fill this with bibtex when it is published'

materials:
    - name: Paper
      url: https://arxiv.org/pdf/1901.10233.pdf
      icon: fa fa-file-pdf-o
---
## Contact
If you have any questions about this work, please contact us under [adase-3ddl@skoltech.ru](mailto:adase-3ddl@skoltech.ru).
