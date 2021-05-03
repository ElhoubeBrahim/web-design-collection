let articles = [
  {
    "id": 1,
    "title": "How to become a good front end developer?",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, neque et imperdiet placerat, orci enim interdum magna, sed tincidunt urna dolor at purus. Sed mollis dapibus urna ac ultricies. Pellentesque maximus vitae ante in mattis. Aenean et elit velit. Donec ultrices luctus lacus ut aliquam. Fusce faucibus sit amet tellus ac semper. Vestibulum porta sit amet ex nec tempus. Nam convallis, est sed sollicitudin efficitur, elit metus convallis est, sit amet tincidunt mi dui et orci.",
    "picture": "article.svg",
    "category": "web design",
    "user": 3,
    "date": "2021-05-17"
  },
  {
    "id": 2,
    "title": "10 steps to build an awesome website",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, neque et imperdiet placerat, orci enim interdum magna, sed tincidunt urna dolor at purus. Sed mollis dapibus urna ac ultricies. Pellentesque maximus vitae ante in mattis. Aenean et elit velit. Donec ultrices luctus lacus ut aliquam. Fusce faucibus sit amet tellus ac semper. Vestibulum porta sit amet ex nec tempus. Nam convallis, est sed sollicitudin efficitur, elit metus convallis est, sit amet tincidunt mi dui et orci.",
    "picture": "article.svg",
    "category": "web design",
    "user": 3,
    "date": "2021-06-15"
  },
  {
    "id": 3,
    "title": "Introduction to machine learning with JavaScript",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, neque et imperdiet placerat, orci enim interdum magna, sed tincidunt urna dolor at purus. Sed mollis dapibus urna ac ultricies. Pellentesque maximus vitae ante in mattis. Aenean et elit velit. Donec ultrices luctus lacus ut aliquam. Fusce faucibus sit amet tellus ac semper. Vestibulum porta sit amet ex nec tempus. Nam convallis, est sed sollicitudin efficitur, elit metus convallis est, sit amet tincidunt mi dui et orci.",
    "picture": "article.svg",
    "category": "AI",
    "user": 2,
    "date": "2021-03-15"
  },
  {
    "id": 4,
    "title": "10 steps to hack software engeneer interviews",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, neque et imperdiet placerat, orci enim interdum magna, sed tincidunt urna dolor at purus. Sed mollis dapibus urna ac ultricies. Pellentesque maximus vitae ante in mattis. Aenean et elit velit. Donec ultrices luctus lacus ut aliquam. Fusce faucibus sit amet tellus ac semper. Vestibulum porta sit amet ex nec tempus. Nam convallis, est sed sollicitudin efficitur, elit metus convallis est, sit amet tincidunt mi dui et orci.",
    "picture": "article.svg",
    "category": "coding interviews",
    "user": 1,
    "date": "2021-07-19"
  },
  {
    "id": 5,
    "title": "50 great lading pages for your inspiration",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, neque et imperdiet placerat, orci enim interdum magna, sed tincidunt urna dolor at purus. Sed mollis dapibus urna ac ultricies. Pellentesque maximus vitae ante in mattis. Aenean et elit velit. Donec ultrices luctus lacus ut aliquam. Fusce faucibus sit amet tellus ac semper. Vestibulum porta sit amet ex nec tempus. Nam convallis, est sed sollicitudin efficitur, elit metus convallis est, sit amet tincidunt mi dui et orci.",
    "picture": "article.svg",
    "category": "web design",
    "user": 2,
    "date": "2021-07-14"
  },
  {
    "id": 6,
    "title": "Introduction to computer networks",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, neque et imperdiet placerat, orci enim interdum magna, sed tincidunt urna dolor at purus. Sed mollis dapibus urna ac ultricies. Pellentesque maximus vitae ante in mattis. Aenean et elit velit. Donec ultrices luctus lacus ut aliquam. Fusce faucibus sit amet tellus ac semper. Vestibulum porta sit amet ex nec tempus. Nam convallis, est sed sollicitudin efficitur, elit metus convallis est, sit amet tincidunt mi dui et orci.",
    "picture": "article.svg",
    "category": "computer science",
    "user": 1,
    "date": "2020-05-14"
  },
  {
    "id": 7,
    "title": "10 apps to improve your programming skills",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, neque et imperdiet placerat, orci enim interdum magna, sed tincidunt urna dolor at purus. Sed mollis dapibus urna ac ultricies. Pellentesque maximus vitae ante in mattis. Aenean et elit velit. Donec ultrices luctus lacus ut aliquam. Fusce faucibus sit amet tellus ac semper. Vestibulum porta sit amet ex nec tempus. Nam convallis, est sed sollicitudin efficitur, elit metus convallis est, sit amet tincidunt mi dui et orci.",
    "picture": "article.svg",
    "category": "programming",
    "user": 1,
    "date": "2020-03-16"
  },
  {
    "id": 8,
    "title": "How to get your first order as a freelancer",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, neque et imperdiet placerat, orci enim interdum magna, sed tincidunt urna dolor at purus. Sed mollis dapibus urna ac ultricies. Pellentesque maximus vitae ante in mattis. Aenean et elit velit. Donec ultrices luctus lacus ut aliquam. Fusce faucibus sit amet tellus ac semper. Vestibulum porta sit amet ex nec tempus. Nam convallis, est sed sollicitudin efficitur, elit metus convallis est, sit amet tincidunt mi dui et orci.",
    "picture": "article.svg",
    "category": "freelancing",
    "user": 2,
    "date": "2020-03-26"
  },
  {
    "id": 9,
    "title": "Tips and tricks to become a good leader",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, neque et imperdiet placerat, orci enim interdum magna, sed tincidunt urna dolor at purus. Sed mollis dapibus urna ac ultricies. Pellentesque maximus vitae ante in mattis. Aenean et elit velit. Donec ultrices luctus lacus ut aliquam. Fusce faucibus sit amet tellus ac semper. Vestibulum porta sit amet ex nec tempus. Nam convallis, est sed sollicitudin efficitur, elit metus convallis est, sit amet tincidunt mi dui et orci.",
    "picture": "article.svg",
    "category": "category",
    "user": 1,
    "date": "2021-01-23"
  },
  {
    "id": 10,
    "title": "10 projects ideas to work on",
    "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod, neque et imperdiet placerat, orci enim interdum magna, sed tincidunt urna dolor at purus. Sed mollis dapibus urna ac ultricies. Pellentesque maximus vitae ante in mattis. Aenean et elit velit. Donec ultrices luctus lacus ut aliquam. Fusce faucibus sit amet tellus ac semper. Vestibulum porta sit amet ex nec tempus. Nam convallis, est sed sollicitudin efficitur, elit metus convallis est, sit amet tincidunt mi dui et orci.",
    "picture": "article.svg",
    "category": "category",
    "user": 3,
    "date": "2020-08-27"
  }
]