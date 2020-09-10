---
layout: post
date: 2020-09-10
title: eSports athlete portrait and analysis via Machine Learning
inline: false
---

### Project Description
An actual problem in the field of eSports competitions deals with analysis of athlete when he playing a game, particularly shooters like Counter-Strike (CS:GO). The subject of interest is the behavior of player, and his skills, the dependences and/or causalities between different player characteristics. For example, we can study the relations between emotions and scores in the game, or between some biometric characteristics and the level of his skills.

The data obtained from player can be multimodal, i.e. can include the information from both different biometric sensors and the history (or log) of game events. We can consider sensors such as mouse and keyboard, eye-tracker, ECG, EMG, accelerometers (on fingers or hand), video cameras, microphones (speech and team communication study) as well as psychological questionnaires.

Our upcoming goal is to build a portrait of the athlete using gameplay and sensor data, to classify him to certain type of players (as optional), and to figure out his weak points and recommendations what him to work on.
It implies data preprocessing, skilful feature engineering and data modeling using Machine Learning methods. 

The following tasks can be considered:
Aiming, laying and fine-tuning the sight. A particular interest is paid to the mouse movement and the time before fire and right after start first firing in the shooter game. Usually, a player moves a mouse when aiming the gun, then start firing, and then aiming to the enemy more precisely i.e. making fine-tuning the sight and fire more and more. We need to investigate what is the nature of the skills and the manner of aiming and firing, to distinct patterns (types) of such behavior of mouse moving, time spent and their relation to the effectiveness of firing. We can study mouse, eye-tracker, other sensors if necessary and the log (*.dem) of the game. We need to describe the portrait of a firing player as a set of distinctive and relevant features.  
Shooting duel. The task is similar to the previous one, but here we are interest in the whole duel between two players rather than only aiming time intervals. We consider only periods when one player attacks another (and so, first, we need to distinct these periods) and we study the features of player behavior during the duel: the player manner of movements,  firing and so on. Also, we need to estimate player duel skills, i.e. to predict his effectiveness using gameplay (*.dem) and sensor data. 
Intra-command communications via speech recognition. Players within the team talk with each other. They have different roles and different manners of communication. We need to distinct such types of their behavior by analysis of their speech, lets using only text at first. Also, we have to draw relations between features from speech and their player psychotypes.
Prediction of player skill from gameplay data. First, we focus deep on analysis of gameplay data without any sensors, but using a perfect free dataset of game logs given from https://www.hltv.org/. The task is to describe player behavior by a set of features in order to predict player (or the whole team) skills that can be measured as kill-death ratio, or as total score, or as a common rank of the team. The manner of player motion, firing, special expedients usage (like fire from the duck pose, etc.) have to be taken into account.

### References
Drachen, A., Canossa, A., & Yannakakis, G., N. “Player Modeling using Self-Organization in Tomb Raider: Underworld.” In Proceedings of the IEEE Symposium on Computational Intelligence and Games. Milan, Italy, September 7-10, 2009.
M. Seif El-Nasr, A. Drachen, and A. Canossa, Game Analytics: Maximizing the Value of Player Data. Springer Publishers, 2013.
J. Gow, R. Baumgarten, P. Cairns, S. Colton, P. Miller. 2012. Unsupervised modeling of player style with LDA. IEEE Transactions on Computational Intelligence and AI in Games 4, 3, 152–166.
D. Hooshyar, M. Yousefi and H. Lim, “A systematic review of data-driven approaches in the player modeling of educational games,” Artificial Intelligence Review, pp. 1-21, 2017
D. Buckley, K. Chen, and J. Knowles, “Predicting skill from gameplay input to a first-person shooter,” in Proc. IEEE Conf. Comput. Intell. Games (CIG’13), Aug. 2013, pp. 105–112.