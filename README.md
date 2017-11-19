# HackWestern4
Implementing the idea of "smart" security cameras

# Inspiration
Our inspiration for the project came from the need for improved security and distribution of information during attacks in public areas. This has been a problem recently, since lack of information directly correlates with danger and ultimately puts the lives of thousands at risk. I.e. the recent school shootings which have become widespread in the western world.

# What it does
Our hack uses IBM Watson visual recognition, which is connected to a camera aimed to be pointed at a place of interest (crowd). When a weapon (a banana in our case) is seen in the crowd, it is detected, resulting in the sound of an alarm to alert the public of the situation as well as text messages sent to subscribed users for details about the situation. In our case, we train Watson to think that a banana is a dangerous weapon that should be actively sought out in public. The banana is used as a proof of concept to show that we are able to detect illegal goods like guns, knives or any other dangerous items.

# How we built it
To build this hack, we utilized IBM Watson’s visual recognition, Node.js, MongoDB, and a lot of bananas. Extensive training with Watson was used to detect illegal substances within busy sceneries by taking countless photos and formulating patterns.

# Challenges we ran into
We soon came to realize that IBM Watson is a very complex system, and the visual recognition part gave us trouble with properly identifying the bananas. Figuring out how Watson learns from the photos it is given took the bulk of our time during this hack. It was one of the first time we worked with AWS solutions. This took a good chunk of our time to set up as it is unnecessarily complicated. Not all of us are familiar with the MEAN stack so getting used to it was a learning curve.

# Accomplishments that we're proud of
We are proud that we were able to integrate Watson into our project, because doing this took up most of our time during development. We are also proud of accomplishing the main tasks we set to do during this hackathon.

# What's next for BigBro
Use our technology to detect and notify people about actual weapons. Hopefully even spark more ideas in perfecting and implementing this practice in the real world. We would like to implement an app version too, which uses geolocation to notify nearby civilians about the dangers and how to respond. This would create a safer environment for the world.