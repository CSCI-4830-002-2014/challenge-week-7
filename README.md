# Name

Brian Newsom

# How many points have you earned?

100/100

(Make your own calculation and replace the number 0 with the points you think you've earned.)

# How many hours have you spent on this?

3-4

# What is the most difficult part about this week's challenge?

Figuring out a methodology to discern the effect of the climate march, then enacting it in Tableau - I still struggle with Tableau quite a bit, it is definitely non-trivial still.

# Show and tell (10 points)

## Link (2 points)

[Ushahidi: Machine Learning for Human Rights](http://dssg.io/2013/07/15/ushahidi-machine-learning-for-human-rights.html)

## Explain why you found the project interesting. (8 points)

This project regards machine learning and text analysis of text messages, tweets, and the like.  It is very easy to understand a poorly written text as a human, but teaching a computer to do the same is non-trivial.  I thought it was really interesting to hear that the people were previously hand tagging each entry, the sheer amount of man power required for this surprises me that it'd be worth it in order to learn info and respond quickly to situations.  The article provides interesting insight into the shaping of the problem, which narrowed the problem into detecting a language, guessing a category, extracting locations, and flagging duplicates.  Within the limited scope the project seemed to be quite successful, which is awesome.

# GDELT (I) (5 points x 6 + 20 points x 3 = 90 points)

## Checkpoints

### 1 (5 points)

![image](cp1.png?raw=true)

### 2 What types of questions do you think this database could provide insight into? (5 points)

This is a really interesting and massive dataset! From what I can discern from the documentation, one of the most interesting insights it could provide is how events effect each other.  For example, how an Al Qaeda leader announcing something may affect the President's contributions or the number of events that come from political leaders.  There is tons of data, and it could be applied in countless ways to learn interesting things.  It seems to be primarily political and social in nature - which covers so many areas of knowledge.
### 3 (5 points)

![image](cp3.png?raw=true)

### 4 (5 points)

![image](cp4.png?raw=true)

### 5a (5 points)

![image](cp5.png?raw=true)

### 5b Do you have any thoughts on why these events are missing geographic information? (5 points)
The top few events are as follows
```
010	Make statement, not specified below
020	Appeal, not specified below
042	Make a visit
040	Consult, not specified below
```
What we see is a pattern of vagueness, which makes sense with null locations.  Since there is not even info on what the comment is, it is also likely the data has unknown location or the location was not added because there was simply not enough information.  It is worth noting, however, that these may just be the most common occurences because of their vagueness.

## Challenges

### 1 (20 points)
  Proving impact is a difficult task, especially because correlation does not imply causation.  Since I am not incredibly familiar with the data set to this point, I believe the best way to prove that the climate summit made an impact is to examine the response by environmentally concerned political leaders around the world following the march - trying to discover if they made a commitment to changing policies as a result of the march.  With GDELT data, this could be done by using the data prior to and in the days following the climate summit, and looking at political leaders response to see if there is a significant change in the awareness or response (Goldstein scale) that can be attributed to the march.

### 2 (20 points)

![image](ch2.png?raw=true)

### 3 (20 points)

![image](ch3.png?raw=true)

I plotted the actor's who have environmental codes' events prior to (RED) during (YELLOW) and after (GREEN) the march, sized by their Goldstein Scale impact.  My theory is rather hard to discern from this data set.  There seems to be more positive environmental events occuring after the march, but not significantly so.  It seems that the march did not immediately encourage some politicians to speak about the environment or try to pass new bills or anything but this makes sense.  I think an issue with my technique was the limited time frame, as most things in politics are done slowly, so examining over 5 days was probably necessarily.  Also, this experiment depends upon GDELT's categorization of events, and all events counted must have been tagged environmental (which may even be too broad).  All said, I think my experiment provides interesting insight, but is not ultimately conclusive as to analyzing the impact.
