/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      dangerouslyAllowSVG: true,
      domains: ['fr.web.img3.acsta.net', 'fr.web.img6.acsta.net', 'fr.web.img5.acsta.net', 'fr.web.img4.acsta.net', 'fr.web.img2.acsta.net'],
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  }
}

module.exports = nextConfig
