import React from "react";
import "./wehiring.css";
import { Link } from "react-router-dom";

const WeHiring = () => {
  const images1 = [
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://s3-alpha-sig.figma.com/img/40b3/63d1/c2b6e5b3681d275a2b03da58013e095e?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ViKO3GuS~iEbZYPSeYXbxfV7NRR26wMQjtjBNPj~WMMno~Qov~CXi6qJmcqH~x1xrooIijOELTysSzUgU7~RHq8qYMzJSOa89imaVnPB01FVNUXOs9AV3R86RzVpwlYnJkmTu3wmbqvLsU2LO6sZa9EboIMJaImGb37i9dOcTQDQUbdXB6cpQkpnPLMMVkODEev1D53qYsO984iT7zb42AmNhcsfaOFqX5gK~xy7VOUPAXV3i13Q-lj9gpYTUW-DMM824umGfMseLh9UXmjGjBJsSKhEaDplzai1Z7djdffbwB2iRzUUVsaBotslMQ23q5dvxI4QY8GXfXw0ryJAYA__",
    "https://s3-alpha-sig.figma.com/img/a75c/55a6/e0100b64e3575c2c7b43a3b5cbefeade?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HOHkAKdxsOM8ciElow~gPPgL1yWNJmOMwHKv4CsDdxv0grLG5vuvNUUiVqtdjvVQu2hnnKK0svpRanTUYZuFjawh7BjP7SRFCP~Z~5PvgDsyszbXEJnxf8JDsNTGgPRr-h6N2pqkxmHrkm3wi6OoomWAlrjREDHm~nDlWlhoW0o-8jazV~16skhezcYK5Nec5eDg-IoD9CQAPcVcwDOKUQB4dOTigN9mSD7mfCzG6IwnVxPi8RWeFGolf-ZvjnrmMRK1t7g1XHQvGka-itH-zc5Po7IgxRVUrbWosj8fyWK1p1pU4HR0Uz8R4Mw5DVznVC8taO-SHcEHH-TuUQAOLQ__",
    "https://s3-alpha-sig.figma.com/img/4968/f7cf/5b04a3ccd69dcaa622952b928bcb95d1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Uuo~ZZgTqozETgYIjnI8I6A3ZvuX6x5EzucKvaEKAzakEWzDiISb6QGwcfsvTWokL1tk8muChzJRpuycseKtnJgbbfu2zrhtMOHJZvfZfUwDRWCFm80xdThEH8IUhnhBool90mskC2IKlJw~7Eqw~GKq~9Ml0GY8w90OJYdVuCtO8VA0M9YufUaHcP55GPyXlgyZKCMEkRhTDDq-474gK5FEgf~iqMmYgj4Q7QYtEESFZf602kQGu8tjjG8nrLD5XvSktKPQOqIs4op9EIk9sXeWrf3Rf9qyRva~qUHqGIBNXX8DfBJ8dF2bJlya3JXguoDle4f1f59kxJTAJvrMyQ__",
    "https://s3-alpha-sig.figma.com/img/20fa/c0f6/516e96860598e0124fbd454e2bed5d94?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QGP9wdfCf44ZOv-Kg4c2KlH9-AvC8a~Exq3RWsFuHKORdcWmmiaPgBDto~uLjHA-MV~j4AsyspUel-0vlJ58vZ~VU1a6gFpOdwaUgrY5iETWcStjRg28upmdUoL6hWNAK8eo1MO-9u52UAdD1puAKiS0bQp3JhCpvWX0cRRlkPpiYsuNS6jo~IsIsIW0pJ7PIqpDI2UBkUXBphbS1PULHco60TmKjDvDm903JqttkZoHAIDF3Y58xzy~wbFnCZGLkwq~tfme1FaveWFiu3p4YfFXg2B1WqvE-AU~IPjARofJ5V~lCO4KjaRAjK7ipYnfcrAuSMD2soakJEABlujGfA__",
    "https://s3-alpha-sig.figma.com/img/5464/6a67/a4f2133cb53f99dfef76ce1a9588a101?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ChvYtH-D52y25v9REo4EFbC1YmPPB6ckXlfnKnbNhMkmMRHQhU09VlnUYlU7i7D28y19f65KmGgYUHwb8RTbPNWctZ0k0M4ZSJzrCFpaCsfwJGi7TJCeGh6-DCbvXp2NkJdggtBWYsNL~Ttm12PEA4i13d6xBfSn~P8K1knymqx5G7R67B7BG7H~ix8OxHuLBxEqLtI77F3-f4x3x~oUoGkHRXtTza2-DZ369MZhEnSJq560AAQx7tgV-exEIyzW7k4vnFEsAdVYqkcpok5-PZct0GojN9XqNj1LRRHy8NcLDn8Jt9dr3IJ2h4nQ~SjLz0DKnH7dOMNWExt5SZlgbA__",
    "https://s3-alpha-sig.figma.com/img/8b24/b86f/25eca21c6b23b72a76bfbbe160f6ce3c?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZvlcO-gnT9npbkeV1wtGY0cmjCVCzac154q99GkDp3fqUnzNuBD3PZVv0IGk7w3t4ZW9m4-k05PAV7D1bQ7sgg0POi7ZG2EhFpikn8feLq6zXRugtyZ96~NiFb6XE-L6IGhGwhN8TfXxdC7J3Xny3VIuiuqzyNkRiabhNj6FJRM-~XLHNUUjqe1Q0XNDnpxEjZtrXV9m~cAN4LFwWw-Kj8u8Xr9urmbDtARtEmiEjnxDV-TmDLGixfSK~Fu2RNhZDgrPM~VukNs9UAyo7w~D6AR9FWBH6QSFejA-TkMtqiLkjFE2B0q-OEN~jiz4OSmuT9xjKkm5BEF0cQhP~Wwytw__",
    "https://s3-alpha-sig.figma.com/img/d360/7f64/7adf36549b2520731b4e77496a49457f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MtRuWD-gw0X2BQOQTAuabl9qOI~iyMaRxfoCmpVRCJ-cJvXT4gRJ2ajRUloqYH3BCml2651QY6idT~WMsLzTg0h-tKLGtTspEr6G~fAg98vpyb~bDqeTYBpmvMOPDnfxBL~LwFdw4B5X7bbNSyiYuC7Vyxhs6dowzoJfkAPoVP4dl8TnE4QVv-dJwXjV7m-fAdifByrlzXsQlRNE5DIlbY1avX1HsFXxwiWlK7siyOc5rF6qgtNQgXBaR8pw1ejLLdMAxi7uLc5ckrsKrMfEoHI-tjfCp9HwgMpnXoQoyV6N6CcCZb7nEJXmvboDzLq0r~JZ7KhVfXLV-DgLiVmJtA__",
  ];
  const images2 = [
    "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvdXB8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvdXB8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1525026198548-4baa812f1183?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM3fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1560249951-67f7a21fbd98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const categories = ["All", "Sales & BD", "Marketing", "Engineering", "Others"];
  const jobs = [
    { title: "Sales and Business Development Associate", location: "Jaipur", type: "Full Time" },
    { title: "Content Marketing Specialist", location: "Jaipur", type: "Full Time" },
    { title: "Content Writer", location: "Jaipur", type: "Full Time" },
    { title: "Full Stack Developer", location: "Jaipur", type: "Full Time" },
    { title: "Ruby on Rails Developer", location: "Jaipur", type: "Full Time" },
    { title: "Team Lead Sales & BD", location: "Jaipur", type: "Full Time" },
    { title: "Head of Customer Experiences", location: "Jaipur", type: "Full Time" },
    { title: "Social Media Specialist", location: "Jaipur", type: "Full Time" },
    { title: "HR Executive / Manager", location: "Jaipur", type: "Full Time" },
    { title: "Creative Designer", location: "Jaipur", type: "Full Time" },
    { title: "SEO Specialist", location: "Jaipur", type: "Full Time" },
  ];
  return (
    <div className="we-hiring-container">
      {/* Hero Section */}
      <div className="we-hiring-section">
  <div className="content">
    <h5 className="subheading">Careers</h5>
    <h1 className="heading">
      Make Exploria <br />
      <span>Your Next </span> <br />
      <span> Destination </span>
    </h1>
    <p className="description">
      We believe in a career that's just as adventurous as the trips we take.
    </p>
    <button className="join-button">Join Our Team</button>
  </div>
</div>


      {/* Career Section */}
      <div className="career-section">
      <h2 className="career-title">THE CAREER MAP IS IN YOUR HANDS</h2>
      <p className="career-text">
        Our work philosophy is simple. We want to grow, and we want you to grow.
        And to make that happen, we encourage you to explore your journey your
        own way while we provide the correct leadership, resources, and
        opportunities to you.
      </p>

      {/* First Auto-Scrolling Image Slider (Left to Right - Clockwise) */}
      <div className="image-slider-wrapper">
        <div className="image-slider scroll-right">
          {images1.concat(images1).map((image, index) => (
            <img key={index} src={image} alt={`slider1-${index}`} className="slider-img" />
          ))}
        </div>
      </div>

      {/* Second Auto-Scrolling Image Slider (Right to Left - Anti-Clockwise) */}
      <div className="image-slider-wrapper">
        <div className="image-slider scroll-left">
          {images2.concat(images2).map((image, index) => (
            <img key={index} src={image} alt={`slider2-${index}`} className="slider-img" />
          ))}
        </div>
      </div>
    </div>

    <div className="job-section">
      {/* Filter Buttons */}
      <div className="custom-shape-divider-top-1738752675">
  <div className="custom-shape-divider-top-1738752979">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,80C150,30,400,-20,700,50S1150,120,1200,70V0H0Z" class="shape-fill"></path>
    </svg>
  </div>
</div>

      <div className="job-filters">
        {categories.map((category, index) => (
          <button key={index} className="filter-button">
            {category}
          </button>
        ))}
      </div>

      {/* Job Cards */}
      <div className="job-list">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">
            <div className="job-details">
              <h3 className="job-title">{job.title}</h3>
              <p className="job-info">
                {job.location} - {job.type}
              </p>
            </div>
            <Link to="/applyjob"></Link>
            <button className="apply-button">Apply</button>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default WeHiring;
