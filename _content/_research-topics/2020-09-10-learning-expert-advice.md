---
layout: post
date: 2020-09-10
title: Learning with Expert Advice
inline: false
---

### Project Description
In "batch" learning, an algorithm takes the data (training samples) and returns a hypothesis. We assume a "static" nature of the world: a new example that we will encounter will be similar to the training set. The questions addressed by a classical statistical learning theory are: how many examples are needed to have small expected error with certain confidence? what is the lowest error that can be achieved under certain conditions on distributions? etc.

If the world is not static, it might be difficult to take advantage of large amounts of data. We can no longer rely on statistical assumptions. There is no stationary distribution responsible for the data, so we cannot minimize some expected error. All we want is to survive no matter how adversarial the world is. By surviving, we mean that we do not do too badly relative to other "agents" in the world. The goal of "online learning" is, therefore, to do almost as well as the best agent (this difference is called regret). Note that this does not guarantee that we will be doing well in absolute terms, as the best agent might be quite bad.

In the framework of this project we can consider different problems:
adaptation of fixed-share switching experts (regret is calculated w.r.t. the best combination of available experts) for online linear regression,
shifting experts on easy data, i.e. efficient learning with expert advice, which provides even better performance on "easy" data (e.g., iid data)
adaptation of algorithms to the case of sleeping experts (predictions are not always available)
applications for prediction of electricity prices, electricity consumption, market data, retail data

Students, who want to participate in a mathematical research, will be able to find a vast field of activities, theoretically studying properties of the proposed procedures and proving strict mathematical statements.
 
### Key References
Vladimir V. V’yugin. Online Learning in Case of Unbounded Losses Using Follow the Perturbed Leader Algorithm // Journal of Machine Learning Research 12 (2011) 241-266E. Burnaev, A. Korotin, V. Vyugin. Long-Term Sequential Prediction Using Expert Advice. https://arxiv.org/abs/1711.03194
Вьюгин В.В. “Математические основы теории машинного обучения и прогнозирования” МЦМНО, М.: 2013. - 390 с.
Vladimir V. V’yugin, Vladimir G. Trunov. Universal algorithmic trading // Journal of Investment Strategies. Volume 2/Number 1, Winter 2012/13 (63–88)
 
### Ratio of effort
Theoretical:        50%
Computational:   25%
Programming:    25%
