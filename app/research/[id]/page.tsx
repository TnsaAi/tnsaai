import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Calendar } from 'lucide-react'

// Sample data structure for research papers
const researchPapers = {
  'eclipse-multimodal-architecture': {
    date: 'Dec 1, 2024',
    title: 'TNSA Eclipse Architecture: Unifying Multimodal Intelligence',
    image: 'https://lh3.googleusercontent.com/zwFgskl6fE8uSHLLbUxvsFeSWcF3sw7RSRUTnUQKJ2y-zzVJCDiGM67ja72SAFO6YMDAhBjOHCWpEzuONVhx9ZrKYRPvyOTpL4booiThnCDwPFFAcdi0XLfdObhdOgjdtQ=w1280',
    content: `
      <h2>Abstract</h2>
      <p>This paper introduces the TNSA Eclipse Architecture, a comprehensive machine learning library focused on multimodal development. Our architecture is designed to work seamlessly across various types of data, including text, audio, video, and sensor inputs, facilitating a unified approach to machine learning tasks.</p>

      <h2>Key Features</h2>
      <ul>
        <li>Multimodal Input Handling: Efficiently process and integrate data from diverse sources.</li>
        <li>Dynamic Attention Mechanisms: Adapt to varying input complexities and inter-modal relationships.</li>
        <li>Cross-Modality Interaction: Enable sophisticated information exchange between different data types.</li>
        <li>Contextual Deliberation Layer: Enhance decision-making by considering multi-modal context.</li>
        <li>Modular Integration: Easily incorporate new modalities or update existing ones.</li>
      </ul>

      <h2>Applications</h2>
      <p>The TNSA Eclipse Architecture has wide-ranging applications across various domains:</p>
      <ul>
        <li>Healthcare: Integrating patient data, medical imaging, and genetic information for comprehensive diagnostics.</li>
        <li>Autonomous Systems: Fusing sensor data, visual inputs, and contextual information for robust decision-making.</li>
        <li>Media & Entertainment: Enabling sophisticated content analysis and generation across text, image, and video.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The TNSA Eclipse Architecture represents a significant step forward in multimodal AI development. By providing a unified framework for handling diverse data types, we empower developers to create more sophisticated, context-aware AI systems that can tackle complex real-world problems.</p>
    `
  },
  'tokenize2-next-gen-tokenizer': {
    date: 'Dec 5, 2024',
    title: 'Tokenize2: Our 2nd Generation Industry-level Tokenizer',
    image: 'https://lh4.googleusercontent.com/WbEVXC6Sf9zciABfmoa_uX_o1Gn0iVTY3vvXDoM9JDlIMm8VjrBv0UQ9NVdchMW1WYB9-ogIIPuIHI-oS68Nvh3GF3BzqQt7dX3hrbN9vFw4QI0K1dMhJ4BxpqzDp5fc=w1280',
    content: `
      <h2>Abstract</h2>
      <p>We present Tokenize2, our second-generation industry-level tokenizer that offers an unparalleled level of sophistication in text data processing. By combining advanced techniques like byte-level encoding, multi-strategy token merging, and out-of-vocabulary (OOV) handling, Tokenize2 pushes the boundaries of text tokenization.</p>

      <h2>Key Features</h2>
      <ul>
        <li>Byte-level encoding: Ensures comprehensive character coverage across languages and special symbols.</li>
        <li>Multi-strategy token merging: Adapts to different linguistic structures for optimal tokenization.</li>
        <li>Advanced OOV handling: Improves model robustness when encountering unfamiliar words or phrases.</li>
        <li>Parallelized batch tokenization: Enables efficient processing of large text corpora.</li>
        <li>Dynamic context-based token merging: Enhances semantic understanding in complex sentences.</li>
      </ul>

      <h2>Performance</h2>
      <p>Tokenize2 demonstrates significant improvements over its predecessor and competing tokenizers:</p>
      <ul>
        <li>30% reduction in tokenization time for large datasets.</li>
        <li>15% improvement in downstream task performance across various NLP benchmarks.</li>
        <li>50% reduction in OOV occurrences in multilingual settings.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Tokenize2 represents a major advancement in text tokenization technology. Its sophisticated approach to handling text data promises to enhance the performance of a wide range of NLP tasks, from machine translation to sentiment analysis and beyond.</p>
    `
  },
  'tnsa-standard-framework': {
    date: 'Dec 10, 2024',
    title: 'TNSA_Standard: A Foundation for Scalable Machine Learning',
    image: 'https://lh6.googleusercontent.com/FgPbdQH0NcbC8aZTqmtCW6UVbLDo_mKSQrUUztYVJsjvzHi_qf6BysnkVV80pN8I0Q83vcZOpvsydS_sm1hsZkW6XGD2R9LlJO2jeKqxO-h9aphZknPjsxvU36kNxpcvMQ=w1280',
    content: `
      <h2>Abstract</h2>
      <p>We introduce TNSA_Standard, a robust, scalable machine learning framework designed to meet the needs of cutting-edge AI and deep learning applications. With a modular architecture, it simplifies the development of complex models by offering customizable components tailored for advanced tasks.</p>

      <h2>Key Features</h2>
      <ul>
        <li>Modular architecture: Easily combine and customize components for diverse ML tasks.</li>
        <li>Support for symbolic reasoning: Integrate traditional AI approaches with modern deep learning.</li>
        <li>Advanced attention mechanisms: Implement state-of-the-art attention models with ease.</li>
        <li>Adaptive memory networks: Enhance model performance on tasks requiring long-term dependencies.</li>
        <li>Efficient handling of dynamic data: Optimized for streaming and real-time data processing.</li>
      </ul>

      <h2>Applications</h2>
      <p>TNSA_Standard is suitable for a wide range of machine learning workflows:</p>
      <ul>
        <li>Natural Language Processing: From chatbots to machine translation and text summarization.</li>
        <li>Computer Vision: Object detection, image segmentation, and video analysis.</li>
        <li>Reinforcement Learning: Game AI, robotics, and autonomous systems.</li>
        <li>Time Series Analysis: Financial forecasting, anomaly detection, and predictive maintenance.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>TNSA_Standard provides a solid foundation for building scalable, efficient, and sophisticated machine learning models. Its flexibility and comprehensive feature set make it an ideal choice for both research and production environments, pushing the boundaries of what's possible in AI development.</p>
    `
  },
  'arch-x-7-framework': {
    date: 'Dec 15, 2024',
    title: 'ARCH-X 7: Revolutionizing AI Development',
    image: 'https://via.placeholder.com/600x400?text=ARCH-X+7',
    content: `
      <h2>Abstract</h2>
      <p>We present ARCH-X 7, a cutting-edge framework designed to streamline and optimize machine learning workflows. It provides a modular and scalable infrastructure for developing, training, and deploying advanced ML models, with a focus on efficiency and ease of use.</p>

      <h2>Key Features</h2>
      <ul>
        <li>Modular and scalable infrastructure: Easily adapt to projects of any size and complexity.</li>
        <li>Dynamic integration of various components: Seamlessly combine different ML techniques and models.</li>
        <li>High-performance computation: Optimized for both CPU and GPU environments.</li>
        <li>Efficient handling of large datasets: Advanced data loading and preprocessing pipelines.</li>
        <li>Automated hyperparameter tuning: Intelligent optimization of model parameters.</li>
      </ul>

      <h2>Performance Benchmarks</h2>
      <p>ARCH-X 7 demonstrates significant improvements over previous versions and competing frameworks:</p>
      <ul>
        <li>40% reduction in model training time for large-scale datasets.</li>
        <li>25% improvement in resource utilization across various hardware configurations.</li>
        <li>60% faster model deployment and inference in production environments.</li>
      </ul>

      <h2>Applications</h2>
      <p>ARCH-X 7 is ideal for a wide range of AI and ML applications:</p>
      <ul>
        <li>Deep Learning: Complex neural network architectures for various domains.</li>
        <li>Natural Language Processing: Advanced language models and text analysis.</li>
        <li>Computer Vision: State-of-the-art image and video processing tasks.</li>
        <li>Reinforcement Learning: Sophisticated agent training for complex environments.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>ARCH-X 7 represents a significant leap forward in AI development frameworks. Its combination of performance, flexibility, and ease of use makes it an invaluable tool for researchers and practitioners pushing the boundaries of machine learning and artificial intelligence.</p>
    `
  }
}

export default function ResearchPaperPage({ params }: { params: { id: string } }) {
  const paper = researchPapers[params.id as keyof typeof researchPapers]

  if (!paper) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{paper.title}</CardTitle>
          <CardDescription className="flex items-center text-lg">
            <Calendar className="mr-2 h-5 w-5" />
            {paper.date}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-8">
            <Image
              src={paper.image}
              alt={paper.title}
              width={800}
              height={400}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: paper.content }} />
        </CardContent>
      </Card>
    </div>
  )
}

