---
layout: post
title: "Can AI Conduct AI Research Experiments?"
date: 2025-06-11
categories: [machine-learning, research]
---
<!-- bundle exec jekyll serve -->

<div style="text-align: center; color: gray;">

</div>

<div style="text-align: center">


<p style="font-size: 0.8em; color: grey;">
  <a href="https://www.cs-pk.com/">Patrick Tser Jern Kon</a><sup>*</sup>, 
  <a href="https://websites.umich.edu/~amberljc/">Jiachen Liu</a><sup>*</sup> (Equal Contribution<sup>*</sup>)<br>
  Xinyi Zhu,
  Qiuyi Ding, 
  <a href="https://www.linkedin.com/in/jingjia-peng/">Jingjia Peng</a> (University of Michigan),  
  <a href="https://jxing.me/">Jiarong Xing</a> (UC Berkeley & Rice University), 
  <a href="https://huangyibo.github.io/">Yibo Huang</a> (University of Michigan), 
  <a href="https://yimingqiu.me/">Yiming Qiu</a> (UC Berkeley & University of Michigan), 
  <a href="https://scholar.google.com/citations?user=HtNfeKYAAAAJ&hl=en">Jayanth Srinivasa</a>,
  <a href="https://www.linkedin.com/in/myungjin-lee-5308136/">Myungjin Lee</a> (Cisco Research), <br>
  <a href="https://www.mosharaf.com/">Mosharaf Chowdhury</a> (University of Michigan), 
  <a href="https://stanford.edu/~matei/">Matei Zaharia</a> (UC Berkeley), 
  <a href="https://web.eecs.umich.edu/~chenang/">Ang Chen</a> (University of Michigan)
</p>


<a href="https://github.com/Just-Curieous/Curie/tree/main/benchmark/exp_bench"> 📊 Dataset</a> | 
<a href="https://arxiv.org/abs/2505.24785">📄 Paper</a> | <a href="https://github.com/Just-Curieous/Curie">💻 Github</a> 
</div>

AI for Science is rapidly advancing, with promising early work on scientific automation—such as DeepMind's [AlphaEvolve](https://deepmind.google/discover/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/) and others highlighted in this Nature [paper](https://www.nature.com/articles/s41586-023-06221-2).

Closely related, the automation of AI research represents a key opportunity to accelerate both the advancement of AI itself and broader scientific progress. Unlike fields requiring physical experimentation, AI research is largely digital—well-suited for LLM-based automation. 

Intuitively, peer-reviewed AI papers (e.g., in NeurIPS) along with their open-source codebases, offer a rich source of completed experiments that could, in theory, be repurposed to evaluate AI capabilities in research automation. In practice, however, extracting these tasks is difficult. Papers often present a polished narrative that omits intermediate steps, while critical details—such as the precise conditions under which results hold—are scattered across dense text, supplementary materials, and sprawling repositories.

## Our Contribution: EXP-Bench

To address this challenge, we introduce **EXP-Bench**, a new benchmark designed to make the ever-expanding landscape of published research more accessible for evaluating AI agents in **conducting end-to-end research experiments**—from hypothesis to experimental setup to conclusion, as shown in Figure 1. We develop a semi-automated pipeline that uses multimodal and agentic approaches to reconstruct experiments from fragmented and dense sources (e.g., coding agents identify setups by conditioning on ground-truth outcomes and leveraging the full codebase—reducing the task to a constrained search), while interleaving these steps with lightweight human validation to ensure correctness.

Using this approach, we distilled *461 experiments from NeurIPS and ICLR papers*—spanning domains such as vision, RL, and computational biology—resulting in over 12,000 gradable subtasks.

<div style="text-align: center; max-width: 800px; margin: 0 auto; padding: 0 15px;">
    <img src="/assets/images/exp-bench-overview.png" alt="EXP-Bench Overview" style="width: 100%; height: auto; display: block; margin: 0 auto;">
    <p style="font-size: 0.8em; margin-top: 10px; color: grey;">
        Figure 1. EXP-Bench evaluates AI agents on research experiment tasks extracted semi-autonomously from peer-reviewed AI papers.
    </p>
</div>

<div style="text-align: center; max-width: 800px; margin: 0 auto; padding: 0 15px;">
    <img src="/assets/images/exp-bench-example.png" alt="EXP-Bench Example" style="width: 100%; height: auto; display: block; margin: 0 auto;">
    <p style="font-size: 0.8em; margin-top: 10px; color: grey;">
        Figure 2. One AI research task example from ICLR 2024 MogaNet [1].
    </p>
</div>

## What EXP-Bench Reveals About Today’s AI Agents

We tested leading agents, including *OpenHands w/ Claude Sonnet 3.7*, and found that while they can earn partial credit for individual steps like experiment design or coding (~20-35% success), their ability to *complete a full, executable experiment* is nearly non-existent—a mere 0.5% success rate.
Our analysis pinpointed several critical weaknesses:
1. **Limited Long-Horizon Planning and Reasoning**
2. **Inability to Handle Open-Ended and Ambiguous Tasks**
3. **Difficulty with Code Execution and Debugging**


These results highlight just how far we still are from our goal of automation of research experimentation. By identifying these bottlenecks and providing realistic step-by-step experiment procedures, EXP-Bench serves as a vital tool for future AI agents to improve their ability to conduct AI research experiments.

## Looking Forward

This work is, we hope, a small step toward our broader goal of designing agents capable of automating scientific research. We see EXP-Bench as a launchpad for the next wave of AI research copilots.

That said, much work remains. While EXP-Bench currently focuses on machine learning papers, it does not yet address domains that require interaction with the physical world or support tasks involving true scientific invention. Expanding to those areas—and capturing the creativity, uncertainty, and iteration of real-world discovery—remains an open and exciting challenge.



## Explore Our Work:


- 📑 [Full paper](https://arxiv.org/abs/2505.24785)
- 🗃️ [Open-sourced dataset](https://github.com/Just-Curieous/Curie/tree/main/benchmark/exp_bench)

```bib
@article{kon2025expbenchaiconductai,
      title={EXP-Bench: Can AI Conduct AI Research Experiments?}, 
      author={Patrick Tser Jern Kon and Jiachen Liu and Xinyi Zhu and Qiuyi Ding and Jingjia Peng and Jiarong Xing and Yibo Huang and Yiming Qiu and Jayanth Srinivasa and Myungjin Lee and Mosharaf Chowdhury and Matei Zaharia and Ang Chen},
      journal={arXiv preprint 2505.24785}
      year={2025},
}
```
*[1] MogaNet: Multi-order Gated Aggregation Network. ICLR 2024*
