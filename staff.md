---
layout: page
title: Staff
permalink: /staff/
---

<div class="staff-details">
<h1>Leadership<h1>

{% if site.staff %}
    <div class = "user">
    {% assign staff = site.staff | sort: 'title' %}
        {% for item in staff %}
          {% if item.category == 'leadership' %}
          <div class="staff-profile">
            <h4>{{ item.position }}</h4>
              {% if item.picture %}
                <img src="{{ item.picture | prepend: site.baseurl }}" alt="{{ item.title }}" class="no-print" itemprop="image">
              {% else %}
                <img src="/assets/img/logo_square_transparent.png" alt="{{ item.title }}" class="no-print" itemprop="image">
              {% endif %}
              {% if item.inline %}
                <h4>{{ item.title }}</h4>
              {% else %}
                <h4><a class="news-title" href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a></h4>
              {% endif %}          
          </div>
          {% endif %}
          
        {% endfor %}
{% else %}
  <p>No staff...</p>
  </div>
{% endif %}
</div>

<div class="staff-details">
<h1>Researchers<h1>

{% if site.staff %}
    <div class = "user">
    {% assign staff = site.staff | sort: 'title' %}
        {% for item in staff %}
          {% if item.category == 'scientist' %}
          <div class="staff-profile">
            <h4>{{ item.position }}</h4>
              {% if item.picture %}
                <img src="{{ item.picture | prepend: site.baseurl }}" alt="{{ item.title }}" class="no-print" itemprop="image">
              {% else %}
                <img src="/assets/img/logo_square_transparent.png" alt="{{ item.title }}" class="no-print" itemprop="image">
              {% endif %}
              {% if item.inline %}
                <h4>{{ item.title }}</h4>
              {% else %}
                <h4><a class="news-title" href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a></h4>
              {% endif %}          
          </div>
          {% endif %}
          
        {% endfor %}
{% else %}
  <p>No staff...</p>
  </div>
{% endif %}
</div>


<h1>Students<h1>
{% if site.staff %}
<div class="staff-details">
{% assign staff = site.staff | sort: 'title' %}
{% for item in staff %}
{% if item.category == 'student' %}
<div class="staff-profile">
<h4>{{ item.position }}</h4>
{% if item.picture %}
<img src="{{ item.picture | prepend: site.baseurl }}" alt="{{ item.title }}" class="no-print" itemprop="image">
{% else %}
<img src="/assets/img/logo_square_transparent.png" alt="{{ item.title }}" class="no-print" itemprop="image">
{% endif %}
{% if item.inline %}
<h4>{{ item.title }}</h4>
{% else %}
<h4><a class="news-title" href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a></h4>
{% endif %}
</div>
{% endif %}
{% endfor %}
{% else %}
<p>No staff...</p>
</div>
{% endif %}



<h1>Collaborators<h1>
{% if site.staff %}
<div class="staff-details">
{% assign staff = site.staff | sort: 'title' %}
{% for item in staff %}
{% if item.category == 'collaborator' %}
<div class="staff-profile">
<h4>{{ item.position }}</h4>
{% if item.picture %}
<img src="{{ item.picture | prepend: site.baseurl }}" alt="{{ item.title }}" class="no-print" itemprop="image">
{% else %}
<img src="/assets/img/logo_square_transparent.png" alt="{{ item.title }}" class="no-print" itemprop="image">
{% endif %}
{% if item.inline %}
<h4>{{ item.title }}</h4>
{% else %}
<h4><a class="news-title" href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a></h4>
{% endif %}
</div>
{% endif %}
{% endfor %}
{% else %}
<p>No staff...</p>
</div>
{% endif %}
