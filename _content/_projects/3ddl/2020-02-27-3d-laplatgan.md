---
layout: project_page
team: 3ddl
categories: 3ddl

title: Latent-Space Laplacian Pyramids for Adversarial Representation Learning with 3D Point Clouds
authors:
  - name: Vage Egiazarian
    affiliation: '*1'
  - name: Savva Ignatyev
    affiliation: '*1'
  - name: Alexey Artemov
    affiliation: 1
  - name: Oleg Voynov
    affiliation: 1
  - name:  Andrey Kravchenko
    affiliation: 2
  - name: Youyi Zheng
    affiliation: 3 
  - name: Luiz Velho
    affiliation: 4
  - name: Evgeny Burnaev
    affiliation: 1
affiliation:
  - Skolkovo Institute of Science and Technology
  - DeepReason.ai, Oxford, UK
  - State Key Lab, Zhejiang University, China+
  - IMPA, Brazil
venue: International Conference on Computer Vision Theory and Applications 2020

excerpt: We employ a latent-space Laplacian pyramid representation within a hierarchical generative model for 3D point clouds. We combine recent latent-space GAN and Laplacian GAN to form a multi-scale model for generation of 3D point clouds with gradually increasing levels of detail.
abstract: Constructing high-quality generative models for 3D shapes is a fundamental task in computer vision with diverse applications in geometry processing, engineering, and design. Despite the recent progress in deep generative modelling, synthesis of finely detailed 3D surfaces, such as high-resolution point clouds, from scratch has not been achieved with existing approaches. In this work, we propose to employ the latent-space Laplacian pyramid representation within a hierarchical generative model for 3D point clouds. We combine the recently proposed latent-space GAN and Laplacian GAN architectures to form a multi-scale model capable of generating 3D point clouds at increasing levels of detail. Our evaluation demonstrates that our model outperforms the existing generative models for 3D point clouds. 

thumbnail: /assets/img/projects/3d_laplatgan/thumbnail.jpg
visual_abstract: /assets/img/projects/3d_laplatgan/teaser-pic.jpg
visual_abstract_description: Full architecture of LSLP-GAN model. The network either accepts or generates an initial point cloud X<sub>0</sub> and processes it with a series of K learnable steps. Each step (1) upsamples its input using a non-learnable operator U, (2) encodes the upsampled version into the latent space by f<sub>k</sub>, (3) performs correction of the latent code via a conditional GAN G<sub>k</sub>, and (4) decodes the corrected latent code using g<sub>k</sub>.
bibtex: "\
@inproceedings{egiazarian2019latent,
  title={Latent-Space Laplacian Pyramids for Adversarial Representation Learning with 3D Point Clouds},
  author={Vage Egiazarian and S. P. Ignat’yev and Alexey Artemov and Oleg Voynov and Andrey Kravchenko and Youyi Zheng and Luiz Velho and Evgeny Burnaev},
  booktitle={VISIGRAPP},
  year={2020}
}"

materials:
    - name: Paper
      url: https://arxiv.org/pdf/1912.06466.pdf
      icon: fa fa-file-pdf-o
    - name: Code
      url: https://github.com/Vahe1994/ThreeDLAPGAN
      icon: fa fa-github-alt
---
## Contact
If you have any questions about this work, please contact us under [adase-3ddl@skoltech.ru](mailto:adase-3ddl@skoltech.ru).
