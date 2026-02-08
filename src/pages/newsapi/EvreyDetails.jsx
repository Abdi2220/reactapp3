import { useLocation } from "react-router"
import { formatDistanceToNow } from "date-fns"
import { da } from "date-fns/locale"
import { Link } from "react-router"
import DOMPurify from "dompurify";



const EvreyDetails = () => {
  const location = useLocation()
  const { newsdetails: n } = location.state

  const htmlContent = "<p>This is raw <strong>HTML</strong> content.<p>";
  const sanitizedHtmlContent = DOMPurify.sanitize(htmlContent);



  return (
    <section>
      <div className="rounded-2xl p-6 border border-blue-400 hover:border-green-400 transition-all hover:-translate-y-1 ">




        <img src={n.urlToImage || "https://dummyimage.com/1280x720/fff/aaa"} alt={n.title ? "foto " + n.title : "News image"}
          className="w-full h-64 object-cover rounded-xl mb-4" />


        <h1>{n.title}</h1>

        <p>{n.puplishedAT}</p>
        <p>{n.description}</p>

        <br />

        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(n.content) }} className="py-5" />



        <p>
          {formatDistanceToNow(new Date(n.publishedAt), { locale: da, addSuffix: true })}
        </p>






        <Link to="/everything">&larr; Tilbage til oversigten</Link>



        <a target="_blank" href={n.url}>læs mere</a>

        {/* link til detaljer send data med */}



      </div>

    </section>
  )
}

export default EvreyDetails