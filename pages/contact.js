// import Link from "next/link"

const Contact = () => {
  return (
    <div className="flex-center flex-col min-h-screen pt-10 md:pt-40 w-full md:w-3/5 mx-auto">
      <h1>Contact</h1>
      <a href="mailto:hello@secassets.com" className="a">
        Email us
      </a>
      <a
        href="https://twitter.com/TheMcFreedom"
        target="_blank"
        rel="noopener noreferrer"
        className="a"
      >
        Twitter message
      </a>
    </div>
  )
}

export default Contact
