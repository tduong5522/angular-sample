export interface ImageProduct {
  order: number;
  thumbnail: string;
  src: string;
}

export const mockImages = [
    { 
      order: 1, 
      thumbnail: '../../../assets/images/image-product-1-thumbnail.jpg',
      src: '../../../assets/images/image-product-1.jpg'
    },
    { 
      order: 2, 
      thumbnail: '../../../assets/images/image-product-2-thumbnail.jpg',
      src: '../../../assets/images/image-product-2.jpg'
    },    { 
      order: 3, 
      thumbnail: '../../../assets/images/image-product-3-thumbnail.jpg',
      src: '../../../assets/images/image-product-3.jpg'
    },    { 
      order: 4, 
      thumbnail: '../../../assets/images/image-product-4-thumbnail.jpg',
      src: '../../../assets/images/image-product-4.jpg'
    },
  ];