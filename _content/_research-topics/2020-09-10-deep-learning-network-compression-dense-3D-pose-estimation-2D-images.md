---
layout: post
date: 2020-09-10
title: Deep Learning and Network Compression for dense 3D pose estimation from 2D images
inline: false
---

### Project Description
Nowadays, Deep Neural Networks are considered to be one of the most powerful tools for solving many AI problems. In particular, Convolutional Neural Networks (CNN) are able to achieve state-of-the art results in image processing problems such as classification, detection, image restoration and enhancement, to name a few.

Dense 3D pose estimation from 2D images is a promising new feature for mobile devices such as modern smartphones, where it enables vast applications such as AR/VR-based navigation and entertainment systems. Recent achievements in deep learning-based computer vision (e.g. Facebook’s DensePose system, cf. http://densepose.org) indicate that CNNs are a promising framework for image-based 3D pose reconstruction. However, CNN-based solutions are very computationally and memory consuming so that inference process require both sufficient hardware resources and energy, while, at the same time, edge devices like smartphones cannot satisfy the computational demands posed by modern CNN architectures. Moreover, even the exact architecture of the computational model depends heavily on the target hardware: whether any hardware acceleration could be supported, what kind of computing and memory devices are available, and what is an input signal for a smartphone are some questions developers have to consider.

**Within the scope of this project, we consider two directions of research**
Development of an accurate and algorithmically efficient computer vision architecture tailored specifically for the dense 3D pose estimation from 2D images on a mobile device, that has technical characteristics similar to that of a Huawei flagship device (e.g. Huawei P20). Within this direction, we plan to (1) conduct a survey into efficient neural network architectures, object detection, pose estimation, and body shape regression tasks such as [15,17,18,19], (2) develop an efficient multi-stage neural network architecture to incorporate person detection and body shape regression into a unified procedure, (3) perform additional research to test whether the overall task could be solved in a joint fashion by a single multi-output model such as [16].

**Optimization of CNN inference running time and energy consumption**
Within this direction, we plan to consider two lines of approaches, identify the most promising ones, and implement those within the proposed algorithm:

**Algorithmic complexity reduction of the CNN inference procedure (simplification)**
This includes many approaches, e.g., reducing the number of model parameters, inducing sparsity to the model [1], pruning neurons [2], merging neurons, replacing some layers by light-weight analogues [3], and low-rank approximation of the model parameters [4, 5]. Less amount of computations will likely result in reduced energy consumption and running times.

**Hardware support and low-level engineering to perform more computations using same power within the same time period**
The most popular approach lays in moving CNN inference process towards using low-precision arithmetic (i.e. quantizing the 32-bit floating-point based weights of the neural network into 16bit, 8bit, or even 1bit precision, cf. [6, 7]). This approach, so called quantization, allows either to use SIMD instructions supported by most of existing hardware or develop new specific hardware for low-precision arithmetic. In the first case we can expect significant acceleration of running time, while in the second case we can benefit much in energy consumption.

###References
1. Molchanov, Dmitry, Arsenii Ashukha, and Dmitry Vetrov. "Variational dropout sparsifies deep neural networks." arXiv preprint arXiv:1701.05369 (2017).
2. Han, Song, Huizi Mao, and William J. Dally. "Deep compression: Compressing deep neural networks with pruning, trained quantization and huffman coding." arXiv preprint arXiv:1510.00149 (2015).
3. Szegedy, Christian, et al. "Rethinking the inception architecture for computer vision." Proceedings of the IEEE conference on computer vision and pattern recognition. 2016.
4. Novikov, Alexander, et al. "Tensorizing neural networks." Advances in Neural Information Processing Systems. 2015.
5. Novikov, Alexander, et al. "Tensor Train decomposition on TensorFlow (T3F)." arXiv preprint arXiv:1801.01928 (2018).
6. Rastegari, Mohammad, et al. "Xnor-net: Imagenet classification using binary convolutional neural networks." European Conference on Computer Vision. Springer, Cham, 2016.
7. Wu, Jiaxiang, et al. "Quantized convolutional neural networks for mobile devices." Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition. 2016.
8. https://community.arm.com/android-community/b/android/posts/arm-support-for-android-nnapi-gives-up-to-4x-performance-boost
9. https://developer.arm.com/products/processors/machine-learning/arm-nn
10. https://github.com/ARM-software/armnn/blob/master/src/armnnTfParser/TensorFlowSupport.md
11. Howard, A. G., Zhu, M., Chen, B., Kalenichenko, D., Wang, W., Weyand, T., ... & Adam, H. (2017). Mobilenets: Efficient convolutional neural networks for mobile vision applications. arXiv preprint arXiv:1704.04861.
12. https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/detection_model_zoo.md
13. Güler, R. A., Neverova, N., & Kokkinos, I. (2018). Densepose: Dense human pose estimation in the wild. arXiv preprint arXiv:1802.00434.
14. He, Kaiming, et al. "Mask r-cnn." Computer Vision (ICCV), 2017 IEEE International Conference on. IEEE, 2017.
15. Bogo, Federica, et al. "Keep it SMPL: Automatic estimation of 3D human pose and shape from a single image." European Conference on Computer Vision. Springer, Cham, 2016.
16. Kanazawa, Angjoo, et al. "End-to-end recovery of human shape and pose." The IEEE Conference on Computer Vision and Pattern Recognition (CVPR). 2018.
17. Omran, Mohamed, et al. "Neural Body Fitting: Unifying Deep Learning and Model-Based Human Pose and Shape Estimation." arXiv preprint arXiv:1808.05942 (2018).
18. Lassner, Christoph, Gerard Pons-Moll, and Peter V. Gehler. "A generative model of people in clothing." Proceedings of the IEEE International Conference on Computer Vision. Vol. 6. 2017.
19. Zhang, Chao, et al. "Detailed, accurate, human shape estimation from clothed 3D scan sequences." CVPR. Vol. 2. 2017.

