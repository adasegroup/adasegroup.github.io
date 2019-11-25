---
layout: project_page
team: 3ddl
categories: 3ddl

title: Boundary Loss for Remote Sensing ImagerySemantic Segmentation
authors:
  - name: Alexey Bokhovkin
    affiliation: 1
  - name: Evgeny Burnaev
    affiliation: 2
affiliation:
  - Skolkovo Institute of Science and Technology, Aeronet group
  - Skolkovo Institute of Science and Technology, ADASE group
venue: International Symposium on Neural Networks 2019

excerpt: '<span style="background-color: #F00;color: #FFF">Somebody fill this with short description of the project that will appear in the list of publications</span>'
abstract: In response to the growing importance of geospatial data, its analysis including semantic segmentation becomes an increasingly popular task in computer vision today. Convolutional neural networks are powerful visual models that yield hierarchies of features and practitioners widely use them to process remote sensing data. When performing remote sensing image segmentation, multiple instances of one class with precisely defined boundaries are often the case, and it is crucial to extract those boundaries accurately. The accuracy of segments boundaries delineation influences the quality of the whole segmented areas explicitly. However, widely-used segmentation loss functions such as BCE, IoU loss or Dice loss do not penalize misalignment of boundaries sufficiently. In this paper, we propose a novel loss function, namely a differentiable surrogate of a metric accounting accuracy of boundary detection. We can use the loss function with any neural network for binary segmentation. We performed validation of our loss function with various modifications of UNet on a synthetic dataset, as well as using real-world data (ISPRS Potsdam, INRIA AIL). Trained with the proposed loss function, models outperform baseline methods in terms of IoU score. 

visual_abstract: '" alt="Somebody add teaser picture'
visual_abstract_description: '<span style="background-color: #F00;color: #FFF">Somebody add teaser picture; Somebody fill this with description of the figure above</span>'
bibtex: "\
@inproceedings{bokhovkin2019boundary,
  title={Boundary Loss for Remote Sensing Imagery Semantic Segmentation},
  author={Bokhovkin, Alexey and Burnaev, Evgeny},
  booktitle={International Symposium on Neural Networks},
  pages={388--401},
  year={2019},
  organization={Springer}
}"

materials:
    - name: Paper
      url: https://arxiv.org/pdf/1905.07852.pdf
      icon: fa fa-file-pdf-o
---
<span style="background-color: #F00;color: #FFF">Somebobby fill this with project details</span>
## Contact
If you have any questions about this work, please contact us under [adase-3ddl@skoltech.ru](mailto:adase-3ddl@skoltech.ru).
