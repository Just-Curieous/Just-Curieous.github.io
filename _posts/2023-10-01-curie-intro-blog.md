---
layout: post
title: "Curie: Move Scientific Research at the Speed of Thought"
date: 2025-03-16 12:00:00 -0000
categories: blog
---
<div style="text-align: center; color: gray;">
<h2>Toward Rigorous and Automated Scientific Experimentation with AI Agents</h2>
</div>

<div style="text-align: center">
<a href="https://arxiv.org/abs/2502.16069">Paper Link</a> | <a href="https://github.com/Just-Curieous/Curie">Github Link</a> | <a href="#">Demo Link</a>

<p>
Patrick Tser Jern Kon<sup>*</sup>, Jiachen Liu<sup>*</sup>, <br>
Qiuyi Ding, Jingjia Peng, Xinyi Zhu,<br>
Yiming Qiu, Zhenning Yang, Yibo Huang, Jayanth Srinivasa,<br>
Myungjin Lee, Mosharaf Chowdhury, Ang Chen (<sup>*</sup> Equal Contribution)
</p>

</div>
As researchers, this is our daily routine: we dive deep into literature, absorb diverse perspectives, and let these insights fuel our creativity. One moment, you might stumble upon an idea:
- Maybe configuring the ML model architecture differently could boost performance on your dataset,
- Perhaps tuning the LLM reasoning structure might improve a model’s output quality,
- Probably adjusting the atomic composition of a material could make it more efficient for battery storage?

These sparks of intuition are the lifeblood of research. Yet, transforming them into verified knowledge requires something far less glamorous: rigorous, often tedious scientific experimentation. Designing the experiment, executing it, collecting results, analyzing data, and refining your hypothesis—it’s a cycle of trial and error that can consume days, months, even years.

![Curie Overview](/figures/overview.png)
<div style="text-align: center;">
Figure 1. Curie overview.
</div>

However, the problem is, unlike tasks such as trip planning or general problem-solving, scientific progress demands rigor. If science isn’t rigorous, it’s reckless.

### The Challenge: Why Rigor Matters
Scientific experimentation is the backbone of progress, demanding reliability, methodical control, and interpretability to transform curiosity into verifiable knowledge. Without rigor, we risk unreliable results, irreproducible findings, and ultimately, a lack of trust in AI-driven discoveries.

### Introducing Curie: Rigor-Embedded AI Experimentation
We're thrilled to introduce Curie, an AI agent framework designed to bring rigor to automated experimentation. Curie isn't just designed to automate experiments; it's built to empower researchers to reproduce existing work, extend findings, and even challenge established conclusions, fostering a more dynamic and rigorous scientific process, as shown in Figure 2.

![case-study](/figures/case-study.png)
<div style="text-align: center;">
Figure 2. A case study of Curie.
</div>

### How Curie Works: The Rigor Engine
At the heart of Curie lies our innovative Experimental Rigor Engine, designed to maintain agent creativity while ensuring methodological soundness. As shown in Figure 3, this engine is composed of three key modules:
- Intra-Agent Rigor Module: Focuses on reliability within individual agents by enforcing a set of extensible rigor policies. This includes ensuring that experiment plans align with objectives and that setups are reproducible; minimizing the risk of errors.
- Inter-Agent Rigor Module: Maintains methodical control over agent coordination, ensuring correct task transitions and efficient task scheduling. This module orchestrates the workflow between agents, ensuring that the experimental process adheres to a logical sequence.
- Experiment Knowledge Module: Enhances interpretability by maintaining well-structured documentation, enabling seamless collaboration and efficient experiment management. This module addresses the limitations of LLMs in knowledge management by providing a structured and verifiable record of the experimental process.

![workflow](/figures/workflow.png)
<div style="text-align: center;">
Figure 3. High-level Curie workflow with an example task in LLM reasoning.
</div>

### Real-World Validation: The Curie Benchmark
To evaluate Curie's capabilities, we've developed a novel experimental benchmark comprising 46 tasks across four computer science domains. These tasks are derived directly from influential research papers and widely adopted open-source projects, ensuring that they reflect real-world challenges and practical significance. The evaluation shows that Curie significantly outperforms existing AI agent frameworks. When compared to the strongest baseline, Curie achieves a remarkable 3.4x improvement in correctly answering research questions through experimentation. This substantial leap forward underscores Curie's ability to automate complex and rigorous experimentation, marking a major step toward accelerating scientific research and enhancing the reliability of AI-driven discovery.

```
@misc{kon2025curierigorousautomatedscientific,
      title={Curie: Toward Rigorous and Automated Scientific Experimentation with AI Agents}, 
      author={Patrick Tser Jern Kon and Jiachen Liu and Qiuyi Ding and Yiming Qiu and Zhenning Yang and Yibo Huang and Jayanth Srinivasa and Myungjin Lee and Mosharaf Chowdhury and Ang Chen},
      year={2025},
      eprint={2502.16069},
      archivePrefix={arXiv},
      primaryClass={cs.AI},
      url={https://arxiv.org/abs/2502.16069}, 
}
```