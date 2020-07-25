---
# Lines starting with the # are comments.
# This file is split in two sections: the header and the content.
# The header is enclosed in `---` and is a meta data of the project in YAML format.
# The content goes right after the closing `---` of the header,
# is written in Markdown and is compiled right into the project page.

# Name the file in the format yyyy-mm-dd-title-of-the-page.md,
# where yyyy-mm-dd is the date of publication (of the paper, not the project page).
# For example, the url of the project page for 2019-10-29-perceptual-depth-sr.md
# is http://adase.group/3ddl/projects/perceptual-depth-sr/ (more about /3ddl/ below).

#--- Remove the line below: it excludes this template from the site release.
# published: false

#--- Do not change the layout unless you know what you're doing.
layout: project_page

#--- Optional parameter for switching to the subgroup-specific version of the site.
#--- I.e, compare the header at http://adase.group/dlpa/projects/nas-bench-nlp/
#--- with the header at http://adase.group/3ddl/projects/perceptual-depth-sr/
team: 3ddl

#--- Optional list of categories meant to be used for separation of research directions.
#--- For example, with
categories: 3ddl
#--- the project page will reside under adase.group/3ddl/projects/title , and
# categories: [category1, category2]
#--- will reside under adase.group/category1/category2/projects/title
#--- Note that the parent directory of the file,
#--- e.g _projects/3ddl for 2019-10-29-perceptual-depth-sr.md ,
#--- does not affect the url and is only used for grouping of the source files.

#--- Optional parameter allowing the project to appear on the title page of the website.
#--- The projects are sorted w.r.t front_id in the descending order.
#--- We put the fashionable projects in front of the others using front_id: 1XXX.
front_id: 1200

title: CAD-Deform: Deformable Fitting of CAD Models to 3D Scans

authors:
  - name: Vladislav Ishimtsev
    affiliation: 1
  - name: Alexey Bokhovkin
    affiliation: 1
  - name: Alexey Artemov
    affiliation: 1
  - name: Savva Ignatyev
    affiliation: 1
  - name: Matthias Niessner
    affiliation: 2
    page: https://niessnerlab.org/index.html
  - name: Denis Zorin
    affiliation: '3, 1'
  - name: Evgeny Burnaev
    affiliation: 1
    page: https://faculty.skoltech.ru/people/evgenyburnaev

affiliation:
  - Skolkovo Institute of Science and Technology
  - Technical University of Munich
  - New York University

venue: ECCV 2020

excerpt: A novel data-driven mesh deformation framework that fits aligned 3D CAD models from a shape database to noisy and partial 3D scans. 
#--- At the moment, only the 3DDL team uses the rich list http://adase.group/3ddl/publications/

abstract: Shape retrieval and alignment are a promising avenue towards turning 3D scans into lightweight CAD representations that can be used for content creation such as mobile or AR/VR gaming scenarios. Unfortunately, CAD model retrieval is limited by the availability of models in standard 3D shape collections (e.g., ShapeNet). In this work, we address this shortcoming by introducing CAD-Deform, a method which obtains more accurate CAD-to-scan fits by non-rigidly deforming retrieved CAD models. Our key contribution is a new non-rigid deformation model incorporating smooth transformations and preservation of sharp features, that simultaneously achieves very tight fits from CAD models to the 3D scan and maintains the clean, high-quality surface properties of hand-modeled CAD objects. A series of thorough experiments demonstrate that our method achieves significantly tighter scan-to-CAD fits, allowing a more accurate digital replica of the scanned real-world environment while preserving important geometric features present in synthetic CAD environments.

#--- Optional bibtex that will be displayed in the materials section (see below); cannot contain double quotes.
bibtex: "\
@article{ishimtsev2020deform, title={CAD-Deform: Deformable Fitting of CAD Models to 3D Scans}, author={Ishimtsev, Vladislav and Bokhovkin, Alexey and Artemov, Alexey and Ignatyev, Savva and Niessner, Matthias and Zorin, Denis and Burnaev, Evgeny}, journal={arXiv preprint arXiv:2007.11965}, year={2020} }"

#--- Optional graphical abstract that will be displayed in the project page,
#--- e.g http://adase.group/3ddl/projects/3d-laplatgan/
visual_abstract: /assets/img/projects/cad_deform/draft_teaser.jpeg

#--- Optional description of the graphical abstract.
#--- You may use plain HTML for complex text constructions, like subscript.
visual_abstract_description: CAD-Deform takes as input a set of 3D CAD models aligned on a RGB-D scan (left). In order to achieve tight fits (middle), we propose a novel part-based deformation formulation that maintains the desired CAD properties such as sharp features.

#--- Optional thumbnail that will be displayed in the rich list of the projects
#--- and in the title page of the website if front_id is set,
#--- e.g http://adase.group/3ddl/publications/#2020
#--- If not set but visual_abstract is set then it will be used.
thumbnail: /assets/img/projects/cad_deform/thumbnail.jpeg
#--- A couple of remarks regarding visual_abstract and thumbnail.
#--- First, do not put them in assets/img, put them in src/img and recompile,
#--- see https://github.com/adasegroup/adasegroup.github.io/wiki/How-to-Add-a-Project-Page
#--- Second, compress them as much as possible without loss of readability.
#--- You don't want the other researchers that come to our website wait for too long while the page is loading.
#--- `convert source_thumbnail.ext -resize "400x400" thumbnail.jpg` and
#--- `convert source_teaser.ext -resize "2000x2000" teaser.jpg` usually suffice.

#--- Optional section with materials that will be displayed in the project page and in the list of the projects.
materials:
    #--- Put the link to _PDF_
    - name: Paper
      url: https://arxiv.org/pdf/2007.11965.pdf
      icon: fa fa-file-pdf-o
    - name: Code
      url: https://github.com/alexeybokhovkin/CAD-Deform
      icon: fa fa-code
---
## Section name
# Section content. Look [here](https://markdown-it.github.io) for a Markdown cheatsheet.

## Contact
If you have any questions about this work, please contact us under adase-3ddl@skoltech.ru.
