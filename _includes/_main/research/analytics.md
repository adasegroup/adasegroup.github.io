## Deep Learning for Predictive analytics
{:#analytics-team .anchor}
We do X for Y.

### See our X projects
{%- assign recent_projects = site.projects | where_exp: 'project', 'project.path contains "_projects/3ddl"' | where_exp: 'project', 'project.to_front' | sort: 'date' | reverse  %}
{%- include _main/research/make_project_containers.html projects=recent_projects %}
{% include _content/title_sliders_for_devices.html class='project-plate' containers=containers -%}

<div class="buttons-container-wrapper">
    <div class="buttons-container">
        <a class="analytics-more flat-button" href="/analytics/">More about our projects on Predictive analytics</a>
    </div>
</div>
