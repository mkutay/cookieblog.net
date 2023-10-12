---
layout: single
title:  "Text Generating Machine Learning Models"
date:   2023-05-14 20:37:00 +0300
author: Kuyta
comments: true
excerpt: I have tested some text generating models, chatbots and more. Here are my comments.
header:
  overlay_image: /assets/images/text-ai/2.jpg
  overlay_filter: 0.5
categories: AI chatbots text
toc: true
---
**Kuyta:** Hello everyone!! (Brilliant move) I wrote IAs this entire day, and I am exhausted by it. So, I am going to write about something that I like writing about, which is AI (funny that I really like talking about AI and I really don’t like writing about IA, which is the reverse of AI :hmmm:). Aaaaanyway, in today’s post, I am going to talk about text-generating models, large language models, and talking chatbots. Let’s get to business.

# What are large language models?

Well, they are language models consisting of neural networks with billions of parameters and weights (to learn more, see my post on how AI works). Large language models are trained on really big datasets, like around half a billion tokens (1000 tokens are around 750 words). These datasets consist of unlabeled text, and the model trains on them using self-supervised training. Unlabeled text means that the dataset is raw and it consists of paragraphs and paragraphs of text, and they are not labelled to specify what the overall thing is mentioned in the text. A self-supervised trained model can identify patterns and structures in the thing that it has trained on; in this case, it is raw text. These kinds of large language models emerged around 2018, and they perform very well in different kinds of tasks. (I’m sure that Sir Potata will write about what happened around 2018–2020 and the boom of large language models in her next post, but until then, we shall wait. ~~maybe not for so long~~).

The first big boom of large language models in 2018 shifted the focus of natural language processing research away from the previous paradigm of training specialised, supervised models for specific tasks. These specific tasks included sentiment analysis, classification, and detecting spam emails. While these specific task models are in use, most of the present large language models are not specialised in certain tasks.

I should also mention that their skill level and what they can accomplish are dependent on the dataset that they are trained on. It is also connected with the amount of resources the model had access to. These resources include the first-and-foremost dataset, then parameter size, computing power, and neuron depth (huh, now I realise that maybe quantum computers can be used to increase the computing power allocated to the training of these models. Maybe I’ll write a post on it; we’ll see, I guess). This means that the power of large language models is not dependent on additional breakthroughs in design or the mathematics behind them.

# What can large language models even accomplish?

The working principle of large language models allows them to be veeeery flexible. I mean, they can literally do anything related to raw text and language processing. They only need a _prompt_ to complete it.

```text
Decide whether a Tweet's sentiment is positive, neutral, or negative. 
Tweet: I loved the new Batman movie! 
Sentiment: 
```

Like above, you give them a prompt that can be completed, and they will complete it with what they get from the prompt. Models can get what the user is saying through natural languages.

You can even _fine-tune_ a model to your liking. It works by giving the model a couple dozen prompt-completion pairs to further train on. Then, you can ask the model to complete a prompt you give according to your fine-tuning.

```text
{"prompt":"Overjoyed with the new iPhone! ->", "completion":" positive"}
{"prompt":"@lakers disappoint for a third straight night https://t.co/38EFe43 ->", "completion":" negative"}
```

The funny thing is that last September I tried to fine-tune a model for a chatbot. Note that this was waaay before ChatGPT was even a thing. I used one of my friends' messages on a Discord server to train the data. Aaaand, it was kind of successful. (Oh, btw, they are in Turkish. If you want me to translate them to English, you can comment on this post to let me know about it.)

![dc-1](/assets/images/text-ai/dc-1.png){:class="img-responsive" width="300"}

![dc-2](/assets/images/text-ai/dc-2.png){:class="img-responsive" width="300"}

![dc-3](/assets/images/text-ai/dc-3.png){:class="img-responsive" width="300"}

# Most used large language models

## GPT-3, 3.5, 4

GPT-3, GPT-3.5, and GPT-4 are developed and trained by OpenAI (I mean, if you don’t know this company, then why are you even here?). They are basically what I mentioned above as examples of large language models. The user provides them with a prompt, and they generate a completion according to it. The Discord bots I made are made using GPT-3. These models are widely used around the globe for different applications, from medicine to customer support.

## BardAI

Now let’s talk about chatbots. Chatbots are made using large language models; you put the entire conversation on the prompt, and then you wait for its completion. With the release of ChatGPT, there are so many more chatbots that anyone can toy with. Let’s talk about some of them.

