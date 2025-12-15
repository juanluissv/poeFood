const products = [
  {
    _id: '1',
    title: "Nulo Freestyle Freeze-Dried Raw, Ultra-Rich Grain-Free",
    image: 'https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/277c1d49d96764f4c31245a814aa3549bac09422?placeholderIfAbsent=true',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    originalPrice: 109.99,
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    ratingIcon: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/7479075e5362bee3a073812a3ae62d1baa0384f5?placeholderIfAbsent=true",
    sale: true
  },
  {
    _id: '2',
    title: "Tastefuls CORE Grain-Free Kitten Formula Dry Cat Food",
    image: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/b6620fd4a36b92e26d5fc100880b5d21fa3e8ffb?placeholderIfAbsent=true",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    originalPrice: 149.99,
    price: 99.99,
    countInStock: 10,
    rating: 3.9,
    numReviews: 12,
    ratingIcon: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/7479075e5362bee3a073812a3ae62d1baa0384f5?placeholderIfAbsent=true",
    sale: false
  },
  {
    _id: '3',
    title: "Wellness CORE Grain-Free Kitten Formula Dry Cat Food",
    image: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/cf15b471bb54c4475c7ea8f8065b81b1fb55ef56?placeholderIfAbsent=true",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    originalPrice: 129.99,
    price: 69.99,
    countInStock: 10,
    rating: 5,
    numReviews: 12,
    ratingIcon: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/7479075e5362bee3a073812a3ae62d1baa0384f5?placeholderIfAbsent=true",
    sale: true
  },
  {
    _id: '4',
    title: "Wellness CORE Grain-Free Kitten Formula Dry Cat Food",
    image: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/e55a4121a9e8e0d8b43d2eb533f93451ce7bb41d?placeholderIfAbsent=true",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    originalPrice: 99.99,
    price: 89.99,
    countInStock: 10,
    rating: 4.9,
    numReviews: 12,
    ratingIcon: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/7479075e5362bee3a073812a3ae62d1baa0384f5?placeholderIfAbsent=true",
    sale: false
  },
  {
    _id: '5',
    title: "ORGANIX Organic Chicken & Brown Rice Recipe Dry Cat",
    image: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/441af9995d609ce0d4e9a4df5193f5bac7c74ebd?placeholderIfAbsent=true",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    originalPrice: 139.99,
    price: 99.99,
    countInStock: 10,
    rating: 4,
    numReviews: 12,
    ratingIcon: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/7479075e5362bee3a073812a3ae62d1baa0384f5?placeholderIfAbsent=true",
    sale: false
  },
  {
    _id: '6',
    title: "Blue Buffalo Freedom Natural Grain Free Cat Food",
    image: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/5c16b57a84a97b7a0793a6a9740295ec4c246406?placeholderIfAbsent=true",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    originalPrice: 139.99,
    price: 69.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    ratingIcon: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/7479075e5362bee3a073812a3ae62d1baa0384f5?placeholderIfAbsent=true",
    sale: false
  },

  {
    _id: '7',
    title: "Wellness Complete Health Grain Free Dry Kitten Food",
    image: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/c4d03c80602803fd474d393cd70ec8a543acc5d0?placeholderIfAbsent=true",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    originalPrice: 119.99,
    price: 59.99,
    countInStock: 10,
    rating: 4.8,
    numReviews: 12,
    ratingIcon: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/7479075e5362bee3a073812a3ae62d1baa0384f5?placeholderIfAbsent=true",
    sale: true
  },

  {
    _id: '8',
    title: "Wellness CORE Grain-Free Kitten Formula Dry Cat Food",
    image: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/0011f9c5626cd867a4532410e0fd51c9f75b4fde?placeholderIfAbsent=true",
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    originalPrice: 149.99,
    price: 102.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    ratingIcon: "https://cdn.builder.io/api/v1/image/assets/a26849b100204920aa1d93a801543256/7479075e5362bee3a073812a3ae62d1baa0384f5?placeholderIfAbsent=true",
    sale: false
  }
]

export default products
