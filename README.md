# Name

Irfan Nadiadi

# How many points have you earned?

100/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

3.5

# What is the most difficult part about this week's challenge?

Nothing was too difficult, though it took me longer than expected to grasp the organization of the GDELT dataset.

# Show and tell (10 points)

## Link (2 points)

[Extreme Event Detection in Online Social Media using Social Focus](https://sites.google.com/site/kddlesi2014/program/papers)

## Explain why you found the project interesting. (8 points)

Note: You will have to click the accepted papers link. This paper is on page 5.

This was a paper presented at a KDD 2014 workshop focused on learning about emergencies from social information. Researchers were interested in using Twitter to identify focused discussion as it related to extreme events/emergencies. For example, researchers used the Twitter API to pull tweets around the time of Occupy Wall Street. Since Tweets can be geotagged, they were able to create heat maps showing increased Twitter activity using hashtags such as #OccupyWallStreet, which coincided with cases of police abuse, and particularly when the NYPD tried to remove protestors from Zucotti park.

Social Media is a very versatile outlet, especially in the context of data science. It allows people to very rapidly communicate with each other, and when this data can be analyzed in real-time, powerful applications can be developed to have a positive social impact.

# GDELT (I) (5 points x 6 + 20 points x 3 = 90 points)

## Checkpoints

### 1 (5 points)

![image](Checkpoints/Check\ 1.png)

### 2 What types of questions do you think this database could provide insight into? (5 points)

The different CAMEO codes are very thorough in the types of events they can describe, so an obvious use of the data would be identifying locations around the world where conflict is prevalent. This database could also provide a good indicator of overall population happiness/conflict/cooperation around the world, as it relates to current events.

### 3 (5 points)

![image](Checkpoints/Check\ 3.png)

### 4 (5 points)

![image](Checkpoints/Check\ 4.png)

### 5a (5 points)

![image](Checkpoints/Check\ 5.png)

### 5b Do you have any thoughts on why these events are missing geographic information? (5 points)

The most popular events illustrated are for events described by "Make Statement", "Appeal", or "Make/Host a visit". These are likely missing geographic information because they are not highly location-sensitive events, and may have taken place where geographic data was unavailable, or where the data was entered incomplete.

## Challenges

### 1 (20 points)

To show that the marches made a difference at the summit, one would want to determine how often the marches were being mentioned on and after Sept. 23rd, and how many related policy changes occurred after Sept. 23rd. If there were many relevant policy changes shortly after Sept. 23rd, this would be a good indicator that the marches had a positive effect.
The GDELT data can be helpful for this, as it can identify features such as mentions, policy changes, and goldstein scale following the marches.

### 2 (20 points)

![image](Challenges/Challenge\ 2.png)

### 3 (20 points)

![image](Challenges/Challenge\ 3.png)

The Left plot shows sum of articles where the actor code was ENV, or relating to environment. Over the course of four days, it is observed that the number of relevant articles significantly increases on the day of the marches, indicating higher interest in environmental concerns.

The center plot shows the goldstein index, and particularly a decreasing trend until the day of the marches, when the index takes a sharp turn and begins increasing.

The right plot is not as descriptive as was desired, but it shows the number of records with event codes pertaining to policy changes or reform. For the three days beginning on the 23rd, there is a higher number of policy events than before the marches, though more data for days prior to the marches is necessary to draw a stronger conclusion.

Given these three plots, the evidence suggests that the marches did have an overall positive impact. Plotting more data for days prior to and succeeding the marches could further support this conclusion.