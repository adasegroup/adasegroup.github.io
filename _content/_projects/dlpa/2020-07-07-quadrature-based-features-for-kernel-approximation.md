---
layout: project_page
team: dlpa
categories: dlpa

front_id: 2

title: 'Quadrature-based features for kernel approximation'
authors:
  - name: Marina Munkhoeva
    affiliation: '1'
  - name: Yermek Kapushev
    affiliation: '1'
  - name: Evgeny Burnaev
    affiliation: '1'
  - name: Ivan Oseledets
    affiliation: '1,2'    
affiliation:
  - Skolkovo Institute of Science and Technology
  - Institute of Numerical Mathematics of the Russian Academy of Sciences
venue: 32nd Conference on Neural Information Processing Systems (NIPS 2018), Montréal, Canada.

excerpt: 'Special quadrature rule to generalize several prominent approaches to scale up kernel methods based on Random Fourier Features and improve its convergence'

abstract: 'We consider the problem of improving kernel approximation via randomized feature maps. These maps arise as Monte Carlo approximation to integral representations of kernel functions and scale up kernel methods for larger datasets. Based on an efficient numerical integration technique, we propose a unifying approach that reinterprets the previous random features methods and extends to better estimates of the kernel approximation. We derive the convergence behaviour and conduct an extensive empirical study that supports our hypothesis.'

thumbnail: /assets/img/projects/quadrature_based_features/thumbnail.jpg
visual_abstract: /assets/img/projects/quadrature_based_features/teaser-pic.jpg
visual_abstract_description: 'Error of the approximation of the kernel functions'

bibtex: "\
@inproceedings{munkhoeva2018quadrature,
  title={Quadrature-based features for kernel approximation},
  author={Munkhoeva, Marina and Kapushev, Yermek and Burnaev, Evgeny and Oseledets, Ivan},
  booktitle={Advances in Neural Information Processing Systems},
  pages={9147--9156},
  year={2018}
}"

materials:
    - name: Paper
      url: https://papers.nips.cc/paper/8128-quadrature-based-features-for-kernel-approximation.pdf
      icon: fa fa-file-pdf-o
    - name: Code
      url: https://github.com/maremun/quffka.
      icon: fa fa-github-alt 
---
