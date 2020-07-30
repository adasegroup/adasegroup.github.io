---
layout: project_page
team: 3ddl
categories: 3ddl
front_id: 1003

title: 'CAD-Deform: Deformable Fitting of CAD Models to 3D Scans'
authors:
  - name: Vladislav Ishimtsev
    affiliation: 1
  - name: Alexey Bokhovkin
    affiliation: 1
  - name: Alexey Artemov
    affiliation: 1
  - name: Savva Ignatyev
    affiliation: 1
  - name: Matthias Nießner
    affiliation: 2
  - name: Denis Zorin
    affiliation: '3, 1'
  - name: Evgeny Burnaev
    affiliation: 1
affiliation:
  - Skolkovo Institute of Science and Technology
  - Technical University of Munich
  - New York University
venue: European Conference on Computer Vision 2020

excerpt: A novel data-driven mesh deformation framework that fits aligned 3D CAD models from a shape database to noisy and partial 3D scans. 

abstract: Shape retrieval and alignment are a promising avenue towards turning 3D scans into lightweight CAD representations that can be used for content creation such as mobile or AR/VR gaming scenarios. Unfortunately, CAD model retrieval is limited by the availability of models in standard 3D shape collections (e.g., ShapeNet). In this work, we address this shortcoming by introducing CAD-Deform, a method which obtains more accurate CAD-to-scan fits by non-rigidly deforming retrieved CAD models. Our key contribution is a new non-rigid deformation model incorporating smooth transformations and preservation of sharp features, that simultaneously achieves very tight fits from CAD models to the 3D scan and maintains the clean, high-quality surface properties of hand-modeled CAD objects. A series of thorough experiments demonstrate that our method achieves significantly tighter scan-to-CAD fits, allowing a more accurate digital replica of the scanned real-world environment while preserving important geometric features present in synthetic CAD environments.

bibtex: "\
@article{ishimtsev2020deform, title={CAD-Deform: Deformable Fitting of CAD Models to 3D Scans}, author={Ishimtsev, Vladislav and Bokhovkin, Alexey and Artemov, Alexey and Ignatyev, Savva and Niessner, Matthias and Zorin, Denis and Burnaev, Evgeny}, journal={arXiv preprint arXiv:2007.11965}, year={2020} }"

visual_abstract: /assets/img/projects/cad_deform/draft_teaser.jpg
visual_abstract_description: CAD-Deform takes as input a set of 3D CAD models aligned on a RGB-D scan (left). In order to achieve tight fits (middle), we propose a novel part-based deformation formulation that maintains the desired CAD properties such as sharp features.
thumbnail: /assets/img/projects/cad_deform/thumbnail.jpg

materials:
    - name: Paper
      url: https://arxiv.org/pdf/2007.11965.pdf
      icon: fa fa-file-pdf-o
    - name: Code
      url: https://github.com/alexeybokhovkin/CAD-Deform
      icon: fa fa-code
---
## Contact
If you have any questions about this work, please contact us under [adase-3ddl@skoltech.ru](mailto:adase-3ddl@skoltech.ru).
