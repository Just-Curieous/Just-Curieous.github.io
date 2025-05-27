---
layout: post
title: "Curie: The AI Co-Scientist Making ML More Accessible to Your Research"
date: 2025-05-27
categories: [machine-learning, research]
---



<div style="text-align: center; color: gray;">
<h2 style="font-size: 1.15em; color: grey;">AI Co-scientist that Democratizes Machine Learning for Researchers</h2>
</div>


<div style="text-align: center">
<a href="https://github.com/Just-Curieous/Curie">💻 Github Link</a> | <a href="https://github.com/Just-Curieous/Curie/tree/main/benchmark/mle_bench"> 📒 Use Cases</a>

</div>

In our previous post, we introduced [Curie](https://github.com/Just-Curieous/Curie): an open-sourced AI co-scientist that automates experimentation and accelerate the journey from idea to validation. Today, we're thrilled to introduce Curie's AutoML feature, designed to help researchers **rapidly test hypotheses** and unlock insights from their **valuable data**.


We built this AutoML feature after personally seeing how even highly-capable researchers—in fields like biology, materials science, and chemistry—struggle to apply machine learning to their work. They often have valuable data, but lack the advanced ML knowledge to fully explore its potential. 
Despite their expertise, the technical barriers make ML feel out of reach, and this is the exact problem that we wanted to solve. Curie can create end-to-end machine learning solutions for non-ML experts, and we have evidence of it already making a positive impact with our early adopters.

### Introducing Curie's New Feature: Your Automated ML Solution

Curie goes beyond traditional parameter or architecture search based AutoML, and takes over all the tedious but critical work performed by ML practitioners.

From data preprocessing, to model and hyperparameter selection, to training and deploying recipes, which all require deep expertise. It's a **vast search space** to find the best performing solution, often involving **iterative experiments** and **specialized intuition** to fine-tune all the different components in the pipeline. Curie aims to automate this. The goal is to democratize access to powerful ML capabilities for researchers.

<div class="figure-container" style="text-align: center; margin: 20px 0;">
    <img src="{{ site.baseurl }}/assets/exp-bench-mle-curie.drawio.png" 
         alt="Curie AutoML Overview" 
         style="width: 80%; height: auto; max-width: 100%;">
    <div style="margin-top: 10px; font-style: italic; color: #666; font-size: 14px;">
        Curie AutoML Overview
    </div>
</div>

All you need to do is input your research question and the path to your dataset:
```bash
python3 -m curie.main -q 'E.g. How to improve my prediction accuracy on my dataset. Checkout <paper.pdf> for the background information.' \
                      --dataset_dir <abs_path_to_your_dataset> \
                      --workspace_name <[optional] abs_path_to_your_codebase> \
                      --task_config curie/configs/mle.json
```


From there, it will work to generate the optimal ML solution for your specific problem given the budget.

### Curie in Action: Demonstrated Performance

We've benchmarked Curie on several ML tasks to demonstrate its capabilities, including:
* [Identifying Melanoma in Images of Skin Lesions](https://github.com/Just-Curieous/Curie/blob/main/benchmark/mle_bench/siim-isic-melanoma-classification)
* [Predict the severity level of diabetic retinopathy based on retinal images](https://github.com/Just-Curieous/Curie/blob/main/benchmark/mle_bench/aptos2019-blindness-detection)
* [Histopathologic Cancer Detection](https://github.com/Just-Curieous/Curie/tree/main/benchmark/mle_bench/histopathologic-cancer-detection)
* [Stock Price Prediction](https://github.com/Just-Curieous/Curie-Use-Cases/tree/main/stock_prediction)

More AutoML use cases can be found [here](https://github.com/Just-Curieous/Curie-Use-Cases).


#### Case Study: Skin Cancer Detection Challenge
Here's a preview of an auto-generated report from Curie. You can scroll through it to see the detailed analysis and insights:

<iframe src="{{ site.baseurl }}/assets/report.pdf" width="100%" height="600px" style="border: 1px solid #ddd;"></iframe>

Curie demonstrated some impressive capabilities in the skin cancer detection challenge:
* It managed to train a model achieving **a remarkable 0.99 AUC (top 1% performance)** using 2 hours. Moreover, the agent intelligently explored a variety of models with early stopping strategies on dataset subsets to quickly gauge potential to **efficiently navigate the vast search space** of possible models.
* It incorporated data augmentation (random rotation, color jitter, ...) to enhance model generalization.
* It provided detailed analysis on performance versus system trade-offs, offering insights for efficient model deployment strategies.


Despite the strong performance, there are areas where Curie can evolve.

- The current model architectures explored were relatively basic, and the specific ML problem, while important, is a well-established one. It's possible the task wasn't as challenging as some newer, more complex problems. The true test will be its performance on more diverse, real-world datasets.

- Looking ahead, a crucial area for improvement lies in enhancing the agent's hypothesis generation capabilities. We're keen to see it explore the search space beyond established empirical knowledge, which will be key to unlocking even higher levels of accuracy and tackling more novel challenges.

### Join Us & Contribute to Open Science

And this is where we need your help! We believe in open science, and your usage of Curie will help us make it better and support more scientists. We also welcome contributions to our repo, we can't keep up with all the latest research by ourselves!

<!-- ## Performance Visualizations

Here are some visualizations showcasing Curie's performance on various tasks: -->

<!-- ![Model Performance Metrics]({{ site.baseurl }}/assets/output-1.png)
*Figure 1: Comprehensive performance metrics across different model configurations*

![Training Progress]({{ site.baseurl }}/assets/output-2.png)
*Figure 2: Training progress and convergence analysis*

![Model Comparison]({{ site.baseurl }}/assets/output-3.png)
*Figure 3: Comparative analysis of different model architectures*

![Feature Importance]({{ site.baseurl }}/assets/output-4.png)
*Figure 4: Feature importance analysis and insights*

![Performance Distribution]({{ site.baseurl }}/assets/output-5.png)
*Figure 5: Distribution of model performance across different test cases*  -->


<!-- - The agent accurately identified critical class imbalances within the APTOS 2019 dataset. -->
<!-- Cool Factor: It smartly discovered that CLAHE enhancement significantly improved performance by clarifying subtle retinal features crucial for diagnosis. -->
