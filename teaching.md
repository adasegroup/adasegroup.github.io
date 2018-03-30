---
layout: page
title: Teaching
permalink: /teaching/
---

<div class="news-details">
  {% if site.lectures  %}
    <table>
    {% assign lectures = site.lectures | reverse %}
    {% for item in lectures limit: site.lectures_limit %}
      <tr>
        <td class="date">{{ item.date | date: "%b, %Y" }}</td>
        <td class="announcement">
          {% if item.inline %}
            {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
          {% else %}
            <a class="news-title" href="{{ item.url | prepend: site.baseurl }}">{{ item.title }}</a>
          {% endif %}
        </td>
      </tr>
    {% endfor %}
    </table>
  {% else %}
    <p>No lectures so far...</p>
  {% endif %}
</div>

