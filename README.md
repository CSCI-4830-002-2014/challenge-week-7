# Name

Niklas Fejes

# How many points have you earned?

100/100

# How many hours have you spent on this?

6 hours

# What is the most difficult part about this week's challenge?

Using Tableau. Since it doesn't run under Linux I've had to switch between Windows and Linux several times
while doing the challenges.

# Show and tell (10 points)

## Link (2 points)

[title-of-the-article](http://link-to-an-article-using_data_to_solve_a_social_problem)

## Explain why you found the project interesting. (8 points)

fill-in-your-answer

# GDELT (I) (5 points x 6 + 20 points x 3 = 90 points)

## Checkpoints

### 1 (5 points)

![image](screenshots/checkpoint1.png?raw=true)

### 2 What types of questions do you think this database could provide insight into? (5 points)

The database can answer questions about how political events and actions affect each other, 
with respect to many different variables such as the person/group behind the event and
religious or ethnical backgrounds. One specific question one might ask is how a specific 
politicial, say a president, has made influence on the world throughout his entire career.

### 3 (5 points)

![image](screenshots/checkpoint3.png?raw=true)

### 4 (5 points)

![image](screenshots/checkpoint4.png?raw=true)

### 5a (5 points)

![image](screenshots/checkpoint5.png?raw=true)

### 5b Do you have any thoughts on why these events are missing geographic information? (5 points)

The three most common event types with null values are 10, 42 and 43.
These codes represent *Make public statement*, *Make a visit* and *Host a visit*.
A public statement would likely not have a geographic location since it is likely not made
at a specific location. The visits should have geographic locations, but it might be the 
case that the location is too general (say just a Country) to be in this field, or the two
codes might just have many entries in this data set.

## Challenges

### 1 (20 points)
If the demonstrations made an impact, it is likely that there should be a higher amount
of events related to environmental issues the following period of the demonstration.
Since the demonstrations also might be present in the data set it might be necessary to 
filter the data in some way, for example by filtering/mapping events made by a specific
government or the `AvgTone` data field which should be positive if there was an positive
impact.

### 2 (20 points)

![image](screenshots/challenge2.png?raw=true)

### 3 (20 points)

![image](screenshots/challenge3.png?raw=true)

The data, which is filtered by `Actor1Code` so that it contains any event where that code
ends with `ENV` is ploted for 6 days around the day of the event. The y-axis shows the
number of events, and the color shows the average Goldstein index.

The data indicates that on the day of the conference there was an increase of events with
positive Goldstein scale index, but it is impossible to determine whether this is due to
the demonstrations or the conference itself.

