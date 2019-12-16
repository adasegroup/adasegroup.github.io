---
layout: page
title: Staff
team: adase
---
{%- assign staff_group = site.data.staff.collaborators | where: 'name', nil | push: site.data.staff.leadership['Burnaev Evgeny'] | push: site.data.staff.leadership['Bernstein Alexander'] %}
{% include _content/staff/staff_grid.html staff=staff_group %}

## Post-docs & Research staff
{%- assign staff_group = site.data.staff.researchers | where_exp: 'item', 'item.name' | sort_natural: 'name' %}
{% include _content/staff/staff_grid.html staff=staff_group %}

## PhD students
{%- assign staff_group = site.data.staff.phd_students | where_exp: 'item', 'item.name' | sort_natural: 'name' %}
{% include _content/staff/staff_grid.html staff=staff_group %}

## MSc and BSc students
{%- assign staff_group = site.data.staff.msc_students | where_exp: 'item', 'item.name' | sort_natural: 'name' %}
{% include _content/staff/staff_grid.html staff=staff_group %}
