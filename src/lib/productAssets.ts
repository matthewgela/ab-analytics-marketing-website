export type ProductAsset = {
  preview: string;
  full: string;
};

export const productAssets: Record<string, ProductAsset> = {
  adey: {
    preview: "/images/products/adey-dashboard-preview.png",
    full: "/images/products/adey-dashboard.png",
  },
  nexio: {
    preview: "/images/products/nexio-dashboard-preview.png",
    full: "/images/products/nexio-dashboard.png",
  },
  tena: {
    preview: "/images/products/tena-dashboard-preview.png",
    full: "/images/products/tena-dashboard.png",
  },
};
