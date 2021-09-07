import { API_URL } from "../config";

// fetch global data
export async function getGlobalData() {
  const response = await fetch(`${API_URL}/global`);
  const data = await response.json();

  return data;
}

// fetch home page data
export async function getHomePageData() {
  const response = await fetch(`${API_URL}/homepage`);
  const data = await response.json();

  return data;
}

// fetch blog page data
export async function getBlogPageData() {
  const response = await fetch(`${API_URL}/blogpage`);
  const data = await response.json();

  return data;
}

// fetch contact page data
export async function getContactPageData() {
  const response = await fetch(`${API_URL}/contactpage`);
  const data = await response.json();

  return data;
}

// fetch about us page data
export async function getAboutUsPageData() {
  const response = await fetch(`${API_URL}/aboutuspage`);
  const data = await response.json();

  return data;
}

// fetch team page data
export async function getTeamPageData() {
  const response = await fetch(`${API_URL}/teampage`);
  const data = await response.json();

  return data;
}

// get all blog posts
export async function getAllBlogPosts(PER_PAGE, start) {
  const response = await fetch(
    `${API_URL}/blogs?_sort=created_at:ASC&_limit=${PER_PAGE}&_start=${start}`
  );
  const data = await response.json();

  return data;
}

// get single blog post
export async function getSingleBlogPost(slug) {
  const response = await fetch(`${API_URL}/blogs?Slug=${slug}`);
  const data = await response.json();

  return data;
}

// get related blog post
export async function getRelatedBlogPosts(limit) {
  const response = await fetch(`${API_URL}/blogs?_limit=${limit}`);
  const data = await response.json();

  return data;
}

// get all team members
export async function getAllTeamMembers() {
  const response = await fetch(`${API_URL}/teams?_sort=created_at:ASC`);
  const data = await response.json();

  return data;
}

// get all careers
export async function getAllCareers() {
  const response = await fetch(`${API_URL}/careers?_sort=created_at:ASC`);
  const data = await response.json();

  return data;
}

// get all testimonials
export async function getAllTestimonials() {
  const response = await fetch(`${API_URL}/testimonials?_sort=created_at:DESC`);
  const data = await response.json();

  return data;
}
