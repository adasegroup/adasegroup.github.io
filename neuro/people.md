---
layout: neuro_page
title: People
team: neuro
---

### Principle

{%- assign heads = site.data.staff.leadership | where_exp: 'person', 'person.nil' | push: site.data.staff.leadership['Sharaev Maxim'] | push: site.data.staff.leadership['Bernstein Alexander']%}
{% include _content/staff/staff_full_width.html staff=heads %}

### Researchers

{%- assign research_scientists = site.data.staff.researchers | where_exp: 'person', 'person.team contains page.team' %}
{% include _content/staff/staff_full_width.html staff=research_scientists %}

### PhD Students

{%- assign phd_students = site.data.staff.phd_students | where_exp: 'person', 'person.team contains page.team' %}
{% include _content/staff/staff_full_width.html staff=phd_students %}

### Masters students

{%- assign msc_students = site.data.staff.msc_students | where_exp: 'person', 'person.team contains page.team' %}
{% include _content/staff/staff_full_width.html staff=msc_students %}

{%- assign bsc_students = site.data.staff.bsc_students | where_exp: 'person', 'person.team contains page.team' %}
{% include _content/staff/staff_full_width.html staff=bsc_students %}