BardAI is one of the newly developed chatbots by Google. So, Google, I am going to be honest; this chatbot is simply _trash_. It is totally unlike other chatbots, in a bad way. Firstly, this chatbot is very generic. It cannot write interesting things, and it only writes what I can find with a single Google search. It also really cannot describe useful information. When I asked it about quantum computing in simple terms, it listed a Wikipedia article on quantum computers (I mean, it wasn’t literally a Wikipedia article, but you got me). I believe that this is the reason, as this AI chatbot is very new and needs a lot more time to develop. But until then, I am not going to use this chatbot for any useful stuff.

## BingAI

Well, I cannot say much about this AI as I use a Mac and you can only access it through Microsoft’s Edge. Which is stupid, I mean, why would you want to do this? This is such a Microsoft thing to do, really. From what I heard, this bot is much better than BardAI, and it can actually do useful stuff. It seems that it will also get an update where you can upload images to incorporate text generation with image classification to increase your productivity. But other than that, I don’t have much to say about this AI.

## ChatGPT

**Sir Potata:** ![meme](/assets/images/text-ai/meme.jpg){:class="img-responsive" width="300"}

**Kuyta:** THE INFAMOUS CHATGPT. _Kuyta, take a deep breath._ Now, let’s talk about ChatGPT. It was introduced to the world on November 30, 2022, and since then, the world has not been the same as it was before. Basically, this chatbot is based on GPT-3.5 (and GPT-4 for paid users) and, more or less, has the same capacity as them. The main difference between ChatGPT and other GPT models is that ChatGPT can remember what was discussed a few minutes ago. This means that it can have a human-like conversation with anyone. Ok, well, that’s great! What’s the problem with that? The thing is that this chatbot is SO OVERUSED. So many students and journalists use this model to write essays, articles, journals, etc. However, the model is not very accurate on most of the stuff it writes, and it can make significant mistakes and errors. I also believe that if a teacher gives you an essay assignment, you shouldn’t use any AI bots to write it; only you should write it. Your teacher wants you to **learn**, not just copy a chatbot.

Another point I want to make is that people use these chatbots in situations where you definitely should NOT use a chatbot that can make errors. Around January of this year, a lot of people kind of started using ChatGPT for medical emergencies instead of calling medical support. This is just ridiculous.

I should also mention that it is not just bad for ChatGPT. While it is not as useful as it could be, it is actually very useful _as a tool_. ChatGPT cannot write you a full 100 lines of code that is perfect for what you want to do, but it can write a half-assed piece of code that you can use to add what you want. It can create code templates to get you started with your project. You can also ask about a topic, and it can explain to you, in simple terms, what it is. These actually make ChatGPT very useful to some extent.

These use cases for these chatbots are actually endless, but we should not use them extensively for literally everything. Like, I should not use ChatGPT to write this post about ChatGPT; it is stupid. I believe that these chatbots have a very bright future, but we all should be veeeeeery careful about what and how we use them.

# Jailbreaking

Maybe you have heard about jailbreaking a chatbot, and maybe you have not heard of it. So, let me explain. Jailbreaking is a trick to make a chatbot do what it shouldn't or cannot do. For instance, when you ask ChatGPT to give you a summary of how to make a bomb or any dangerous stuff, it gives you a generic message on why it cannot give you a summary of how to make a bomb or anything like that. Jailbreaking in this situation is to make the chatbot give you a summary of how to make a bomb, or something close to it. Basically, jailbreaking makes the bot answer harmful, offensive, or dangerous questions that the user asks. Because of obvious reasons, I am not going to give detailed instructions on how to jailbreak an AI, but all around, you can do this by creating a long storyline that the chatbot is in and overly complicating things so that the detection software does not detect that what you are asking is harmful. OpenAI, or AI companies, try to fix this problem by adding special cases of jailbreaking prompts to the dataset, but the thing is that every time a prompt happens to not work, people can create new prompts to jailbreak the chatbot again. This is simply an endless cycle.

The problem with jailbreaking is that people will, and always will, try to exploit these chatbots. No matter how secure or intelligent it is, people will try to make it do things that it is not supposed to do. With that said, jailbreaking chatbots might also condone people doing bad things to others. And it also violates the laws of AI, if there are any.

In conclusion, I feel that text generating AIs are really really scary when you think about it. And I literally don’t know what will happen tomorrow with large language models, chatbots, and even ChatGPT. Well, actually, I hope that the latter dies. I should mention that this post is the longest post that I have written for the Cookie Blog and I mean, wow. Hope to see you on the next one. Biy!
