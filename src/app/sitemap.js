// app/sitemap.js
export default async function sitemap() {
    const baseUrl = "https://snickbyseo.vercel.app";
    
    // List all your static and dynamic routes
    const routes = [
      { url: baseUrl, lastModified: new Date() },               // Homepage
      { url: `${baseUrl}/about`, lastModified: new Date() },    // About page
      { url: `${baseUrl}/services`, lastModified: new Date() }, // Services
      { url: `${baseUrl}/blog`, lastModified: new Date() },     // Blog
      { url: `${baseUrl}/contact`, lastModified: new Date() },  // Contact
    ];
  
    // Add dynamic routes here (e.g., blog posts fetched from an API/CMS)
    // Example:
    // const posts = await fetch('your-api-endpoint').then(res => res.json());
    // const dynamicRoutes = posts.map(post => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: new Date(post.updatedAt) }));
    
    return [...routes /*, ...dynamicRoutes */];
  }