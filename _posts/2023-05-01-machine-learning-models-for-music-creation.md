---
layout: single
title:  "Machine Learning Models for Music Creation"
date:   2023-05-01 9:01:00 +0300
author: Kuyta
comments: true
excerpt: I created many cool pieces with AI. Here are some of them.
header:
  overlay_image: /assets/images/music-ai/music-disc.png
  overlay_filter: 0.5
categories: AI music
toc: true
---
**Kuyta:** Welcome back everyone! For today’s blog post I will be talking about AI and machine learning again. But this time, 
I will show the machine learning models for sound generation, especially music creation. I, myself, am very keen on music. 
I love to listen to music. However, my listening genre is mostly different from others (just look at my [top ten played pieces](https://imgur.com/a/gBZiBQn)). 
I love classical and electronic music, and I am not a fan of music that has lyrics. I also tried to [make music](https://youtu.be/4-7wokBjLA0).

(**Sir Potata:** He’s an elitist when it comes to music. STAY AWAY. But check out his music. It’s pretty cool.)

**Kuyta:** So that’s why I wanted to write this post on music creation. I want to show everyone AI’s music creation.

# How does Music Generating Models Work?

In [my other post](https://cookieblog.net/ai/2023/04/24/how-does-ai-work.html), we learned how machine learning models actually work. Sound-generating models are not an exception to what I mentioned. 
Basically, we gather music files (like the ones in [this dataset](https://www.kaggle.com/datasets/googleai/musiccaps)) that have many different styles, like classical, electronic, hip-hop, rock, metal, 
etc. We also should know every single music file’s metadata, like its lyrics, type, genre, and artist who made the music. After that, 
we can train the machine learning model on the gathered dataset. Some music-generating models will also have a language model attached to them. 
With the language model, we can write anything that we want to be made, and the music-generating model can make it.

# Cool Machine Learning Models for Music Creation

## [MusicLM](https://google-research.github.io/seanet/musiclm/examples/)

First music generating model that I came across was Google Research Team’s MusicLM. This model is actually one of the newest ones, published on January 26. This model can create a music file from a text description of the music wanted. Let’s look at two of the 30-second pieces that the model created.

{% include wavfigure.html loc="/assets/sounds/music-ai/epic-soundtrack.wav" caption="Text Description: Epic soundtrack using orchestral instruments. The piece builds tension, creates a sense of urgency. An a cappella chorus sing in unison, it creates a sense of power and strength." %}

{% include wavfigure.html loc="/assets/sounds/music-ai/techno-sounds.wav" caption="Text Description: Industrial techno sounds, repetitive, hypnotic rhythms. Strings playing a repetitive melody creates an eerie, unsettling atmosphere. The music is hypnotic and trance-like, and it is easy to get lost in the rhythm. The strings high-pitched notes pierce through the darkness, adding a layer of tension and suspense." %}

As seen from the second example, the model can replicate human singing and humming. While it cannot replicate real lyrics, it can still give the impression that it is saying something in a different language.

The model can also replicate a melody given to it and create a new music from the given melody.

{% include wavfigure.html loc="/assets/sounds/music-ai/bella-ciao-string-quartet.wav" caption="Humming of Bella Ciao and string quartet" %}

{% include wavfigure.html loc="/assets/sounds/music-ai/jingle-bells-opera-singer.wav" caption="Jingle Bells with marimba and opera singer" %}

{% include wavfigure.html loc="/assets/sounds/music-ai/ode-to-joy-jazz-with-saxophone.wav" caption="Humming of Ode to Joy and jazz saxophone" %}

One of the interesting things that this model can do is it can create a whole piece from different text descriptions. It basically can transition from anything to anything without a problem.

{% include wavfigure.html loc="/assets/sounds/music-ai/story-mode-long.wav" caption="0:00-0:15 jazz song.
0:15-0:30 pop song.
0:30-0:45 rock song.
0:45-1:00 death metal song.
1:00-1:15 rap song.
1:15-1:30 string quartet with violins.
1:30-1:45 epic movie soundtrack with drums.
1:45-2:00 scottish folk song with traditional instruments.
" %}

Overall, this model is very capable of generating music, and I really like the style that it creates. I should also mention that there isn’t a place where you can try this model for yourself. I took the audio from the paper itself, and there are many more examples of what this model can do in it.

## [JukeBox](https://openai.com/research/jukebox)

Jukebox was made by the infamous OpenAI. By capturing over 1.2 million songs and their lyrics over the internet, they created this model to generate a song by the given genre, artist, and style. Over the 7000 songs that they created, I chose some of the best ones from the list, and here they are.

{% include soundcloudembed.html number="789400390" link="https://soundcloud.com/openai_audio/jukebox-265820820" title="Classic Pop, in the style of Frank Sinatra - Jukebox" %}

{% include soundcloudembed.html number="788111551" link="https://soundcloud.com/openai_audio/jukebox-341290988" title="Heavy Metal, in the style of Rage - Jukebox" %}

{% include soundcloudembed.html number="802881586" link="https://soundcloud.com/openai_audio/rock-in-the-style-of-elvis-4" title="Rock, in the style of Elvis Presley - Jukebox" %}

{% include soundcloudembed.html number="794254063" link="https://soundcloud.com/openai_audio/jukebox-duet-2" title="Jazz, in the style of Frank Sinatra & Ella Fitzgerald - Jukebox" %}

## [BoomyAI](https://boomy.com/)

Well… This AI is actually incredible. I am very impressed with it. You just create an account on the platform and start creating music of your own. Basically, you just select your music type, instruments and sounds. Then, you click “create” and voila. You now have created a song. I played with this model for some time and I created many songs. Here are some of my creations. 

{% include wavfile.html loc="/assets/sounds/music-ai/boomy1.wav" %}
{% include wavfile.html loc="/assets/sounds/music-ai/boomy2.wav" %}
{% include wavfile.html loc="/assets/sounds/music-ai/boomy3.wav" %}
{% include wavfile.html loc="/assets/sounds/music-ai/boomy4.wav" %}

## [Beat Blender](https://experiments.withgoogle.com/ai/beat-blender/view/share)

Beat Blender is an experiment made by Google engineers to create music with simple beats. From the main beat that you create, the model generates more with four different main styles called "4 corners".

![beatblender](/assets/images/music-ai/4-corners.png){:class="img-responsive" width="700"}

While the model is not that advanced compared to other ones we analysed, the system that they designed is very simple and useful. Anyone with an interest in music creation can try this model. People who are also interested in machine learning can try to learn how the system actually works.

## [Runn and Sornting](https://vibertthio.com/)

RUNN and Sornting were made by a single software engineer. The games are actually very different from what we mentioned above. These are not mainly for the music generation. They are actual games. Both of them use machine learning models to generate music, and the game revolves around that generated piece.

![runn](/assets/images/music-ai/runn.png){:class="img-responsive" width="600"}

RUNN has the infinite-runner type but it is actually not infinite? For me, this game was very, and I mean very, hard to play as a single person. You might actually beat (haha, a pun because the game is about beats) it with two players.

![sornting](/assets/images/music-ai/sornting.png){:class="img-responsive" width="600"}

Sornting is a game about placing the missing parts of a song. Unlike the other one, this one is very enjoyable because every time you play, the pieces are different from the last time (because the model creates new music every time). I actually beat the game with zero mistakes. 😎

# Ethics of Music Generating Models

It is not all butterflies and rainbows in the music generation, however. Everything that I mentioned is really great, and I actually wonder what will happen next. But I am also concerned about the ethics of creating these models. As mentioned, OpenAI used over 1.2 million songs to train their model, and MusicLM used over 280,000 hours of music to train their model. A high percentage of those pieces were probably used without the consent of the actual creators of the music. Or even worse, they still do not know that their songs were used to train AI. This, firstly, violates the copyrights of the owner. Secondly, this usage is very harmful to the creator, as people can type something like "Taylor Swift style" into the text prompt and get something that has the style of Taylor Swift.

I also fear that the increasing usage of these kinds of machine learning technologies might make newcomers to music composition sad and break their dreams. As seen from the examples by BoomyAI, the AI-generated music is really hard to differentiate from the real ones. This can have big implications in the future if this situation is not dealt with.

{% include figure image_path="/assets/images/music-ai/music-ai-meme.jpg" %}

(Oh btw, I copied the starting sentence from Hikaru. If you know you know.)
