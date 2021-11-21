## 参考资料：
- AWS 机器学习推理芯片 Inferentia 详解
  - http://2019-aws-reinvent-recap.s3.cn-north-1.amazonaws.com.cn/Final-PDF/aws-reinvent-2019-recap-0402-track02.pdf
- 使用 AWS Neuron SDK 在 AWS Inferentia 芯片上进行机器学习推理
  - https://aws.amazon.com/cn/blogs/china/use-the-aws-neuron-sdk-for-machine-learning-inference-on-the-aws-inferentia-chip
    - AWS Inferentia 芯片的优势可以总结为：高性能，低延迟，高易用。
    - 每个 AWS Inferentia 芯片有4个处理核心Neuron Core，能在低功率下支持高达 128 TOPS的性能。
    - AWS Inferentia 能够支持 FP16、BF16 和 INT8 数据类型，并且可以接收FP32的训练模型输入，并使用 BF16高速运行该模型。
    - AWS Inferentia 具有大容量的片上存储，可用于缓存大型模型，从而无需将它们存储到片外，使得Neuron Core可以对模型进行高速访问，对于降低推理延迟具有显著影响。
    - AWS Inferentia附带了AWS Neuron SDK，可以使用AWS Inferentia在流行框架中创建和训练复杂的神经网络模型。
    - Neuron由编译器、运行时和分析工具组成，并预先集成到流行的机器学习框架中，包括TensorFlow、Pytorch和MXNet。
- Achieving 1.85x higher performance for deep learning based object detection with an AWS Neuron compiled YOLOv4 model on AWS Inferentia
    g4和inf1实例类型在运行TensorFlow based YOLOv4 model时的性能对比。
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