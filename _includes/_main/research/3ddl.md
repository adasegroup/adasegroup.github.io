## Deep Learning for 3D Data Analysis
{:#threeddl-team .anchor}
We develop deep network architectures that operate on 3D geometric data such as meshes and point clouds, and apply them to solve relevant tasks in computer vision and geometry processing. 

### Selected geometry processing projects
{%- assign recent_projects = site.projects | where_exp: 'project', 'project.path contains "_projects/3ddl"' | where_exp: 'project', 'project.to_front' | sort: 'date' | reverse  %}
{%- include _main/research/make_project_containers.html projects=recent_projects %}
{% include _content/title_sliders_for_devices.html class='project-plate' containers=containers -%}

<div class="buttons-container-wrapper">
    <div class="buttons-container">
        <a class="threeddl-more flat-button" href="/3ddl/publications/">More about our 3DDL research</a>
    </div>
</div>
{{--}}
