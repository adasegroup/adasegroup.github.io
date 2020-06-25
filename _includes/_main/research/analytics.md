## Deep Learning for Predictive analytics
{:#analytics-team .anchor}
We develop (deep) machine learning models for predictive analysis of complex engineering systems.

### See our predictive analytics projects
{%- assign recent_projects = site.projects | where_exp: 'project', 'project.path contains "_projects/dlpa"' | where_exp: 'project', 'project.to_front' | sort: 'date' | reverse  %}
{%- include _main/research/make_project_containers.html projects=recent_projects %}
{% include _content/title_sliders_for_devices.html class='project-plate' containers=containers -%}
