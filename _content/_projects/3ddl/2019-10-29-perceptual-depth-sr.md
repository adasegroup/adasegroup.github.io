---
layout: project_page
team: 3ddl
categories: 3ddl

title: Perceptual Deep Depth Super-Resolution
authors:
  - name: Oleg Voynov
    affiliation: 1
  - name: Alexey Artemov
    affiliation: 1
  - name: Vage Egiazarian
    affiliation: 1
  - name: Alexander Notchenko
    affiliation: 1
  - name: Gleb Bobrovskikh
    affiliation: '1, 2'
  - name: Evgeny Burnaev
    affiliation: 1
  - name: Denis Zorin
    affiliation: '3, 1'
affiliation:
  - Skolkovo Institute of Science and Technology
  - Higher School of Economics
  - New York University
venue: International Conference on Computer Vision 2019
to_front: True

excerpt: We address the problem of depth map super-resolution with the focus on visual quality of the corresponding 3D geometry. We demonstrate that basing the loss function on deviation of 3D surface rendering instead of direct depth deviation yields significantly improved results as measured by a number of perceptual metrics.
abstract: RGB-D images, combining high-resolution color and lower-resolution depth from various types of depth sensors, are increasingly common. One can significantly improve the resolution of depth maps by taking advantage of color information; deep learning methods make combining color and depth information particularly easy. However, fusing these two sources of data may lead to a variety of artifacts. If depth maps are used to reconstruct 3D shapes, e.g., for virtual reality applications, the visual quality of upsampled images is particularly important. The main idea of our approach is to measure the quality of depth map upsampling using renderings of resulting 3D surfaces. We demonstrate that a simple visual appearance-based loss, when used with either a trained CNN or simply a deep prior, yields significantly improved 3D shapes, as measured by a number of existing perceptual metrics. We compare this approach with a number of existing optimization and learning-based techniques. 

thumbnail: /assets/img/projects/perceptual_depth_sr/thumbnail.jpg
visual_abstract: /assets/img/projects/perceptual_depth_sr/teaser-pic.jpg
visual_abstract_description: Visually inferior super-resolution result in the middle gets higher score according to direct depth deviation but lower score according to perceptual deviation of the rendered image of the 3D surface. While the surfaces differ significantly, the corresponding depth maps do not capture this difference and look almost identical.
bibtex: "\
@inproceedings{voynov2019perceptual,
  title={Perceptual deep depth super-resolution},
  author={Voynov, Oleg and Artemov, Alexey and Egiazarian, Vage and Notchenko, Alexander and Bobrovskikh, Gleb and Burnaev, Evgeny and Zorin, Denis},
  booktitle={Proceedings of the IEEE International Conference on Computer Vision},
  pages={5653--5663},
  year={2019}
}"

materials:
    - name: Paper
      url: https://arxiv.org/pdf/1812.09874.pdf
      icon: fa fa-file-pdf-o
    - name: Poster
      url: https://box.skoltech.ru/index.php/s/FnMfn56p5oxZxc0
      icon: fa fa-file-pdf-o
    - name: Code
      url: https://github.com/voyleg/perceptual-depth-sr
      icon: fa fa-github-alt
---
## Contact
If you have any questions about this work, please contact us under [adase-3ddl@skoltech.ru](mailto:adase-3ddl@skoltech.ru).
