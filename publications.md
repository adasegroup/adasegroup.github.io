---
layout: publications
title: Publications
filter:
    id: project-filter
    selector: .project-short
    child_selector: .data
    hint: 'filter, e.g, Burnaev & Computer Vision'
---
{%- assign projects = site.projects | concat: site.data.adase.homeless_projects %}
{%- assign projects = projects | sort: 'date' %}
{%- include _content/projects/project_list.html short=true projects=projects %}
