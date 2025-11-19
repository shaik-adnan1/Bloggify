const blogs = [
  {
    image: "/mountain.jpg",
    author: "Alec Whitten • 1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    desc: "Like to know the secrets of transforming a 2–14 team into a 3x Super Bowl winning dynasty?",
    tags: [
      { label: "Leadership", color: "#6a5bdc" },
      { label: "Management", color: "#47b38b" }
    ]
  },
  {
    image: "/meeting.jpg",
    author: "Demi Wilkinson • 1 Jan 2023",
    title: "PM mental models",
    desc: "Mental models are simple expressions of complex processes or relationships.",
    tags: [
      { label: "Product", color: "#00a6ff" },
      { label: "Research", color: "#3a5bdc" },
      { label: "Frameworks", color: "#e07a5f" }
    ]
  },
  {
    image: "/desk.jpg",
    author: "Candice Wu • 1 Jan 2023",
    title: "What is Wireframing?",
    desc: "Intro to wireframing and its principles. Learn from industry experts.",
    tags: [
      { label: "Design", color: "#9b59b6" },
      { label: "Research", color: "#3a5bdc" }
    ]
  },
  {
    image: "/designer.jpg",
    author: "Natali Craig • 1 Jan 2023",
    title: "How collaboration makes us better designers",
    desc: "Collaboration can make our teams stronger, and our individual designs better.",
    tags: [
      { label: "Design", color: "#9b59b6" },
      { label: "Research", color: "#3a5bdc" }
    ]
  },
  {
    image: "/codeguy.jpg",
    author: "Drew Cano • 1 Jan 2023",
    title: "Our top 10 JS frameworks to use",
    desc: "JavaScript frameworks make development easy with extensive features.",
    tags: [
      { label: "Software Development", color: "#2ecc71" },
      { label: "Tools", color: "#f59e0b" },
      { label: "SaaS", color: "#e84393" }
    ]
  },
  {
    image: "/podcast.jpg",
    author: "Orlando Diggs • 1 Jan 2023",
    title: "Podcast: Creating a better CX community",
    desc: "Starting a community doesn’t need to be complicated.",
    tags: [
      { label: "Podcasts", color: "#9b59b6" },
      { label: "Customer Success", color: "#3a5bdc" }
    ]
  }
];

function ArrowSVG({ size = 18 }) {
  return (
    <svg
      className="title-arrow"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M6 18L18 6M14 6h4v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function App() {
  return (
    <div className="container">
      <h1 className="page-title">All blog posts</h1>

      <div className="grid">
        {blogs.map((blog, i) => (
          <article key={i} className="card">
            <img src={blog.image} alt={blog.title} className="card-img" />

            <div className="card-content">
              <div className="author">{blog.author}</div>

              <div className="title-row">
                <h2 className="title">{blog.title}</h2>
                <ArrowSVG />
              </div>

              <p className="desc">{blog.desc}</p>

              <div className="tags">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="tag"
                    style={{ color: tag.color }}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}