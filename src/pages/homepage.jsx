import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "./homepage.css";

const Homepage = () => {
  const navigate = useNavigate();
  const cardSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const sliderData = [
    {
      country: "Dubai",
      cards: [
        {
          images: [
            "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1YmFpfGVufDB8fDB8fHww",
            "https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHViYWl8ZW58MHx8MHx8fDA%3D",
          ],
          title: "Dubai Luxury Tour",
          days: "7 days & 6 nights",
          price: "INR 1,50,000",
          discount: "Save INR 30,000",
          rating: "4.9",
          reviews: "(95)",
        },
        {
          images: [
            "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGR1YmFpfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1546412414-28524ac58329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGR1YmFpfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1504556647341-3ce6ab157835?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGR1YmFpfGVufDB8fDB8fHww",
          ],
          title: "Explore Dubai Wonders",
          days: "5 days & 4 nights",
          price: "INR 1,20,000",
          discount: "Save INR 20,000",
          rating: "4.8",
          reviews: "(85)",
        },
        {
          images: [
            "https://images.unsplash.com/photo-1549944850-84e00be4203b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1YmFpfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1546412414-8035e1776c9a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGR1YmFpfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1509339022327-1e1e25360a41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGR1YmFpfGVufDB8fDB8fHww",
          ],
          title: "Dubai Adventure Tour",
          days: "6 days & 5 nights",
          price: "INR 1,40,000",
          discount: "Save INR 25,000",
          rating: "4.7",
          reviews: "(78)",
        },
        {
          images: [
            "https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGR1YmFpfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1546412414-28524ac58329?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGR1YmFpfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1504556647341-3ce6ab157835?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGR1YmFpfGVufDB8fDB8fHww",
          ],
          title: "Explore Dubai Wonders",
          days: "5 days & 4 nights",
          price: "INR 1,20,000",
          discount: "Save INR 20,000",
          rating: "4.8",
          reviews: "(85)",
        },
      ],
    },
    {
      country: "India",
      cards: [
        {
          images: [
            "https://images.unsplash.com/photo-1679301429776-08887a5e26d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRlbGhpfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1524229648276-e66561fe45a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amFpcHVyfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1599038442598-0bee725c0066?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFncmF8ZW58MHx8MHx8fDA%3D",
          ],
          title: "Golden Triangle Tour",
          days: "6 days & 5 nights",
          price: "INR 50,000",
          discount: "Save INR 10,000",
          rating: "5.0",
          reviews: "(110)",
        },
        {
          images: [
            "https://images.unsplash.com/photo-1470123808288-1e59739dea12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVubmFyfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1593417033852-66b46de814b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFsbGVwcGV5fGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1697729597066-7b3d09b6dab7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29jaGl8ZW58MHx8MHx8fDA%3D",
          ],
          title: "Kerala Backwaters Tour",
          days: "5 days & 4 nights",
          price: "INR 40,000",
          discount: "Save INR 8,000",
          rating: "4.9",
          reviews: "(95)",
        },
        {
          images: [
            "https://images.unsplash.com/photo-1705497242721-459526b5157e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGphaXB1cnxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1671219823697-5894526ffeb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8am9kaHB1cnxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1571586474585-eb06b013a79d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHVkYWlwdXJ8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1674909634726-2a810e89d25c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
          ],
          title: "Rajasthan Heritage Tour",
          days: "8 days & 7 nights",
          price: "INR 80,000",
          discount: "Save INR 15,000",
          rating: "4.8",
          reviews: "(120)",
        },
        {
          images: [
            "https://images.unsplash.com/photo-1470123808288-1e59739dea12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVubmFyfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1593417033852-66b46de814b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFsbGVwcGV5fGVufDB8fDB8fHww",
            "https://plus.unsplash.com/premium_photo-1697729597066-7b3d09b6dab7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a29jaGl8ZW58MHx8MHx8fDA%3D",
          ],
          title: "Kerala Backwaters Tour",
          days: "5 days & 4 nights",
          price: "INR 40,000",
          discount: "Save INR 8,000",
          rating: "4.9",
          reviews: "(95)",
        },
      ],
    },
    {
      country: "Singapore",
      cards: [
        {
          images: [
            "https://images.unsplash.com/photo-1730130856448-7c59854335c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2Fwb3JlJTIwQ2l0eSUyMFRvdXJ8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1495416506738-c180f9d57999?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2Fwb3JlJTIwc2VudG9zYSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1562474541-07ed748b1d46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2Fwb3JlJTIwZ2FyZGVuJTIwYnklMjB0aGUlMjBiYXl8ZW58MHx8MHx8fDA%3D",
          ],
          title: "Singapore Adventure",
          days: "4 days & 3 nights",
          price: "INR 90,000",
          discount: "Save INR 15,000",
          rating: "4.9",
          reviews: "(120)",
        },
        {
          images: [
            "https://plus.unsplash.com/premium_photo-1661962355847-9d03ce8bc740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlJTIwY2l0eSUyMHRvdXIlMjBtYXJpbmElMjBiYXklMjBzYW5kfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2Fwb3JlJTIwY2l0eSUyMHRvdXIlMjBDaGluYXRvd258ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1428677361686-f9d23be145c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHNpbmdhcG9yZSUyMGNpdHklMjB0b3VyJTIwT3JjaGFyZCUyMFJvYWR8ZW58MHx8MHx8fDA%3D",
          ],
          title: "Singapore City Tour",
          days: "3 days & 2 nights",
          price: "INR 75,000",
          discount: "Save INR 10,000",
          rating: "4.8",
          reviews: "(100)",
        },
        {
          images: [
            "https://plus.unsplash.com/premium_photo-1682091968155-3828011a883e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlJTIwWm9vfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2luZ2Fwb3JlJTIwTmlnaHQlMjBTYWZhcml8ZW58MHx8MHx8fDA%3D",
            "https://plus.unsplash.com/premium_photo-1719955783013-218981c48c89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlJTIwUml2ZXIlMjBTYWZhcml8ZW58MHx8MHx8fDA%3D",
          ],
          title: "Singapore Wildlife Expedition",
          days: "5 days & 4 nights",
          price: "INR 1,00,000",
          discount: "Save INR 20,000",
          rating: "4.7",
          reviews: "(90)",
        },
        {
          images: [
            "https://plus.unsplash.com/premium_photo-1661962355847-9d03ce8bc740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2luZ2Fwb3JlJTIwY2l0eSUyMHRvdXIlMjBtYXJpbmElMjBiYXklMjBzYW5kfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2Fwb3JlJTIwY2l0eSUyMHRvdXIlMjBDaGluYXRvd258ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1428677361686-f9d23be145c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHNpbmdhcG9yZSUyMGNpdHklMjB0b3VyJTIwT3JjaGFyZCUyMFJvYWR8ZW58MHx8MHx8fDA%3D",
          ],
          title: "Singapore City Tour",
          days: "3 days & 2 nights",
          price: "INR 75,000",
          discount: "Save INR 10,000",
          rating: "4.8",
          reviews: "(100)",
        },
      ],
    },
    {
      country: "France",
      cards: [
        {
          images: [
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmlzfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1500039436846-25ae2f11882e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TG91dnJlJTIwTXVzZXVtfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1567187155374-cd9135b1f247?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2VpbmUlMjBSaXZlciUyMENydWlzZXxlbnwwfHwwfHx8MA%3D%3D",
          ],
          title: "Paris City Tour",
          days: "5 days & 4 nights",
          price: "INR 1,20,000",
          discount: "Save INR 20,000",
          rating: "5.0",
          reviews: "(150)",
        },
        {
          images: [
            "https://images.unsplash.com/photo-1491251880772-1fe1c8b6d5f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
            "https://images.unsplash.com/photo-1598737285721-29346a5c9278?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmMlMjBjYW5uZXN8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1697637820228-594d1602e32e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJhbmMlMjBuaWNlfGVufDB8fDB8fHww",
          ],
          title: "French Riviera Getaway",
          days: "6 days & 5 nights",
          price: "INR 1,50,000",
          discount: "Save INR 30,000",
          rating: "4.9",
          reviews: "(120)",
        },
        {
          images: [
            "https://images.unsplash.com/photo-1515356619894-b89131037e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmMlMjBDYXN0bGVzfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1655679426348-eb31059e5869?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyYW5jJTIwVmluZXlhcmRzfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1508682641856-78948a748357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
          ],
          title: "Loire Valley Castle Tour",
          days: "4 days & 3 nights",
          price: "INR 1,00,000",
          discount: "Save INR 15,000",
          rating: "4.8",
          reviews: "(110)",
        },
        {
          images: [
            "https://images.unsplash.com/photo-1491251880772-1fe1c8b6d5f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
            "https://images.unsplash.com/photo-1598737285721-29346a5c9278?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJhbmMlMjBjYW5uZXN8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1697637820228-594d1602e32e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJhbmMlMjBuaWNlfGVufDB8fDB8fHww",
          ],
          title: "French Riviera Getaway",
          days: "6 days & 5 nights",
          price: "INR 1,50,000",
          discount: "Save INR 30,000",
          rating: "4.9",
          reviews: "(120)",
        },
      ],
    },
    {
      country: "Africa",
      cards: [
        {
          images: [
            "https://images.unsplash.com/photo-1543107484-b13a21b26e8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFhc2FpJTIwTWFyYXxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1678019027690-8be65490c954?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TmFpcm9iaSUyQyUyMGtlbnlhfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNhZmFyaSUyMEFkdmVudHVyZSUyMGluJTIwS2VueWElMjAlMjBNYWFzYWklMjBNYXJhfGVufDB8fDB8fHww",
          ],
          title: "Safari Adventure in Kenya",
          days: "7 days & 6 nights",
          price: "INR 1,80,000",
          discount: "Save INR 40,000",
          rating: "5.0",
          reviews: "(200)",
        },
        {
          images: [
            "https://images.unsplash.com/photo-1481464904474-a575a33b44a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWZyaWNhfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFmcmljYSUyMGNhcHRvd258ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1496497243327-9dccd845c35f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhJTIwY2FwdG93bnxlbnwwfHwwfHx8MA%3D%3D",
          ],
          title: "South Africa Highlights",
          days: "10 days & 9 nights",
          price: "INR 2,00,000",
          discount: "Save INR 50,000",
          rating: "4.9",
          reviews: "(180)",
        },
        {
          images: [
            "https://images.unsplash.com/photo-1562679299-266edbefd6d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RWd5cHQlMjBweXJhbW1pZHN8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1620966528923-fd41bcde8bc4?q=80&w=1793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1566288623394-377af472d81b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEVneXB0JTIwTHV4b3xlbnwwfHwwfHx8MA%3D%3D",
          ],
          title: "Egyptian Wonders",
          days: "8 days & 7 nights",
          price: "INR 1,70,000",
          discount: "Save INR 35,000",
          rating: "4.8",
          reviews: "(160)",
        },
        {
          images: [
            "https://images.unsplash.com/photo-1481464904474-a575a33b44a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWZyaWNhfGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1515205244153-fce4e5d8bc49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFmcmljYSUyMGNhcHRvd258ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1496497243327-9dccd845c35f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWZyaWNhJTIwY2FwdG93bnxlbnwwfHwwfHx8MA%3D%3D",
          ],
          title: "South Africa Highlights",
          days: "10 days & 9 nights",
          price: "INR 2,00,000",
          discount: "Save INR 50,000",
          rating: "4.9",
          reviews: "(180)",
        },
      ],
    },
  ];
  return (
    <div className="slider-container">
      {sliderData.map((countryData, countryIndex) => (
        <div key={countryIndex} className="country-section">
          
          {/* Country Name Container */}
          <div className="country-name-container">
            <h2>{countryData.country}</h2>
          </div>
          {/* Cards Container */}
          <div className="layout-container">
            {countryData.cards.map((card, cardIndex) => (
              <div key={cardIndex} className="layout-item">
                <div className="card">
                  <div className="image-slider">
                    <Slider {...cardSliderSettings}>
                      {card.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="image-slide">
                          <img src={image} alt={`Slide ${imgIndex}`} className="card-image" />
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className="card-content">
                  <div className="info-container">  {/* Added this container */}
                    <p className="days">{card.days}</p>
                    <p className="rating">⭐ {card.rating} <span></span></p>
                  </div>
                    <h3>{card.title}</h3>
                    <p className="price">{card.price} <span>{card.discount}</span></p>
                   
                    <div className="card-buttons" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                     <button 
                      className="btn btn-info" onClick={() => navigate("/detailpage")}
                        style={{ padding: '10px 20px', fontSize: '14px', backgroundColor: '#C4242B', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease', gap: '50px' }}
                          onMouseOver={(e) => e.target.style.backgroundColor = '#9a1f1b'}
                          onMouseOut={(e) => e.target.style.backgroundColor = '#C4242B'}>
                          View Pack
                          </button>
                      <button 
                      className="btn btn-book" onClick={() => navigate("/BookingPage")} 
                      style={{ padding: '10px 20px', fontSize: '14px', backgroundColor: '#C4242B', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease', gap: '50px' }}
                      onMouseOver={(e) => e.target.style.backgroundColor = '#9a1f1b'}
                      onMouseOut={(e) => e.target.style.backgroundColor = '#C4242B'}>
                          Book Now
                       </button>
                     </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}  

export default Homepage;

