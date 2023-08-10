---
layout: single
title:  "Quantum Computers and AI"
date:   2023-08-09 20:37:00 +0300
author: Kuyta
comments: true
excerpt: What are quantum computers? What are their applications in AI?
header:
  overlay_image: /assets/images/quantum-ai/city.jpg
  overlay_filter: 0.5
categories: AI quantum lk-99
toc: true
---

Can you believe that AI has a very big technological limitation? Right now, all those generative AI models like ChatGPT, LLama 2, and Bard can seem to do anything that you give them. However, to train ChatGPT, OpenAI needed to run 285,000 processor cores in total and 10,000 graphics cards for days, equivalent to about 800 petaflops (1 peta = 1,000 tera = 1,000,000 giga = 1,000,000,000 mega) of processing power. It’s right to say that training and using AI models is very expensive, costing millions of dollars. Even then, these AI models cannot go beyond the processing powers that they have been given. With the advancements in quantum computing, there is a possibility of significantly enhancing the performance of machine learning and AI in the following years and even months.

# What are quantum computers?
A _quantum computer_ is basically a computer that exploits quantum mechanical phenomena. In short, at very small states, physical matter exhibits properties of both particles and waves, and quantum computing leverages this phenomenon that even classical physics cannot explain. We shall dive into how quantum computers really work.

# How do they work?
In a classical computer, the information is stored using _bits_. They can be in a state of 1 (electric on) or 0 (electric off), which means that they are deterministic and can only be in one of those mentioned states. By contrast, quantum computers work in _qubits_ which can be in both states of 0 and 1 with equal probabilities, which is called a _superposition state_. When you measure a qubit with equal probabilities to be both 0 and 1, you get the probabilistic output of a single bit (either 0 or 1), very much like Schrödinger's cat. Quantum computers manipulate these particles in a way to get the desired outcome. 

If we were in a perfect world where you could have perfect qubits, then we would be fine creating infinite qubits without any problem. But we are not in a perfect world. So, it has been proven that creating a qubit is very challenging. There are a couple things that can make quantum computers suffer from _quantum decoherence_ which introduces noise into calculations (remember that a _qubit_ should have an equal probability of being 0 and 1). To reduce _quantum decoherence_, qubits should be placed far apart from each other because even a qubit can cause noise to a nearby qubit. They also should not have any thermal noise. Which means that they should be kept at very low temperatures of 0.015 K (-273.135 ºC or -459.643 ºF). Imaging operating a quantum computer, liquid nitrogen isn’t even that cold. It’s mind boggling how scientists can get that low of temperatures.

## Everyone is talking about LK-99, what’s the deal with it?
Traditionally, quantum computers are made out of _superconductors_. They are some kind of materials that have very interesting capabilities (watch [this](https://www.youtube.com/watch?v=h6FYs_AUCsQ) great video to get a physical understanding of superconductors). Also traditionally, superconducting materials were only able to superconduct at very low temperatures, around 3 K (-270.15 ºC or -454.27 ºF). Even the highest temperature at which a superconductor can superconduct at 1 atm is around 150K (-123.15 ºC or -189.67 ºF), which is still very very cold. But now, named after its discoverers and its year of discovery (Sukbae Lee and Ji-Hoon Kim, 1999), LK-99 is set to be a superconducting material that can superconduct in **room temperatures**. To get the importance of this founding, physicists say that if you really made a room-temperature superconductor tomorrow, you would be famous and you would win the Nobel Prize in physics. So, this is a BIG DEAL. While there are a lot of speculations and criticisms of LK-99, scientists around the world have made big progress in recreating the superconducting material. It seems that this superconducting material might actually be real. LK-99 would allow us to have near-room-temperature quantum computers without most of the limitations mentioned. With that we could start using quantum computers in our homes, yey, who wouldn’t want something like that?

# What can quantum computers accomplish?
Recent ground-breaking discoveries aside, quantum computers can do things that traditional computers simply cannot (I will talk about AI in a moment). Thanks to having superposition in qubits (having both states 0 and 1 at the same time), we can do calculations in _parallel_ while classical computers can only do calculations in _linear_. In simple terms, this means that quantum computers can solve problems by considering all the possible solutions at the same time to that problem to find the correct one. For instance, quantum computers could be great at solving the _traveling salesman problem_, which is simply the problem of finding the shortest total path between different locations. Quantum computers can also crack some low-level cryptography algorithms (by low-level, classical computers still need years of processing power to crack the algorithm). In short, quantum computers can allow us to process information really fast and calculate simultaneously.

# Applications of quantum computers in AI
AI and machine learning models now use tons of data to train. They also need to have billions of neurons to generate what we see. For example, OpenAI’s GPT-4 uses nearly 200 billion neurons to process tons of information. Here, quantum computers can help: they can allow us to process information and data much more quickly compared to classical computers. This, then, could be the opportunity for us to test with neurons and change the values of neurons at speeds never before imagined. Quantum computers' ability to process information is also useful when training AI and machine learning models. As mentioned, OpenAI used nearly 800 petaflops of processing power to train ChatGPT. The reason is simple: they needed that much power to process terabytes and terabytes of data scraped from the web. Quantum computers would allow us to train models in mere seconds thanks to their parallel processing.

Quantum computers’ application in AI has great potential, from training datasets to analyzing generated content. However, setting LK-99 aside, we still have a lot of time ahead of us until we see real-life use cases of quantum computers in AI. In a couple of years, however, we could see more companies and businesses using quantum computers for various purposes. Overall, the future is bright, and I’m looking forward to it.

# ChatGPT lost users?
![chatgpt-lost-users](/assets/images/quantum-ai/quantum-ai.png){:class="img-responsive"}

As this blog is a _biiiiiiig fan /s_ of ChatGPT, it is quite funny that it had a decrease in monthly visits to the website in June 2023. At first, it seems that this is a big issue regarding generative AI; however, we should consider the timing of this decrease in traffic. The school year is over, and usage of ChatGPT could have seen a seasonable decrease due to reduced student usage. And it feels like every tool these days now has generative AI integrated into it, so going directly to ChatGPT’s site from OpenAI is simply less needed.

---

**Kuyta:** Oh wow, it has really been a while since we posted anything to this blog. Our [last post](https://cookieblog.net/ai/chatbots/text/2023/05/14/text-generating-models) was from May, and looking back, we probably should’ve posted something; even a simple and short article would have been fine. But we didn't, and it’s _fiiine_. Also, expect the last part of _History of AI_ from Sir Potata in the following weeks (hopefully).