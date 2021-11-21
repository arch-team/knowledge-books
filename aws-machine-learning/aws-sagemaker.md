## 参考资料：
- AWS 机器学习推理芯片 Inferentia 详解
  - http://2019-aws-reinvent-recap.s3.cn-north-1.amazonaws.com.cn/Final-PDF/aws-reinvent-2019-recap-0402-track02.pdf
- 使用 AWS Neuron SDK 在 AWS Inferentia 芯片上进行机器学习推理
  - https://aws.amazon.com/cn/blogs/china/use-the-aws-neuron-sdk-for-machine-learning-inference-on-the-aws-inferentia-chip
- Achieving 1.85x higher performance for deep learning based object detection with an AWS Neuron compiled YOLOv4 model on AWS Inferentia
  - https://aws.amazon.com/jp/blogs/machine-learning/improving-performance-for-deep-learning-based-object-detection-with-an-aws-neuron-compiled-yolov4-model-on-aws-inferentia/
- Now Available – EC2 Instances (G4) with NVIDIA T4 Tensor Core GPUs
  - https://aws.amazon.com/cn/blogs/aws/now-available-ec2-instances-g4-with-nvidia-t4-tensor-core-gpus/

### AWS Inferentia 简介
- 4 个 NeuronCores
- 最高 128 TOPS
- 2 级内存
- 大容量片上缓存和 DRAM 内存
- 支持 FP16、BF16、INT8 数据类型
- 芯片间高速互联
### AWS Neuron 简介
- 支持在 AWS Inferentia 上实现高性能深度学习推理的软件开发套件
  - 编译器
  - 运行时
  - 性能分析和调试工具
- 支持所有主流框架
  - TensoFlow
  - mxnet
  - pytorch
### Amazon EC2 Inf1 实例应用场景