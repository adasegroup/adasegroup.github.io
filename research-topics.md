---
layout: page
title: Open Positions & Theses
permalink: /open-positions-theses/
---


### We are looking for ambitious students to join our group!

Students from universities in Moscow are welcome to join and do research with us in the form of projects, dissertations and individual studies.

Feel free to browse through the topics and [contact us](/contact/) for further questions.

## Theses Topics

***Interested in doing research with us?*** 
We offer multiple Master theses, Guided Research projects and collaborations in the areas of data mining, machine learning and computer vision. A non-exhaustive list of open topics is listed below.

If you are interested in a thesis or a guided research project, please [contact us](/contact/) with your CV and transcript of records via email. We will arrange a meeting to talk about the potential topics.

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

## Openings 

**Interested in working with us?**

We are looking for talented and highly motivated computer scientists (or people with a related background) interested in the design, development, and analysis of novel machine learning methods. Particularly, we are currently offering positions focusing on the following topics:

- Machine learning for graphs / geometric deep learning
- Robust and adversarial machine learning
- Transfer learning
- ML models for temporal data (e.g. event sequences)
- Anomaly and outlier detection
- Uncertainty in ML (e.g. Bayesian neural nets)

The developed methods will be applied and evaluated in various domains such as the natural sciences (e.g., molecular graphs), the field of engineering (sensor and diagnosis signals), and the web (e.g., social networks, knowledge graphs).

**Candidate skills & profile**

- University degree (M.Sc.) with very good grades in Computer Science or related fields (For PostDocs: Ph.D. in the corresponding area and publications at the following venues: ICML, KDD, NeurIPS, ICLR, or WWW)
- Strong background in machine learning / data mining
- Strong programming skills in at least one programming language (preferably Python and with experience in TensorFlow, PyTorch or similar)
- Good English language skills (your responsibilities include to write publications and to give international presentations)
- Knowledge of Russian is an asset, but not a must (e.g. participation in national conferences)

** How to apply? **

Please [contact us](/contact/) and send your application (in a single file in pdf format; no links to external files; in English or Russian) by email; subject: PhD Application). The application should include:

- a brief statement of interests in the form of a motivation letter, 
- a curriculum vitae, copies of certificates, 
- a summary/abstract of the master thesis, 
- and (if already available) a list of publications. 

A list of references (names, contact information) is helpful as well. 

Applications will be considered as they are received and until the positions are filled.

{% assign openings = site.openings %}
{% include _content/openings.html openings=openings %}
