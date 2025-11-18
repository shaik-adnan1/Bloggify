const blogs = [
  {
    image: "/mountain.jpg",
    author: "Alec Whitten • 1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    desc: "Like to know the secrets of transforming a 2–14 team into a 3x Super Bowl winning dynasty?",
    tags: ["Leadership", "Management"]
  },
  {
    image: "/meeting.jpg",
    author: "Demi Wilkinson • 1 Jan 2023",
    title: "PM mental models",
    desc: "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Product", "Research", "Frameworks"]
  },
  {
    image: "/desk.jpg",
    author: "Candice Wu • 1 Jan 2023",
    title: "What is Wireframing?",
    desc: "Intro to wireframing and its principles. Learn from industry experts.",
    tags: ["Design", "Research"]
  },
  {
    image: "/designer.jpg",
    author: "Natali Craig • 1 Jan 2023",
    title: "How collaboration makes us better designers",
    desc: "Collaboration can make our teams stronger and our designs better.",
    tags: ["Design", "Research"]
  },
  {
    image: "/codeguy.jpg",
    author: "Drew Cano • 1 Jan 2023",
    title: "Our top 10 JS frameworks to use",
    desc: "JavaScript frameworks make development easy with extensive features.",
    tags: ["Software Development", "Tools", "SaaS"]
  },
  {
    image: "/podcast.jpg",
    author: "Orlando Diggs • 1 Jan 2023",
    title: "Podcast: Creating a better CX community",
    desc: "Starting a community doesn’t need to be complicated.",
    tags: ["Podcasts", "Customer Success"]
  }
];

export default function App() {
  return (
    <div className="container">
      <h1>All blog posts</h1>

      <div className="grid">
        {blogs.map((blog, i) => (
          <div className="card" key={i}>
            <img src={blog.image} alt="" />

            <div className="card-content">
              <div className="author">{blog.author}</div>
              <div className="title">{blog.title}</div>
              <div className="desc">{blog.desc}</div>

              <div className="tags">
                {blog.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}