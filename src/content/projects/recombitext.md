---
title: 'RecombiText'
description: 'Statistical text augmentation for data-efficient language model training through semantic recombination and up to fourfold dataset expansion.'
publishDate: '2026-10-12'
isFeatured: true
seo:
  description: 'RecombiText uses statistical text recombination for low-resource settings and data-efficient pre-training of transformer models.'
  image:
    src: '/models/rta-crossover.svg'
    alt: 'Crossover of two bundles of pink lines'
---

RecombiText explores how to expand limited text corpora for language model training. Its statistical framework recombines existing text semantically without requiring additional data sources or generative models for augmentation.

## Implementation

- Designed and implemented a statistical framework for semantic text recombination in low-resource settings.
- Built a pipeline to expand training datasets by up to fourfold.
- Ran pre-training and fine-tuning experiments with transformer models.
- Investigated data-efficient training with GPT-2, RoBERTa, T5, and Hugging Face Trainer.

## Research contribution

The work was published at the **2025 BabyLM Workshop**. It examines how statistically generated training data affects the capabilities of pre-trained language models. The paper reports improvements on selected benchmarks and comparable performance on other tasks.

## Technologies

Python, PyTorch, Hugging Face Transformers and Trainer, NumPy, pandas, scikit-learn, and Elasticsearch.

## Publication

[RecombiText: Compositional Data Augmentation for Enhancing LLM Pre-Training Datasets in Low-Resource Scenarios — ACL Anthology](https://aclanthology.org/2025.babylm-main.40/)
