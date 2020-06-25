---
layout: project_page
team: dlpa
categories: dlpa

to_front: True

title: NAS-Bench-NLP: Neural Architecture SearchBenchmark for Natural Language Processing
authors:
  - name: Nikita Klyuchnikov
    affiliation: '1,∗'
  - name: Ilya Trofimov
    affiliation: '1'
  - name: Ekaterina Artemova
    affiliation: '2'
  - name: Mikhail Salnikov
    affiliation: '1'
  - name: Maxim Fedorov
    affiliation: '1'
  - name: Evgeny Burnaev
    affiliation: '1'
affiliation:
  - Skolkovo Institute of Science and Technology
  - National Research University Higher School of Economics
venue: arXiv 2020

excerpt: 'We have provided search space of recurrent neural networks on the text datasets, trained 14k architectures within it, and analyzed properties of the obtained models.'

abstract: 'Neural Architecture Search (NAS) is a promising and rapidly evolving research area. Training a large number of neural networks requires an exceptional amount of computational power, which makes NAS unreachable for those researchers who have limited or no access to high-performance clusters and supercomputers. A few benchmarks with precomputed neural architectures performances have been recently introduced to overcome this problem and ensure more reproducible experiments. However, these benchmarks are only for the computer vision domain and, thus, are built from the image datasets and convolution-derived architectures. In this work, we step outside the computer vision domain by leveraging the language modeling task, which is the core of natural language processing (NLP). Our main contribution is as follows: we have provided search space of recurrent neural networks on the text datasets and trained 14k architectures within it; we have conducted both intrinsic and extrinsic evaluation of the trained models using datasets for semantic relatedness and language understanding evaluation; finally, we have tested several NAS algorithms to demonstrate how the precomputed results can be utilized. We believe that our results have high potential of usage for both NAS and NLP communities.'

thumbnail: /assets/img/projects/nas-bench-nlp/thumbnail.png
visual_abstract: /assets/img/projects/nas-bench-nlp/teaser.png
visual_abstract_description: 'Architectures examples and metrics.'
#bibtex: '<span style="background-color: #F00;color: #FFF">This bibtex will be filled when the paper is published'.

materials:
    - name: Paper
      url: https://arxiv.org/abs/2006.07116
      icon: fa fa-file-pdf-o
---