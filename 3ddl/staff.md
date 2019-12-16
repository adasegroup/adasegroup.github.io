---
layout: page
title: Staff
team: 3ddl
---
{%- assign heads = site.data.staff.collaborators | where: 'name', nil | push: site.data.staff.leadership['Burnaev Evgeny'] | push: site.data.staff.collaborators['Zorin Denis'] %}
{% include _content/staff/staff_grid.html staff=heads %}

{%- assign research_scientists = site.data.staff.researchers | where_exp: 'person', 'person.team contains page.team' %}
{% include _content/staff/staff_grid.html staff=research_scientists %}

{%- assign phd_students = site.data.staff.phd_students | where_exp: 'person', 'person.team contains page.team' %}
{% include _content/staff/staff_grid.html staff=phd_students %}

{%- assign msc_students = site.data.staff.msc_students | where_exp: 'person', 'person.team contains page.team' %}
{% include _content/staff/staff_grid.html staff=msc_students %}

{%- assign bsc_students = site.data.staff.bsc_students | where_exp: 'person', 'person.team contains page.team' %}
{% include _content/staff/staff_grid.html staff=bsc_students %}
