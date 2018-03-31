---
layout: page
title: Research Topics
permalink: /research-topics/
---


### We are looking for ambitious students to join our group!

Students from universities in Moscow are welcome to join and do research with us in the form of projects, dissertations and individual studies.

Feel free to browse through the topics and [contact us](/contact/) for further questions.

## Topics

<div class="news-details">
  {% if site.research-topics  %}
    <table>
      {% for item in site.research-topics reversed %}
    
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
    <p>No research topics available at the moment.</p>
  {% endif %}
</div>