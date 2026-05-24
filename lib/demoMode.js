export const isDemoMode = process.env.NEXT_PUBLIC_ENV === "demo";

const DEMO_USER_ID_KEY = "threadixDemoUserId";
const DEMO_CART_KEY = "threadixDemoCart";
const LEGACY_LOGIN_KEY = "isLoggedin";

const readStorage = (key, fallback = null) => {
  if (typeof window === "undefined") return fallback;

  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const writeStorage = (key, value) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const normalizeDemoProduct = (product) => {
  const id = product._id?.$oid || product._id || product.id;
  const images = Array.isArray(product.images) ? product.images : [product.images].filter(Boolean);
  const toList = (value) => Array.isArray(value) ? value : [value].filter(Boolean);

  return {
    ...product,
    _id: id,
    id,
    desc: product.desc || product.disc || "",
    images,
    colors: toList(product.colors),
    size: toList(product.size),
  };
};

export const getDemoImageSrc = (image) => {
  const src = Array.isArray(image) ? image[0] : image;
  return src || "/hero-bg.png";
};

export const fetchDemoProducts = async () => {
  const response = await fetch("/products.json");
  const json = await response.json();
  return (json.data || []).map(normalizeDemoProduct);
};

export const fetchDemoCategories = async () => {
  const response = await fetch("/categories.json");
  const json = await response.json();
  return json.data || [];
};

export const fetchDemoFeaturedProducts = async () => {
  const products = await fetchDemoProducts();
  const featuredIds = [
    "6934c538fc13ae64fdf01ee1",
    "6934c538fc13ae64fdf01ef8",
    "6934c538fc13ae64fdf01ed9",
    "6934c538fc13ae64fdf01eed",
  ];

  return featuredIds
    .map((id) => products.find((product) => product._id === id))
    .filter(Boolean);
};

export const fetchDemoProduct = async (id) => {
  const products = await fetchDemoProducts();
  return products.find((product) => product._id === id || product.id === id) || null;
};

export const fetchDemoUsers = async () => {
  const response = await fetch("/users.json");
  return response.json();
};

export const fetchDemoOrders = async () => {
  const response = await fetch("/orders.json");
  const json = await response.json();
  return json.data || [];
};

export const fetchDemoOrder = async (orderId) => {
  const orders = await fetchDemoOrders();
  return orders.find((order) => order.orderId.toString() === orderId.toString()) || null;
};

export const loginDemoUser = (user) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(DEMO_USER_ID_KEY, user.id);
  localStorage.setItem(LEGACY_LOGIN_KEY, "true");
};

export const logoutDemoUser = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(DEMO_USER_ID_KEY);
  localStorage.removeItem(LEGACY_LOGIN_KEY);
};

export const getStoredDemoUserId = () => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(DEMO_USER_ID_KEY);
};

export const getDemoCart = () => readStorage(DEMO_CART_KEY, []);

export const saveDemoCart = (cart) => {
  writeStorage(DEMO_CART_KEY, cart);
  return cart;
};

export const addDemoCartItem = (product, quantity = 1) => {
  const cart = getDemoCart();
  const productId = product._id || product.id;
  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
    return saveDemoCart(cart);
  }

  return saveDemoCart([
    ...cart,
    {
      id: productId,
      productId,
      name: product.title,
      salePrice: product.salePrice,
      quantity,
      image: getDemoImageSrc(product.images),
    },
  ]);
};

export const updateDemoCartItem = (id, quantity) => {
  const cart = getDemoCart()
    .map((item) => item.id === id ? { ...item, quantity } : item)
    .filter((item) => item.quantity > 0);

  return saveDemoCart(cart);
};

export const removeDemoCartItem = (id) => {
  const cart = getDemoCart().filter((item) => item.id !== id);
  return saveDemoCart(cart);
};

export const clearDemoCart = () => saveDemoCart([]);
