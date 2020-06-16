---
layout: neuro_page
title: People
team: neuro
---

{%- assign heads = site.data.staff.leadership | where_exp: 'person', 'person.nil' | push: site.data.staff.leadership['Burnaev Evgeny'] | push: site.data.staff.collaborators['Zorin Denis'] %}
{% include _content/staff/staff_full_width.html staff=heads %}

{%- assign research_scientists = site.data.staff.researchers | where_exp: 'person', 'person.team contains page.team' %}
{% include _content/staff/staff_full_width.html staff=research_scientists %}

{%- assign phd_students = site.data.staff.phd_students | where_exp: 'person', 'person.team contains page.team' %}
{% include _content/staff/staff_full_width.html staff=phd_students %}

{%- assign msc_students = site.data.staff.msc_students | where_exp: 'person', 'person.team contains page.team' %}
{% include _content/staff/staff_full_width.html staff=msc_students %}

{%- assign bsc_students = site.data.staff.bsc_students | where_exp: 'person', 'person.team contains page.team' %}
{% include _content/staff/staff_full_width.html staff=bsc_students %}

