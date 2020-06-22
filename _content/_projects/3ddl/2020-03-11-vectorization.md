---
layout: project_page
team: 3ddl
categories: 3ddl

title: Deep Vectorization of Technical Drawings
authors:
  - name: Vage Egiazarian
    affiliation: '*1'
  - name: Oleg Voynov
    affiliation: '*1'
  - name: Alexey Artemov
    affiliation: 1
  - name: Denis Volkhonskiy
    affiliation: 1
  - name: Aleksandr Safin
    affiliation: 1
  - name: Maria Taktasheva
    affiliation: 1 
  - name: Denis Zorin
    affiliation: '2, 1'
  - name: Evgeny Burnaev
    affiliation: 1
affiliation:
  - Skolkovo Institute of Science and Technology
  - New York University
venue: arXiv 2020
to_front: True

excerpt: We present a new method for vectorization of technical line drawings which consists of (1) a deep learning-based cleaning stage, (2) a transformer-based network to estimate vector primitives, and (3) an optimization procedure to obtain the final primitive configurations.
abstract: We present a new method for vectorization of technical line drawings, such as floor plans, architectural drawings, and 2D CAD images. Our method includes (1) a deep learning-based cleaning stage to eliminate the background and imperfections in the image and fill in missing parts, (2) a transformer-based network to estimate vector primitives, and (3) optimization procedure to obtain the final primitive configurations. We train the networks on synthetic data, renderings of vector line drawings, and manually vectorized scans of line drawings. Our method quantitatively and qualitatively outperforms a number of existing techniques on a collection of representative technical drawings. 

thumbnail: /assets/img/projects/vectorization/thumbnail.jpg
visual_abstract: /assets/img/projects/vectorization/teaser-pic.jpg
visual_abstract_description: An overview of our vectorization method. We clean the input image using a deep CNN, then split the input image into patches and predict the primitive placement with a deep CNN, after that refine the predictions using an optimization method, and finally merge them together into single image.
bibtex: "\
@article{egiazarian2020deep,
  title={Deep Vectorization of Technical Drawings},
  author={Egiazarian, Vage and Voynov, Oleg and Artemov, Alexey and Volkhonskiy, Denis and Safin, Aleksandr and Taktasheva, Maria and Zorin, Denis and Burnaev, Evgeny},
  journal={arXiv preprint arXiv:2003.05471},
  year={2020}
}"

materials:
    - name: Paper
      url: https://arxiv.org/pdf/2003.05471.pdf
      icon: fa fa-file-pdf-o
#    - name: Code
#      url: https://github.com/Vahe1994/Deep-Vectorization-of-Technical-Drawings
#      icon: fa fa-github-alt
---
## Contact
If you have any questions about this work, please contact us under [adase-3ddl@skoltech.ru](mailto:adase-3ddl@skoltech.ru).
